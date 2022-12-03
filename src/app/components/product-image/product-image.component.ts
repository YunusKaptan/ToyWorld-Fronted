import { Component,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductImage } from 'src/app/models/productImage';
import { ProductImageService } from 'src/app/services/product-image.service';

@Component({
  selector: 'app-product-image',
  templateUrl: './product-image.component.html',
  styleUrls: ['./product-image.component.css']
})
export class ProductImageComponent implements OnInit{
  productImages: ProductImage[]=[];
  baseUrl="https://localhost:44372/Uploads/Images/"

  constructor(
  private productImageSerbice:ProductImageService,
  private activatedRoute:ActivatedRoute ){}

  ngOnInit():void{
    this.activatedRoute.params.subscribe(params=>{
      if(params["productId"]){
        this.getProductImagesByProductId(params["productId"])
      }
    })
  }
  getProductImagesByProductId(carId:number){
    this.productImageSerbice.getProductImagesByProductId(carId).subscribe(response=>{
      this.productImages=response.data;
    })
  }
  getActiveImageClass(productImage:ProductImage){
    if(productImage===this.productImages[0]){
      return "active"
    }
    else{
      return ""
    }
  }
}

