import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { PurchaseAddComponent } from './components/purchase-add/purchase-add.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId", component:ProductComponent},
  {path:"products/category/:categoryId/productDetail", component:ProductComponent},
  {path:"productDetail", component:ProductDetailComponent},
  {path:"products/productDetails/:productId", component: ProductDetailComponent},
  {path:"products/payment/:productId",component:PaymentComponent},
  {path:"products/purchaseAdd",component:PurchaseAddComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
