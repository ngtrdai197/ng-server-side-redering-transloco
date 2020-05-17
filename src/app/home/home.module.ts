import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { CoreModule } from '@core/core.module'
import { HomeComponent } from './home.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Nguyen Dai Dev',
      description: 'Researching for coding',
      url: '/home',
      imageUrl:
        'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/28685295_974675742680428_6536081104377623789_n.jpg?_nc_cat=102&_nc_sid=7aed08&_nc_oc=AQlPM26-njesg4q8pB-E079FQOLZfowCQGzpwgNZSXAafZG7g3PhHSrTo4viiYhuf2U&_nc_ht=scontent.fsgn5-4.fna&oh=64f65bffdf74858cbc4e118445d923bd&oe=5EC2AD96',
    },
  },
]

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CoreModule],
})
export class HomeModule {}
