import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveserviceService } from 'src/app/service/reactiveservice.service';
import { TemplateService } from 'src/app/service/template.service';



export interface Hero {
  id: number;
  name: string;
}

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent implements OnInit {
  myForm!:FormGroup;
  data:{}={
name:"raj"
  };
  name: string='';
  roll:any;
  users: any;

  constructor(private formBuilder:FormBuilder,private service:ReactiveserviceService){}
  ngOnInit(): void {

    this.myForm = this.formBuilder.group({
      name: ['', Validators.required],
      roll: ['']
    });

    this.read();

  }
  onsubmit(){

      if (this.myForm && this.myForm.valid) {
        console.log('Form submitted:', this.myForm.value);
        // You can add your form submission logic here
        this.service.create(this.myForm.value).subscribe(response => {
          console.log(response);
        });
      } else {
        console.log('Form is invalid');
      }
  }

  read(){
    this.service.read().subscribe((res: any)=>{
this.users=res.rows.map((row:any)=>row.doc);
console.log(`success reed ${this.users}`);
    })
    
  }
  











}
