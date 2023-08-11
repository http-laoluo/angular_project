import { Component } from '@angular/core';
import {CommonService} from "../../service/common.service"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    constructor(public common:CommonService){

    }
    public list:any[] = []
   ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
     let api = 'api/productlist'
     this.common.get(api).then((res:any)=>{
       console.log(res);
       this.list = res.result
     })
   }
}
