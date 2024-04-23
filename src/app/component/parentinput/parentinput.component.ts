import { Component,Input, OnInit } from '@angular/core';



@Component({
  selector: 'app-parentinput',
  templateUrl: './parentinput.component.html',
  styleUrls: ['./parentinput.component.css']
})


export class ParentinputComponent implements OnInit{
dialogopen:boolean=false;
name: string = '';
phone!:number;
output: any;
  send: any []=[];

  ngOnInit(): void {

  }

  copyDataFromChild(data: any) {
    this.output = data;
  }

sendchild(){

  this.send=[{
    name:this.name,
    phone:this.phone
  },
  {
    name:this.name,
    phone:this.phone
  }
]
}



}
