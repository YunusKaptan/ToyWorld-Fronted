import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Product } from '../models/product';
import { ProductResponseModel } from '../models/productResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl ="https://localhost:44372/api/";

  constructor(private httpClient:HttpClient) { }

  getProducts():Observable<ProductResponseModel>{
    let newPath = this.apiUrl + "products/getall"
    return this.httpClient.get<ProductResponseModel>(newPath)
  }
}
