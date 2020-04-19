import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { HeaderComponent } from './header/header.component'
import { DefaultLayoutComponent } from './default-layout/default-layout.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const components = [
  HeaderComponent,
  DefaultLayoutComponent,
  PageNotFoundComponent,
]

const exportComponents = [DefaultLayoutComponent]

@NgModule({
  declarations: components,
  exports: [...exportComponents],
  imports: [CommonModule, RouterModule],
})
export class SharedModule {}
