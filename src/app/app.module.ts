import { NgModule } from '@angular/core';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule ,HttpClientJsonpModule} from '@angular/common/http';



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

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    HeadComponent,
    FromComponent,
    HomeComponent,
    ProductComponent,
    DetailComponent,
    IndexComponent,
    EditComponent,
    NewsComponent,
    JournalismComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [ 
    {
      provide:LocationStrategy,
      useClass:HashLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
