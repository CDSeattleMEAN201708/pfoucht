import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';

import { ExamService } from './exam.service';
import { ProductsComponent } from './products/products.component';
import { ResultsComponent } from './results/results.component';
import { AddProductComponent } from './add-product/add-product.component'

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ProductsComponent,
    ResultsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [ExamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
