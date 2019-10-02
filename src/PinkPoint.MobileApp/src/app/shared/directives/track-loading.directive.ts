import { Directive, Input, OnInit, OnDestroy } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { RootState, RequestType } from '../../app.state';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: 'ion-infinite-scroll[appTrackLoading]'
})
export class TrackLoadingDirective implements OnInit, OnDestroy  {

  // tslint:disable-next-line:no-input-rename
  @Input('appTrackLoading') public requestType: RequestType;

  private stop$ = new Subject();
  private currentPendingState = false;

  constructor(private store$: Store<RootState>, private infiniteScroll: IonInfiniteScroll) { }

  ngOnInit(): void {
    this.store$.pipe(
      select(s => s.app.requests.pending),
      takeUntil(this.stop$),
    ).subscribe(pendingState => {
      const newPendingState = !!pendingState[this.requestType];
      if (newPendingState !== this.currentPendingState && !newPendingState) {
        this.infiniteScroll.complete();
      }

      this.currentPendingState = pendingState[this.requestType];
    });
  }

  ngOnDestroy(): void {
    this.stop$.next();
  }
}
