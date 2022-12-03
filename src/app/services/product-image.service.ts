import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf} from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ProductImage } from '../models/productImage';

@Injectable({
  providedIn: 'root'
})
export class ProductImageService {

  apiUrl="https://localhost:44372/api/"

  constructor(private httpClient:HttpClient) { }

  getProductImages():Observable<ListResponseModel<ProductImage>>{
    let newPath= this.apiUrl+"productImages/getall";
    return this.httpClient.get<ListResponseModel<ProductImage>>(newPath);
  }
  getProductImagesByProductId(productId:number):Observable<ListResponseModel<ProductImage>>{
    let newPath= this.apiUrl+"productImages/getbyproductid?productId="+productId;
    return this.httpClient.get<ListResponseModel<ProductImage>>(newPath);
  }
}


