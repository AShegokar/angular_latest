import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-client-mock',
  templateUrl: './client-mock.component.html',
  styleUrls: ['./client-mock.component.scss']
})
export class ClientMockComponent {
@Input() mock: any;

@Output() deleteMock = new EventEmitter();
  
  deleteData(event: any) {
   this.deleteMock.emit(event);
  }

  // 2nd another way of passing data to parent from child
  public clientMockData = [
    {id:1, age: 5, Name:'Dhoni'},
    {id:2, age: 6, Name:'Srinath'}
  ]

  // 3rd way of sending data with adding line 10 as well above.
  response: any;

  constructor (private homeService: HomeService) {}

  ngOnInit() : void {
    this.homeService.data$.subscribe((res: any) => {
      this.response = res;
    })
  }


}