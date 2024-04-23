import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class TemplateService {
  couchdburl:string='https://192.168.57.185:5984';
  couchusername:string='d_couchdb';
  couchpassword:string='Welcome#2';
  databasename:any='crudop';


  header={
    'Authorization':`Basic ${btoa(this.couchusername + ':' + this.couchpassword)}`
  };


  constructor(private http:HttpClient) { }
  private counter: number = 0;


  create(document:any){
    const createurl=`${this.couchdburl}/${this.databasename}`;
    return this.http.post(createurl,document ,{
     headers:this.header
    });
  }

read(){
  const read=`${this.couchdburl}/${this.databasename}/_all_docs?include_docs=true`;
  return this.http.get(read,{
    headers:this.header
  })
}


delete(d:string,rev:string){
    const delet=`${this.couchdburl}/${this.databasename}/${d}?rev=${rev}`;
    return this.http.delete(delet,{
      headers:this.header
    })
}


update(d:string,docs:any){
  const updat=`${this.couchdburl}/${this.databasename}/${d}`;
  return this.http.put(updat,docs,{
    headers:this.header
  })
}
generateEmployeeId(): string {
  this.counter++;
  return 'EMP' + this.counter.toString().padStart(3, '0');
}


}
