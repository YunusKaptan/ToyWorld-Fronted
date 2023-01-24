import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductImageService } from './product-image.service';
@Injectable({
  providedIn: 'root'
})
export class AddProductImageService implements OnInit {

  apiUrl="https://localhost:44372/api/"

  constructor(
    private httpClient:HttpClient,
    private productService:ProductImageService,
    private toastService:ToastrService,
    private productImageService:ProductImageService
    ) { }

  ngOnInit(): void {
      
  }
}
