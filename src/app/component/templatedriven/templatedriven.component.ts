import { Component, OnInit } from '@angular/core';
import { TemplateService } from 'src/app/service/template.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {
  users: any;
editdialogbox:boolean=false;
edit!:FormGroup;
  employeeId: string="";
constructor(public service:TemplateService,public fb:FormBuilder) {}


formData={
  name:'',
  roll:null
}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // localStorage
    this.read();
    this.edit=this.fb.group({
      _id:'',
      _rev:'',
      name:'',
      roll:'',
    })
  }

create(){
  if(this.formData.name && this.formData.roll){
    console.log(this.formData);
    this.service.create(this.formData).subscribe(res=>{
      this.formData.name='';
      this.formData.roll=null;
      this.read;
    });
  }
}
read(){
this.service.read().subscribe((response:any)=>{
  this.users=response.rows.map((row:any)=>row.doc);
console.log(this.users);
})
}

delete1(da:any){
  const _id: string = da._id;
  const _rev: string = da._rev;
  this.service.delete(_id, _rev).subscribe(res => {
    console.log(res);
  });
  }

  editaction(data:any){
    this.editdialogbox=true;
    this.edit.patchValue(data)
  }

  generateEmployeeId(): void {
    this.employeeId = this.service.generateEmployeeId();
  }

update(){
  this.service.update(this.edit.value._id,this.edit.value).subscribe(res=>{
    console.log(res);
    this.editdialogbox=false;
    Swal.fire("successfull save")
    // this.create();
    
  })
}



}
