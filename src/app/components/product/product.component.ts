import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetails } from 'src/app/models/productDetails';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products:ProductDetails[]=[];
  category:Category[]=[];

  constructor(
  private productService : ProductService,
  private categoryService: CategoryService
  ){}

  ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  getProducts(){
   this.productService.getProducts().subscribe(response=>{
   console.log(response)
   this.products=response.data
   });
  }

  getCategories(){
    this.categoryService.getCategories().subscribe(response=>{
      this.category=response.data
      
      });    
  }
}
