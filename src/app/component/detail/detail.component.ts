import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
    constructor(public router:ActivatedRoute,public route:Router ,public common:CommonService){

    }
    public id:any = '';
    public api:string = 'api/productcontent?id=';
    public data:any={};
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
       this.router.params.subscribe((res:any)=>{
          console.log(res);
          this.id = res.id
          this.api  = this.api + res.id
          this.getData()
       })
      
       
    }
    getData(){
        this.common.get(this.api).then((res:any)=>{ 
          console.log(res);
            this.data = res.result[0]
        })
    }
    onback(){
       this.route.navigate(["/index/home",""])
    }
}
