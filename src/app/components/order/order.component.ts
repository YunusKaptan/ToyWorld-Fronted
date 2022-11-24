import { Component, OnInit} from '@angular/core';
import { OrderDetails } from 'src/app/models/orderDetails';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{

  orderDetails:OrderDetails[]=[];

  constructor(private orderService: OrderService){}

  ngOnInit(): void {
      this.getOrders();
  }
  getOrders(){
    this.orderService.getOrders().subscribe(response =>{
     this.orderDetails=response.data
    });
   }
 }
