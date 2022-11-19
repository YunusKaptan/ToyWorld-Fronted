import { Component, OnInit} from '@angular/core';
import { Order } from 'src/app/models/orders';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
  order:Order[]=[];

  constructor(private orderService: OrderService){}

  ngOnInit(): void {
      this.getOrders();
  }
  getOrders(){
    this.orderService.getOrders().subscribe(response =>{
     this.order=response.data
    });
   }
 }
