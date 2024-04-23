import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
name="";
name1="hari"
receivedMessage: string = ''; // Message received from child component

receiveMessage(message: string) {
  this.receivedMessage = message; // Update receivedMessage when child emits an event
}
// parentname:string | undefined;
// submit(){

// }
}
