import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { PurchaseDetails } from '../models/purchaseDetails';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  apiUrl="https://localhost:44372/api/purchases/"
  constructor(private httpClient:HttpClient) { }

  getPurchases():Observable<ListResponseModel<PurchaseDetails>> {
    let newPath=this.apiUrl+"getpurchasedetails"
    return this.httpClient.get<ListResponseModel<PurchaseDetails>>(newPath);
  }
  isProductAvailable(productId:number){
    let newPath= this.apiUrl+"isproductavaible?productId?productId="+productId;
    return this.httpClient.get<ResponseModel>(newPath);
  }
}
