import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Purchase } from 'src/app/models/purchase';
import { PaymentService } from 'src/app/services/payment.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit{

  productId:number;
  purchaseDate:Date;

  constructor (private paymentService:PaymentService,
    private activatedRoute:ActivatedRoute,
    private toastrService: ToastrService,
    private productService:ProductService) {}

ngOnInit(): void {
    
      this.activatedRoute.params.subscribe((param) => {
        console.log(param['productId']);
        if (param["productId"]) {
          this.productId=Number(param["productId"])
        }
      });
      
  }

  add(){
    let purchase:Purchase ={
      //purchaseDate:this.purchaseDate,
      productId:this.productId,
      userId:0,
    }
    console.log("basladi")

    this.paymentService.add(purchase).subscribe(response=>{
      console.log("islem devam ediyor")
      this.toastrService.success(response.message)
      this.toastrService.success("Product successfully received")
    },
    (responseError)=>{
      this.toastrService.success("Product successfully received")
    })
  }
}
    // console.log("basladi")
    //   this.paymentService.add(purchase).subscribe(response=>{
    //   console.log("islem1")
    //   this.toastrService.success(response.message)
    //   this.toastrService.success("Product has purchased")
    // },
    // (responseError)=>{
    //   this.toastrService.error(responseError.error)
    // }) 

