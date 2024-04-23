import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators, ReactiveFormsModule } from '@angular/forms';
import { ReactiveserviceService } from 'src/app/service/reactiveservice.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})

export class CrudComponent implements OnInit{
  create!:FormGroup
  name!: string;
  roll!: string;
  phone:any;
  users:any[]=[];

  date=new Date()
number:number=4.72;
arr=[3,4,5,4,];

js=JSON.stringify(this.arr);

json={name:"hari",num:97987};

studentname:string=""
delete_id!: string;
delete_rev!: string;
edit!:FormGroup

object:any[]=[]
  edit_id!: string;
  edit_rev!: string;
  edit_phone!: string;
  constructor(public service:ReactiveserviceService,public fb:FormBuilder){}




  ngOnInit(): void {
    this.create=this.fb.group({
     _id:"",
    //  _rev:"",
name:[''],
roll:[''],
phone:['']
    }
    )
this.edit=this.fb.group({
  // _id:"",
  // _rev:"",
name:[''],
roll:[''],
phone:['']
})

    this.read();

  }

submit(){
  // if(this.phone){
    // console.log(this.create.value);
    // this.phone = this.create.get('phone')?.value
    const couchstructure = {
      _id: "crud_2_" + uuidv4(),
      data: {
    name:this.name,
    roll:this.roll,
    Phone:this.phone,
        type: "crud"
      }
    }
    console.log(couchstructure);
    
    this.service.create(couchstructure).subscribe(res=>{
      console.log(res);
      
    })

    // console.log(couchstructure);
  // }else{
  //   console.log("invalid");
    
  // }
}

editaction(data:any){
  this.edit_id = data._id
  this.edit_rev = data._rev
  // this.edit_phone=data._Phone
this.edit.patchValue(data.data)
}

update(){
  console.log(this.edit_id,this.edit_rev );

  const updatestruct={
    _id:this.edit_id,
    _rev:this.edit_rev,
    data: {
      name:this.name,
      roll:this.roll,
      Phone:this.phone,
          type: "crud"
        }
  }
  this.service.update(this.edit_id,this.edit_rev,updatestruct).subscribe((res:any)=>{
    console.log(res);

    this.read();
  })
}

read(){
  this.service.call(this.phone).subscribe((res: any)=>{
    console.log(res);
    console.log(res.rows[0].value);
  this.edit_id=res.rows[0].value._id
  this.edit_rev=res.rows[0].value._rev
  // console.log(this.edit_rev);
  
    this.users=(res.rows.map((resp:any)=>resp.value))
    // this.submit();
    // if(res.rows.length!-0){
    //   console.log("phone number exists");
    // }else{
    //   console.log("user does not exists");
    // this.submit();

    // }
  })
}





delete(deft: any) {
  console.log('deft object:', deft);
  const _id: string = deft._id;
  const _rev: string = deft._rev;
    this.service.delete1(_id, _rev).subscribe(
      (res: any) => {
        console.log('Delete response:', res);
        // Handle success response
      })
    }


}
