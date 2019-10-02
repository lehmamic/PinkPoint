import { Directive, Input, OnInit, OnDestroy, ViewContainerRef } from '@angular/core';
import { RootState, RequestType } from '../../app.state';
import { Store, select } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IonRefresher, IonInfiniteScroll } from '@ionic/angular';

@Directive({
  selector: 'ion-infinite-scroll[appTrackLoading], ion-refresher[appTrackLoading'
})
export class TrackLoadingDirective implements OnInit, OnDestroy  {

  // tslint:disable-next-line:no-input-rename
  @Input('appTrackLoading') public requestType: RequestType;

  private component: IonRefresher | IonInfiniteScroll;
  private stop$ = new Subject();
  private currentPendingState = false;

  constructor(private store$: Store<RootState>, viewContainerRef: ViewContainerRef) { 
    // tslint:disable-next-line:no-string-literal
    this.component = viewContainerRef['_data'].componentView.component;
  }

  ngOnInit(): void {
    this.store$.pipe(
      select(s => s.app.requests.pending),
      takeUntil(this.stop$),
    ).subscribe(pendingState => {
      const newPendingState = !!pendingState[this.requestType];
      if (newPendingState !== this.currentPendingState && !newPendingState) {
        this.component.complete();
      }

      this.currentPendingState = pendingState[this.requestType];
    });
  }

  ngOnDestroy(): void {
    this.stop$.next();
  }
}
