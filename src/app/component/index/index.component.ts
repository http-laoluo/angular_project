import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
    public tabbar:any[] = [
      {
        title:"首页",
        img:'assets/riFill-home-5-fill.png',
        acimg:"assets/riFill-home-5-fill-s.png",
        path:'index/home'
      },
      {
        title:"案例1",
        img:'assets/if-space.png',
        acimg:"assets/if-space-s.png",
        path:'index/from'
      },
      {
        title:"案例2",
        img:'assets/md-school.png',
        acimg:"assets/md-school-s.png",
        path:'index/head'
      },
      {
        title:"案例3",
        img:'assets/md-person.png',
        acimg:"assets/md-person-s.png",
        path:'index/product'
      },
    ];
    public index:number = 0;
    constructor(public router:Router){
      this.router.events.subscribe((event:any)=>{
        if (event instanceof NavigationEnd) {
           console.log(event.url);
           this.tabbar.forEach((item,index) => {
                 if(event.url.includes(item.path)){
                   this.index = index
                 }
           });
        }
     })
    }
    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
     
    }
    go(path:any,key:number){
       this.router.navigate([path]);
       this.index = key
    }
}
