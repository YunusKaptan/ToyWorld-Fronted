import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PaymentComponent } from './components/payment/payment.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';
import { PurchaseAddComponent } from './components/purchase-add/purchase-add.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId", component:ProductComponent},
  {path:"products/category/:categoryId/productDetail", component:ProductComponent},
  {path:"productDetail", component:ProductDetailComponent},
  {path:"products/productDetails/:productId", component: ProductDetailComponent},
  {path:"products/payment/:productId",component:PaymentComponent},
  {path:"products/purchaseAdd",component:PurchaseAddComponent},
  {path:"products/add",component:ProductAddComponent,canActivate:[LoginGuard]},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
