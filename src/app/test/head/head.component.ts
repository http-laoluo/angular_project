import { Component } from '@angular/core';

@Component({
    selector: 'app-head',  
    templateUrl: './head.component.html',
    styleUrls: ['./head.component.scss']
})

export class HeadComponent{
    public name:any = '我是head组件'
    protected userinfo:string = 'laoluo'
    innerHTML ='<p>1111</p>'
    public arr:any[] = [{name:'张三',age:12},{name:'王五',age:152},{name:'李四',age:132},]
    public dete:any = new Date()
    public flag = true
    public valuedata = '111'
    constructor(){
       this.userinfo ='老罗呀'
    }
    run = ()=>{
        alert(this.valuedata)
    }
}