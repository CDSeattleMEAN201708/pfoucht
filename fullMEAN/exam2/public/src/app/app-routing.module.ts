import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users/users.component'
import { ProductsComponent } from './products/products.component'
import { ResultsComponent } from './results/results.component'
import { AddProductComponent } from './add-product/add-product.component'

const routes: Routes = [
  { path: '', pathMatch: "full", component: UsersComponent },
  { path: "bids", component: ProductsComponent,
    children: [
    ]
  },
  { path: "results", component: ResultsComponent,
    children: [
    ]
  },
  { path: "addProduct", component: AddProductComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
