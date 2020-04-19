import { Routes } from '@angular/router'
import { DefaultLayoutComponent } from '@shared/default-layout/default-layout.component'
import { PageNotFoundComponent } from '@shared/page-not-found/page-not-found.component'
import { AppComponent } from './app.component'

export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('@/home/home.module').then((m) => m.HomeModule),
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('@/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
]
