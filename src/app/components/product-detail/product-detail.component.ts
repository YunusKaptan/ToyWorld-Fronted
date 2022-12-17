import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductDetails } from 'src/app/models/productDetails';
import { CartService } from 'src/app/services/cart.service';
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
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private toastrService:ToastrService,
    private cartService:CartService
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
  addToCart(product:Product){
    this.toastrService.success("Dodano do ulubionych", product.productName)
    this.cartService.addToCart(product);

  }
}
