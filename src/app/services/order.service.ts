import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { OrderDetails } from '../models/orderDetails';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl ="https://localhost:44372/api/orders/"

  constructor(private httpClient:HttpClient) { }

  getOrders():Observable<ListResponseModel<OrderDetails>>{
    let newPath=this.apiUrl+"getordersdetails"
    return this.httpClient.get<ListResponseModel<OrderDetails>>(newPath)
  }


}

