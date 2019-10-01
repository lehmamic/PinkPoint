import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { RootState } from '../app.state';
import { QueryClimbingSitesAction } from './climbing-sites.actions';
import { selectClimbingSitesState } from './climbing-sites.state';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ClimbingSiteResponse } from '../shared/api/climbing-routes.service';

@Component({
  selector: 'app-climbing-sites',
  templateUrl: './climbing-sites.page.html',
  styleUrls: ['./climbing-sites.page.scss'],
})
export class ClimbingSitesPage implements OnInit {
  public climbingSites$: Observable<ClimbingSiteResponse[]>;

  constructor(private store$: Store<RootState>) { }

  ngOnInit() {
    this.climbingSites$ = this.store$.pipe(
      select(selectClimbingSitesState),
      map(state => state.data),
    );

    this.store$.dispatch(new QueryClimbingSitesAction({ skip: 0, take: 10 }));
  }

}
