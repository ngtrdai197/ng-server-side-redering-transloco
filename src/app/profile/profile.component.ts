import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable, timer } from 'rxjs'
import { takeWhile, tap } from 'rxjs/operators'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  countDown$: Observable<number>
  autoRedirect = 5
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.accessToken) {
        localStorage.setItem('accessToken', params.accessToken)
        timer(1000, 1000)
          .pipe(
            takeWhile(() => this.autoRedirect > 0),
            tap(() => {
              this.autoRedirect--
              if (this.autoRedirect === 0) {
                this.router.navigate([''])
              }
            }),
          )
          .subscribe()
      }
    })
  }
}
