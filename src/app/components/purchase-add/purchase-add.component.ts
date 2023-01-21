import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ProductDetails } from 'src/app/models/productDetails';
import { Purchase } from 'src/app/models/purchase';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductService } from 'src/app/services/product.service';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-purchase-add',
  templateUrl: './purchase-add.component.html',
  styleUrls: ['./purchase-add.component.css']
})
export class PurchaseAddComponent implements OnInit{

purchaseAddForm: FormGroup;
productDetail:ProductDetails[];
categoryOfPurchase: Purchase;

constructor(
  private purchaseService:PurchaseService,
  private paymentService:PaymentService,
  private formBuilder:FormBuilder,
  private activatedRoute: ActivatedRoute,
  private productService:ProductService,
  private router: Router,
  private toastrService: ToastrService
) { }

ngOnInit(): void {
  console.log(this.categoryOfPurchase)
  this.createPurchaseAddForm();
  this.activatedRoute.params.subscribe((params) => {
    if (params['productId']) {
      this.getProductDetailsByProductId(params['productId']);
    }
  });
}
getProductDetailsByProductId(productId: number) {
  this.productService.getProductDetailsByProductId(productId).subscribe((response) => {
    this.productDetail = response.data;
  });
}

createPurchaseAddForm() {
  this.purchaseAddForm = this.formBuilder.group({
    //purchaseDate: ['', Validators.required]
    
  });
}
isProductAvailable(){

  //musteri bilgileri girildikten sonra successed mesaji alinmali
  if(this.purchaseAddForm.valid){
    console.log("islem1")
    this.purchaseService
    .isProductAvailable(this.productDetail[0].productId)
    .subscribe((response)=>{
      console.log("islem2")

      this.toastrService.info(response.message,'Fill in the information to complete the order.');
      console.log("islem3")
      this.sendData();
      this.router.navigate(["/products/payment",this.productDetail[0].productId])

    }
    ,
    (responseError)=>{
      this.toastrService.error(responseError.error)
    }
    );
} 
}

sendData(){
  this.categoryOfPurchase=Object.assign({},this.purchaseAddForm.value);
  this.paymentService.updateData(this.categoryOfPurchase)
}
}
