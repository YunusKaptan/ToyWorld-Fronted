import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ProductDetails } from '../models/productDetails';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl ="https://localhost:44372/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getproductdetails"
    return this.httpClient.get<ListResponseModel<Product>>(newPath)
  }
  getProductDetailsByProductId(productId:number):Observable<ListResponseModel<ProductDetails>>{
    let newPath=this.apiUrl+"products/getproductdetailsbyproductid?productId=" +productId;
    return this.httpClient.get<ListResponseModel<ProductDetails>>(newPath);
  }
}