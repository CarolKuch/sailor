import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  //   {
  //     path: 'home',
  //     component: HomeComponent
  // },
  // {
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'nav',
    component: NavigationComponent
  },
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
