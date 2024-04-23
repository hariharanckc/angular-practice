import { Component } from '@angular/core';




interface User {
  name: string;
  role: string;
}
@Component({
  selector: 'app-ngtemplatecontainer',
  templateUrl: './ngtemplatecontainer.component.html',
  styleUrls: ['./ngtemplatecontainer.component.css']
})

export class NgtemplatecontainerComponent {
  adminTemplate: any;
  userTemplate: any;
  
  constructor(){}
students: any[]=[
  {
    id:1,
name:"xxx",
roll:"001",
total:30
} ,
 {
  id:2,
name:"xxx",
roll:"001",
total:40
},  
{
  id:3,
name:"xxx",
roll:"001",
total:40
},
{
  id:4,
name:"xxx",
roll:"001",
total:10
}
]



// users: User[] = [
//   { name: 'Admin', role: 'admin' },
//   { name: 'Bob', role: 'user' },
//   { name: 'Charlie', role: 'admin' },
//   { name: 'David', role: 'user' }
// ];

// getUserTemplate(role: string): any {
//   return role === 'admin' ? this.adminTemplate : this.userTemplate;
// }
// }
}
