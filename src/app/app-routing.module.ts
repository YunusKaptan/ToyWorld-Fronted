import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:"",pathMatch:"full", component:ProductComponent},
  {path:"products",component:ProductComponent},
  {path:"products/category/:categoryId", component:ProductComponent},
  {path:"products/category/:categoryId/productDetail", component:ProductComponent},
  {path:"productDetail", component:ProductDetailComponent},
  {path:"products/productDetails/:productId", component: ProductDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
