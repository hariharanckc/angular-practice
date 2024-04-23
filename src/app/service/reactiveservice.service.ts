import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})


export class ReactiveserviceService {
  read1(phone: any) {
    throw new Error('Method not implemented.');
  }

  couchdburl:string='https://192.168.57.185:5984'
  couchusername:string='d_couchdb'
  couchpassword:string='Welcome#2'
  databasename:any='crudop'
  // couchdburl1:string='https://192.168.57.185:5984/product';
  headers={
    'Authorization':`Basic ${btoa(this.couchusername + ':' + this.couchpassword)}`
  };

  constructor(private http:HttpClient ) { }
  

  
  create(document:any) {
    const createurl=`${this.couchdburl}/${this.databasename}`;
    return this.http.post(createurl,document ,{
     headers:this.headers

    })
  }
  // checkExistingUser(phone:any){
  //   const read=`${this.couchdburl}/${this.databasename}/_design/view/_view/PhoneSearch?key=${phone}`;
  //   return this.http.get(read,{
  //     headers:this.header
  //   })
  // }
  delete1(d:string,res:string) {
    const delet=`${this.couchdburl}/${this.databasename}/${d}?rev=${res}`;
    return this.http.delete(delet, {
      headers:this.headers
      
    })

}
update(_id:string,_rev:string,docs:any){
  const up=`${this.couchdburl}/${this.databasename}/${_id}?rev=${_rev}`;
  console.log(up);
  
  return this.http.put(up,docs,{
headers:this.headers
  }
  )
}



  call(valu:any){
    const read=`${this.couchdburl}/${this.databasename}/_design/view/_view/PhoneSearch?value=${valu}`;
    return this.http.get(read,{
      headers:this.headers
    })
  }

  
  read(){
    const read=`${this.couchdburl}/${this.databasename}/_all_docs?include_docs=true`;
    return this.http.get(read,{
      headers:this.headers
    })
  }
  get(phone:number){
    const read=`${this.couchdburl}/${this.databasename}/_design/view/_view/phoneNumberSearchs?key=${phone}`;
    return this.http.get(read,{
      headers:this.headers
    })
  }
  


}
