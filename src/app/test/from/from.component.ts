import { Component } from '@angular/core';

@Component({
  selector: 'app-from',
  templateUrl: './from.component.html',
  styleUrls: ['./from.component.scss']
})
export class FromComponent {
    public fromInfo:any = {
      name:'',
      sex:"",
      city:'上海',
      cityList:['长沙','官洲','上海',],
      poddyList:[
        {
          check:false,
          name:'吃饭'
        },
        {
          check:false,
          name:'睡觉'
        },
        {
          check:true,
          name:'打豆豆'
        },
      ],
      mark:''
    }
    constructor(){
        localStorage.setItem('name','laoluo')
    }
    set(){
      
    }
    
}
