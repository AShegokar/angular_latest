import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent {
  @Input() info : any;
  @Output() childData = new EventEmitter();

  sendDataToParent(data: any) {
    this.childData.emit(data)
  }
}
