import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  public productForm!: FormGroup;

  constructor(private homeService: HomeService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getProductsData();
    this.getFormValues();
  }

  getFormValues () {
    this.productForm = this.fb.group({
      title: [''],
      price: [''],
      dp: [''],
      rating:[''],
      category: [''],
      description: ['']
    })
  }

  getProductsData() {
    this.homeService.getProducts().subscribe((res: any) => {
      this.productList = res.products;
    })
  }

  onSubmit() {
    console.log(this.productForm?.value, "===");
    const data = {...this.productForm.value, address: {city: 'Hyd', country: 'India'}}
    this.homeService.addProduct(data).subscribe();
    // this.homeService.addProduct(this.productForm.value).subscribe();
  }

  deleteProduct(id: number) {
    this.homeService.deleteProduct(id).subscribe();
  }
}