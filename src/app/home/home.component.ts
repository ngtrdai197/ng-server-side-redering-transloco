import { Component, OnInit, Inject } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { takeUntil, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'

import { BaseComponent } from '@shared/base-component/base.component'
import { SeoSocialService } from '@core/services/seo-social.service'
import { ISeoSocial } from '@core/interfaces/seo.interface'
import { HttpClient } from '@angular/common/http'
import { AuthService } from '@core/services'
import { LOCAL_STORAGE } from '@/tokens/localstorage.token'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent implements OnInit {
  public name = 'Nguyễn Đại'
  isAuthGithub = false
  constructor(
    private readonly seoSocialService: SeoSocialService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly httpClient: HttpClient,
    private readonly authService: AuthService,
    @Inject(LOCAL_STORAGE) private localStorage: Storage
  ) {
    super()
  }

  ngOnInit() {
    this.setMetaTags()
    const accessToken = this.localStorage.getItem('accessToken')
    if (accessToken) {
      this.authService.me().subscribe((me) => console.log('me', me))
    }
  }

  onLoginWithGithub() {
    const url =
      'https://github.com/login/oauth/authorize?client_id=8c778b22dac009f5ae4d'
    const name = 'Github Login'
    const specs = 'width=500,height=500'
  }

  logoutGithub() {
    this.httpClient
      .get(`http://localhost:3000/auth/github/logout`)
      .subscribe((res) => console.log('res', res))
  }

  private setMetaTags() {
    this.activatedRoute.data
      .pipe(
        takeUntil(this.ngDestroyed$),
        switchMap((data: ISeoSocial) => {
          const { title, url, description, imageUrl } = data
          this.seoSocialService.setData({
            title,
            url,
            description,
            imageUrl,
          })
          return of()
        }),
      )
      .subscribe()
  }
}
