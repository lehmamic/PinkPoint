import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RootState } from '../app.state';
import { ClimbingRoutesState, selectClimbingRoutesState } from './climbing-routes.state';
import { QueryClimbingRoutesAction, QueryClimbingRoutesNextPageAction } from './climbing-routes.actions';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-climbing-routes',
  templateUrl: './climbing-routes.page.html',
  styleUrls: ['./climbing-routes.page.scss'],
})
export class ClimbingRoutesPage implements OnInit {
  public climbingRoutesState$: Observable<ClimbingRoutesState>;
  public siteId: string;

  constructor(private store$: Store<RootState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.climbingRoutesState$ = this.store$.pipe(
      select(selectClimbingRoutesState),
    );

    this.route.paramMap.pipe(
      filter(paramMap => paramMap.has('siteId')),
      map(paramMap => paramMap.get('siteId'))
    ).subscribe(siteId => {
      this.siteId = siteId;
      this.store$.dispatch(new QueryClimbingRoutesAction({ siteId: this.siteId, queryParam: { skip: 0, take: 10 } }));
    });
  }

  public doRefresh(event) {
    this.store$.dispatch(new QueryClimbingRoutesAction({ siteId: this.siteId, queryParam: { skip: 0, take: 10 } }));
  }

  public loadData(event) {
    this.store$.dispatch(new QueryClimbingRoutesNextPageAction({ siteId: this.siteId }));
  }
}
