import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: [];
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public personData = [
    { id: 1, name: 'Prasad', age: 29, country: 'India' },
    { id: 2, name: 'Ajinkya', age: 45, country: 'Australia' },
    { id: 3, name: 'Soham', age: 31, country: 'US' },
    { id: 4, name: 'Shardul', age: 24, country: 'Nepal' },
    { id: 5, name: 'Abhijeet', age: 22, country: 'Sri Lanka' },
  ];

  public productList: any;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getProductsData();
  }

  getProductsData() {
    this.homeService.getProducts().subscribe((res: any) => {
      this.productList = res.products;
    })
  }
}
