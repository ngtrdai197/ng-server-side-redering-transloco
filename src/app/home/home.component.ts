import { Component, OnInit } from '@angular/core'
import { BaseComponent } from '@shared/base-component/base.component'
import { SeoSocialService } from '@core/services/seo-social.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent extends BaseComponent implements OnInit {
  public name = 'Nguyễn Đại'
  private data = {
    name: this.name,
    description: 'Researching for coding',
    image:
      // tslint:disable-next-line:max-line-length
      'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/28685295_974675742680428_6536081104377623789_n.jpg?_nc_cat=102&_nc_sid=7aed08&_nc_oc=AQlPM26-njesg4q8pB-E079FQOLZfowCQGzpwgNZSXAafZG7g3PhHSrTo4viiYhuf2U&_nc_ht=scontent.fsgn5-4.fna&oh=64f65bffdf74858cbc4e118445d923bd&oe=5EC2AD96',
  }
  constructor(private readonly seoSocialService: SeoSocialService) {
    super()
  }

  ngOnInit() {
    this.seoSocialService.setData({
      title: this.data.name,
      description: this.data.description,
      imageUrl: this.data.image,
      url: '/home',
    })
  }
}
