import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator } from '@angular/forms';
import { ReactiveserviceService } from 'src/app/service/reactiveservice.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-logincrducouchstructure',
  templateUrl: './logincrducouchstructure.component.html',
  styleUrls: ['./logincrducouchstructure.component.css']
})
export class LogincrducouchstructureComponent implements OnInit {
  loginform!:FormGroup

  constructor(public fb:FormBuilder,public service:ReactiveserviceService){}

  ngOnInit(): void {
this.loginform=this.fb.group({
  name:'',
  password:''
})
  }
submit(){
  
  const createformate = {
    _id: "user_2_"+uuidv4(),
    data:{
      password:this.loginform.value.password,
      phonenum:this.loginform.value.phonenum,
      type:"user",
    }
   }
}
}
