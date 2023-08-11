import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameComponent } from './test/name/name.component';
import { HeadComponent } from './test/head/head.component';
import { FromComponent } from './test/from/from.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { DetailComponent } from './component/detail/detail.component';
import { IndexComponent } from './component/index/index.component';

import { EditComponent } from './component/edit/edit.component';
import { NewsComponent } from './component/news/news.component';
import { JournalismComponent } from './component/journalism/journalism.component';
const routes: Routes = [
  {
    path:'index',
    component:IndexComponent,
    children:[
      {
        path:'home',
        component:HomeComponent
      },
      {
        path:'product',
        component:ProductComponent,
        children:[
          {
            path:'edit',
            component:EditComponent
          },
          {
            path:'news',
            component:NewsComponent
          },
          {
            path:'journalism',
            component:JournalismComponent
          },
    
        ]
      },
      {
        path:'from',
        component:FromComponent
      },
      {
        path:'head',
        component:HeadComponent
      },
    ]
  },

  {
    path:'detail/:id',
    component:DetailComponent
  },
  {
    path:'**',
    redirectTo:"index/home"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
