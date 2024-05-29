import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-client-mock',
  templateUrl: './client-mock.component.html',
  styleUrls: ['./client-mock.component.scss']
})
export class ClientMockComponent {
@Input() mock: any;





}