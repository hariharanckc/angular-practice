import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit{

  user!: {id:string,Name:string}
constructor(private route:ActivatedRoute){}
  ngOnInit(): void {
    this.user={
id:this.route.snapshot.params['id'],
Name:this.route.snapshot.params['name']
    }
  }
}
