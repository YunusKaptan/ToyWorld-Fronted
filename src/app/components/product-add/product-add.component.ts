import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProductImage } from 'src/app/models/productImage';
import { ProductImageService } from 'src/app/services/product-image.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productAddForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private toastrService: ToastrService,
    private productImageService: ProductImageService
  ) {}

  ngOnInit(): void {
    this.createProductAddForm();
  }

  // createProductImageAddForm(){
  //   this.createProductImageAddForm=this.formBuilder.group({

  //   })
  // }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ['', Validators.required],
      categoryId: ['', Validators.required],
      categoryName: ['', Validators.required],
      unitsInStock: ['', Validators.required],
    });
  }
  //   add(){
  //     if(this.productAddForm.valid){
  //       let productModel =Object.assign({},this.productAddForm.value)
  //       this.productService.add(productModel).subscribe(response=>{
  //         console.log(response)
  //         this.toastrService.success(response.message,"Success")

  //       })
  //     }else{
  //       this.toastrService.error("Attention !! Your form is missing")
  //     }
  //   }
  // }


  add() {
    if (this.productAddForm.valid) {
      let productModel = Object.assign({}, this.productAddForm.value);
      //let productImageModel = Object.assign({}, this.productAddForm.value)
      //this.productImageService.add(productImageModel)
      this.productService.add(productModel).subscribe(
        (response) => {
          this.toastrService.success(response.message, 'Success');
        },
        (responseError) => {
          console.log(responseError.error);
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(
                responseError.error.Errors[i].ErrorMessage,
                'Validation Error'
              );
            }
          }
        }
      );
    } else {
      this.toastrService.error('Attention !! Your form is missing');
    }
  }
}
