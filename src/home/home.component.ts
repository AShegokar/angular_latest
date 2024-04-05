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
  selectproduct: any;
  public title: string = "";

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
    if(this.selectproduct.id) {
      this.homeService.updateProduct(this.productForm.value, this.selectproduct.id).subscribe();
      this.productForm.reset();
    } else {
      this.homeService.addProduct(this.productForm.value).subscribe();
      this.productForm.reset();
    }
  }

  updatedproduct(selectedProduct: any) { // how to  add clg here to see what  value is coming
    this.title = "Update product"
    this.selectproduct = selectedProduct;
    this.productForm.patchValue({
      title: selectedProduct.title,
      price: selectedProduct.price,
      dp: selectedProduct.discountPercentage,
      rating: selectedProduct.rating,
      category: selectedProduct.category,
      description: selectedProduct.description
    })
  }

  add(title : any){
    this.title = title
  }

  deleteProduct(id: number) {
    this.homeService.deleteProduct(id).subscribe();
  }

  onClose() {
    this.productForm.reset()
  }
}
