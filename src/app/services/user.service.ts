import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44372/api/"

  constructor(private httpClient:HttpClient) { }

  getByUserEmail(email:string):Observable<SingleResponseModel<User>>{
    let newPath = this.apiUrl + "users/GetByUserEmail?email="+email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath)

  }
  getUserById(id:number):Observable<SingleResponseModel<User>>{
    let newPath = this.apiUrl + "users/getuserbyid?id="+id;
    return this.httpClient.get<SingleResponseModel<User>>(newPath)
  }

  getUsers():Observable<ListResponseModel<User>>{
    let newPath=this.apiUrl+"users/getall"
    return this.httpClient.get<ListResponseModel<User>>(newPath)
  }
}
