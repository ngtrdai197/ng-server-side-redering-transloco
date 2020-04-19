import { OnInit, OnDestroy } from '@angular/core'
import { Subscription, Subject } from 'rxjs'

export abstract class BaseComponent implements OnInit, OnDestroy {
  public subscriptions = new Subscription()
  public ngDestroyed$ = new Subject()

  constructor() {}

  ngOnInit() {}

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
    this.ngDestroyed$.next()
    this.ngDestroyed$.complete()
  }
}
