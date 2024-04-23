import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validator,FormGroup } from '@angular/forms';
import { ReactiveserviceService } from 'src/app/service/reactiveservice.service';
import { v4 as uuidv4 } from 'uuid';
import * as CryptoJS from 'crypto-js';


@Component({
  selector: 'app-crudcouchstructure',
  templateUrl: './crudcouchstructure.component.html',
  styleUrls: ['./crudcouchstructure.component.css']
})
export class CrudcouchstructureComponent implements OnInit {
  myForm!:FormGroup;
  phone!: number;
  getpassword!:string;

  constructor(public fb:FormBuilder,public service:ReactiveserviceService){}
  ngOnInit(): void {
    
    this.myForm = this.fb.group({
      password: '',
      phonenum: null
    })
  }


  submit(){
    // const encryptedPassword = CryptoJS.AES.encrypt(this.myForm.value.this.phonenum, 'secret key').toString();
    // console.log(encryptedPassword);
    
   const createformate = {

    _id: "user_2_"+uuidv4(),
    data:{
      password:this.myForm.value.password,
      phonenum:this.myForm.value.phonenum,
      type:"user",
    }
   }


   this.service.create(createformate).subscribe((res: any)=> {
    console.log(res);
    
   })
  }

  validaton(){

    if(this.myForm.value.password && this.myForm.value.phonenum){
      console.log("create");
      
    }
  }

  read(){
    this.service.get(this.phone).subscribe((res: any)=>{
      console.log(res);
      // this.returnArray=res.rows.map((item:any)=>{
      //   return item.key.data
      console.log(res.rows.map((item:any)=>{
        return item.value.data.type}
      ));
      this.getpassword=res.rows.map((item:any)=>{
        return item.value.data.type 
      })
      
    //   console.log(res.rows[0].value.data.password);
    // this.getpassword=res.rows[0].value.data.password;
    // console.log(this.getpassword);
    
    })
  }
}
