import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
     public navList:any[]=[
      {
        title:'新闻',
        path:'index/product/journalism'
      },
      {
        title:'头条',
        path:'index/product/news'
      },
      {
        title:'富文本',
        path:'index/product/edit'
      }
     ]
     constructor(public route:Router){

     }
     go(path:any){
        this.route.navigate([path])
     }
}
