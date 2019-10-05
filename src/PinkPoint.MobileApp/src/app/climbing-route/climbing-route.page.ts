import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RootState } from '../app.state';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ClimbingRouteResponse } from '../shared/api/climbing-routes.service';
import { filter, map } from 'rxjs/operators';
import { LoadClimbingRouteAction } from './climbing-route.actions';
import { selectClimbingRouteState } from './climbing-route.state';

@Component({
  selector: 'app-climbing-route',
  templateUrl: './climbing-route.page.html',
  styleUrls: ['./climbing-route.page.scss'],
})
export class ClimbingRoutePage implements OnInit {

  public climbingRoute$: Observable<ClimbingRouteResponse>;

  constructor(private store$: Store<RootState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      filter(paramMap => paramMap.has('siteId') && paramMap.has('id')),
      map(paramMap => new LoadClimbingRouteAction({ siteId: paramMap.get('siteId'), id: paramMap.get('id') })),
    ).subscribe(a => this.store$.dispatch(a));

    this.climbingRoute$ = this.store$.pipe(
      select(selectClimbingRouteState),
      map(state => state.data),
    );
  }

}
