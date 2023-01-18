import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddProductImageService {

  apiUrl="https://localhost:44372/api/"

  constructor(private httpClient:HttpClient) { }

  
}
