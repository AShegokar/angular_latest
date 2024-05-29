import { Component, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { ClientDataComponent } from '../client-data/client-data.component';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {
  @ViewChild(ClientDataComponent) child! : ClientDataComponent;

  constructor(private homeService: HomeService) {}

public clientInfo = [
  {id: 1, name: 'Ajinkya', age: 24},
  {id: 2, name: 'Rhane', age:30},
  {id: 3, name: 'Kohli', age: 35},
  {id: 4, name: 'Virat', age: 28},
  {id: 5, name: 'Klaseen', age: 34}
]

public clientData = [
  {id: 1, name: 'Prasad', age: 24},
  {id: 2, name: 'Huda', age:30},
  {id: 3, name: 'Rahukl', age: 35},
  {id: 4, name: 'Cummins', age: 28},
  {id: 5, name: 'Bhuvi', age: 34}
]

public clientMock = [
  {id: 1,age: 23, price: 2, Name: 'Satish' },
  {id: 2,age: 30, price: 6, Name: 'AJ' },
  {id: 3,age: 35, price: 4, Name: 'Nitin' },
  {id: 4,age: 40, price: 1, Name: 'Andrew' }
]



deleteProduct(data: any) {
  this.homeService.deleteProduct(data.id).subscribe();
}

ngAfterViewInit() {
  console.log(this.child.childData);
  console.log(this.child.childDataUsingViewchild);
  
}

sendData() {
  this.homeService.sendData("DATA from Parent component");
}

}