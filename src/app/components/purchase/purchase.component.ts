import { Component,OnInit } from '@angular/core';
import { PurchaseDetails } from 'src/app/models/purchaseDetails';
import { PurchaseService } from 'src/app/services/purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit{

  purchaseDetails:PurchaseDetails[]=[]

  constructor(private purchaseService:PurchaseService) { }

  ngOnInit(): void {
    this.getPurchase();
  }

  getPurchase(){
    this.purchaseService.getPurchases().subscribe(response=>{
      this.purchaseDetails = response.data
    });
  }
}