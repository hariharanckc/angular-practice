import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit{
  // user1!: { id: string;name:string };

  user!:{id:string;name:string};

  constructor(public router:ActivatedRoute,public route:Router){}

  ngOnInit(): void {
// this.user={
//   id:this.router.snapshot.params['id'],
//   name:this.router.snapshot.params["name"]
// };
this.router.params.subscribe(( data: Params)=> {
  this.user={
    id:data['id'],
    name:data['name']
  }
})
  }

  getramdetails(){

    this.route.navigate(['/router',2,'ram'],{queryParams:{page:1,search:"hari"},fragment:'haran'},)
  }
  
}
