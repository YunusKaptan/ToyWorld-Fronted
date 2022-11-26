import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ProductDetails } from '../models/productDetails';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl ="https://localhost:44372/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>>{
    let newPath = this.apiUrl + "products/getproductdetails"
    const data= this.httpClient.get<ListResponseModel<Product>>(newPath)
    console.log(data)
    return data;
  }
  getProductDetailsByProductId(productId:number):Observable<ListResponseModel<ProductDetails>>{
    let newPath=this.apiUrl+"products/getproductdetailsbyproductid?productId=" +productId;
    return this.httpClient.get<ListResponseModel<ProductDetails>>(newPath);
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>>{
    let newPath= this.apiUrl + "products/getbycategoryid?categoryId="+categoryId
    return this.httpClient.get<ListResponseModel<Product>>(newPath);
  }
}