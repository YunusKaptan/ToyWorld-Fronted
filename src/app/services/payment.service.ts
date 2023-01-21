import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { Purchase } from '../models/purchase';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  apiUrl="https://localhost:44372/api/"
  private dataSource=new ReplaySubject<Purchase>(1);
  currentData=this.dataSource.asObservable()

  constructor(private httpClient:HttpClient) { }
  updateData(data:Purchase){
    this.dataSource.next(data);
  }
  // add(purchase:Purchase):Observable<ResponseModel>{
  //   return this.httpClient.post<ResponseModel>(this.apiUrl+"purchase/add",purchase)
  // }
  add(purchase:Purchase):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"purchase/add",purchase)
  }
}
