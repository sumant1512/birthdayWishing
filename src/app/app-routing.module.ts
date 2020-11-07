import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishPageComponent } from './wish-page/wish-page.component';

const routes: Routes = [
  {
    path: '',
    component: WishPageComponent,
  },
  {
    path: 'wish',
    component: WishPageComponent,
  },
  {
    path: '**',
    component: WishPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
