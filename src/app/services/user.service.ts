import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SingleResponseModel } from '../models/singleResponseModel';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl="https://localhost:44306/api/"

  constructor(private httpClient:HttpClient) { }

  getByUserEmail(email:string):Observable<SingleResponseModel<User>>{
    let newPath = this.apiUrl + "Users/GetByUserEmail?email="+email;
    return this.httpClient.get<SingleResponseModel<User>>(newPath)

  }
}
