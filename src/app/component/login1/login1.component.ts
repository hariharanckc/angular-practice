import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthguardService } from 'src/app/service/authguard.service';
@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
Tname:string="";
Tpassword:string="";
showerror:string='';
data!:FormGroup
  showerror2: string="";
name!:string
constructor(public fb:FormBuilder,public router:Router,private auth:AuthguardService){}
  ngOnInit(): void {
    this.data=this.fb.group({
Rname:"",
Rpassword:""
    })
    // this.submit1();
  }



submit(){
if(this.Tname === "" && this.Tpassword === ""){
  this.showerror="pls fill all field"
}else if(this.Tname === ""){
  this.showerror="pls enter name"
} else if(this.Tpassword===""){
  this.showerror="pls enter password"
}else
if(this.Tname=== "" && this. Tpassword==="password"){
  this.showerror="pls enter name"
}else if(this.Tname=== "admin" && this.Tpassword=== ""){
  this.showerror="pls enter password"
}else if(this.Tname != "admin" && this.Tpassword==="password"){
  this.showerror="invalid name"
}else if(this.Tname === "admin" && this.Tpassword != "password"){
  this.showerror="invalid password"
}else if(this.Tname != "admin" && this.Tpassword != "password"){
  this.showerror="invalid admin and password"
}else
if(this.Tname==="admin" && this.Tpassword==="password"){
  this.showerror="login successfull"
}
this.auth.Setvalue(true)
this.router.navigateByUrl("/ngtemplatecontainer")
}




submit1(){
  if(this.data.value.Rname === "" && this.data.value.Rpassword === ""){
    this.showerror2="pls fill all field"
  }else if(this.data.value.Rname === ""){
    this.showerror2="pls enter name"
  } else if(this.data.value.Rpassword===""){
    this.showerror2="pls enter password"
  }else
  if(this.data.value.Rname=== "" && this.data.value.Rpassword==="password1"){
    this.showerror2="pls enter name"
  }else if(this.data.value.Rname=== "admin1" && this.data.value.Rpassword=== ""){
    this.showerror2="pls enter password"
  }else if(this.data.value.Rname != "admin1" && this.data.value.Rpassword==="password1"){
    this.showerror2="invalid name"
  }else if(this.data.value.Rname === "admin1" && this.data.value.Rpassword != "password1"){
    this.showerror2="invalid password"
  }else if(this.data.value.Rname != "admin1" && this.data.value.Rpassword != "password1"){
    this.showerror2="invalid admin and password"
  }else if(this.data.value.Rname == "admin1" && this.data.value.Rpassword == "password1 "){
    console.log(this.data.value.Rname);
    
  this.showerror2="login successfully";
}
}

c(event:Event){
  event.preventDefault()
}
p(event:Event){
  event.preventDefault()

}
x(event:Event){
  event.preventDefault()
}
}
