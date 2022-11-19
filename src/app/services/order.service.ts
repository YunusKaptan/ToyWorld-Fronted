import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Order } from '../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl ="https://localhost:44372/api/orders/getall"

  constructor(private httpClient:HttpClient) { }

  getOrders():Observable<ListResponseModel<Order>>{
    return this.httpClient.get<ListResponseModel<Order>>(this.apiUrl)
  }


}

