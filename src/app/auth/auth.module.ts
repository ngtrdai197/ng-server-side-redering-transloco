import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'

import { LoginComponent } from './login/login.component'
import { SignUpComponent } from './sign-up/sign-up.component'

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
]

@NgModule({
  declarations: [LoginComponent, SignUpComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AuthModule {}
