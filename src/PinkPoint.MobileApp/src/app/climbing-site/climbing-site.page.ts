import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { RootState } from '../app.state';
import { ActivatedRoute } from '@angular/router';
import { map, filter, tap } from 'rxjs/operators';
import { LoadClimbingSiteAction } from './climbing-site.actions';
import { ClimbingSiteResponse } from '../shared/api/climbing-routes.service';
import { Observable } from 'rxjs';
import { selectClimbingSiteState } from './climbing-site.state';

@Component({
  selector: 'app-climbing-site',
  templateUrl: './climbing-site.page.html',
  styleUrls: ['./climbing-site.page.scss'],
})
export class ClimbingSitePage implements OnInit {

  public climbingSite$: Observable<ClimbingSiteResponse>;

  constructor(private store$: Store<RootState>, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      filter(paramMap => paramMap.has('id')),
      map(paramMap => new LoadClimbingSiteAction({ id: paramMap.get('id') })),
    ).subscribe(a => this.store$.dispatch(a));

    this.climbingSite$ = this.store$.pipe(
      select(selectClimbingSiteState),
      map(state => state.data),
    );
  }
}
