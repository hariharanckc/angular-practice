import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validator } from '@angular/forms';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.css']
})



export class FunctionComponent {
  name: string='';
  password: any='';


 
constructor(){}
submit(){
  if(this.name&&this.password===""){
    console.log("invalid");}else
  if(this.name===""){
    console.log("pls enter ur name");
  }else if(this.password===""){
    console.log("pls enter ur password");
  }else if(this.name&&this.password){
    console.log("success");
  }
}
  




 add=(a:number,b:number):number=>{
return a+b;
  }

sub(c:number,d:number):number{
  return c - d;
}





// return u+e;
// }

}
