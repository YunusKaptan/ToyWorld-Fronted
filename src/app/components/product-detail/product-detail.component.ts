import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetails } from 'src/app/models/productDetails';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  products:ProductDetails[]=[];

  constructor(
    private productService:ProductService,
    private activatedRoute:ActivatedRoute
    ){}

  ngOnInit(): void {
      this.activatedRoute.params.subscribe(params=>{
        if(params["productId"]){
          this.getProductDetailsByProductId(params["productId"])
        }
      })
  }
  getProductDetailsByProductId(productId:number){
    this.productService.getProductDetailsByProductId(productId).subscribe((response=>{
      this.products=response.data
    }))
  }
}
