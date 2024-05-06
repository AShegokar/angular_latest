import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  filterData: any;
  loggedInPerson: string = "AJ";

  dumyJson = [
    {id: 1, country : 'India', isAdmin: true, price: 20},
    {id: 2, country : 'USA', isAdmin: false, price: 25},
    {id: 3, country : 'Australia', isAdmin: true, price:30},
    {id: 4, country : 'Africa', isAdmin: false, price: 35},
  ];

  teams = [
    { name: 'India', result: 'Winner' },
    { name: 'Africa', result: 'Tie' },
    { name: 'Australia', result: 'Lost' }
  ];

  ngOnInit(): void {
    this.filterItemsData();
    this.mapItemsData();
  }

  constructor(private homeService: HomeService) {}


  filterItemsData(){
    this.homeService.getItemsData().subscribe((res:any) => {
      this.filterData = res.items.filter((itemData: any) => {
        return itemData.price > 500 && itemData.category == 'laptops';
      })
      console.log(this.filterData)
    });
  }

  mapItemsData(){
    this.homeService.getItemsData().subscribe((res:any) => {
      res.items.map((itemData:any) => {
        let data = {...itemData, price: itemData.price > 600 ? itemData.price * 2 : itemData.price }
        console.log(data)
      })
    })
  }
  
}
