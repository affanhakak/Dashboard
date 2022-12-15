import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';
import { AreaComponent } from './shared/widgets/area/area.component';
import { CardComponent } from './shared/widgets/card/card.component';
import { PieComponent } from './shared/widgets/pie/pie.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
      },
      {
        path: 'posts',
        component: PostsComponent,
      },
      {
        path:'area',
        component: AreaComponent
      },
      {
        path:'card',
        component: CardComponent
      },
      {
        path:'pie',
        component: PieComponent
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
