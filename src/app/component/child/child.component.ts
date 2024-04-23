import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

myname:string=""
  // name: string = 'Child Name';
  @Input() parentname:string | undefined ; //angular core

 

  @Output() messageEvent = new EventEmitter<string>(); // Output property to emit events to parent


  sendMessage() {
    this.messageEvent.emit("welcome"); // Emit event with a message
  }
}
