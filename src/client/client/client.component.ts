import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent {

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

deleteProduct(data: any) {
  this.homeService.deleteProduct(data.id).subscribe();
}

}
