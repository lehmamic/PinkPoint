import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { RootState, PendingRequestsState } from '../app.state';
import { QueryClimbingSitesAction, QueryClimbingSitesNextPageAction } from './climbing-sites.actions';
import { selectClimbingSitesState, ClimbingSitesState } from './climbing-sites.state';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClimbingSiteResponse } from '../shared/api/climbing-routes.service';

@Component({
  selector: 'app-climbing-sites',
  templateUrl: './climbing-sites.page.html',
  styleUrls: ['./climbing-sites.page.scss'],
})
export class ClimbingSitesPage implements OnInit {
  public climbingSitesState$: Observable<ClimbingSitesState>;

  constructor(private store$: Store<RootState>) { }

  ngOnInit() {
    this.climbingSitesState$ = this.store$.pipe(
      select(selectClimbingSitesState),
    );

    this.store$.dispatch(new QueryClimbingSitesAction({ skip: 0, take: 10 }));
  }

  public doRefresh(event) {
    this.store$.dispatch(new QueryClimbingSitesAction({ skip: 0, take: 10 }));
  }

  public loadData(event) {
    this.store$.dispatch(new QueryClimbingSitesNextPageAction());
  }
}
