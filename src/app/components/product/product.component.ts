import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetails } from 'src/app/models/productDetails';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute } from '@angular/router';
import { ProductImageService } from 'src/app/services/product-image.service';
import { ProductImage } from 'src/app/models/productImage';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:ProductDetails[]=[];
  category:Category[]=[];
  imageOfPath:string;  
  productImages:ProductImage[]=[];
  baseUrl="https://localhost:44372/Uploads/Images/"

  constructor(
  private productService : ProductService,
  private productImageService : ProductImageService,
  private categoryService: CategoryService,
  private activatedRoute: ActivatedRoute
  ){}

  ngOnInit(): void {
  this.getCategories();

    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"]){
        this.getProductsByCategory(params["categoryId"])
      }else{
        this.getProducts()
      }
    })
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

  getProductsByCategory(categoryId:number) {
    this.productService.getProductsByCategory(categoryId).subscribe(response=>{
      this.products = response.data
    })   
  }
  getProductDetailsByCategoryId(categoryId:number) {
    this.productService.getProductDetailsByCategoryId(categoryId).subscribe(response=>{
      this.products = response.data
    })   
  }
  image(productId:number){
    this.productImageService.getProductImagesByProductId(productId).subscribe(response=>{
      const imagePath=response.data[0].imagePath
      this.imageOfPath= this.baseUrl+imagePath;
      console.log(this.imageOfPath)
    })
    return this.imageOfPath
  }
}
