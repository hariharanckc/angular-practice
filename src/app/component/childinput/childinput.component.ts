import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-childinput',
  templateUrl: './childinput.component.html',
  styleUrls: ['./childinput.component.css']
})
export class ChildinputComponent {

  @Input() result: any[]=[] ;
  @Output() shareEvent = new EventEmitter();
  name: string = '';
  phone!: number;

  share() {
    const data = {
      name: this.name,
      phone: this.phone
    }
    this.shareEvent.emit(data);
  }
}
