import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { CustomerComponent } from './customer/customer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderComponent } from './order/order.component';
import { CategoryComponent } from './category/category.component';
import { ProductMenuComponent } from './product-menu/product-menu.component';
import {ProductModule} from './product/product.module';
import { CustomerMenuComponent } from './customer-menu/customer-menu.component'
import { CustomerModule } from './customer/customer.module';
import { HighlightDirective } from './highlight.directive';
import { HttpClientModule} from '@angular/common/http'
import { ProductService } from './product.service';
import { ProductDeleteComponent } from './product-delete/product-delete.component';
import { ProductUpdateComponent } from './product-update/product-update.component';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    LoginComponent,
    FooterComponent,
    ProductComponent,
    CustomerComponent,
    ProductListComponent,
    CustomerListComponent,
    CustomerDetailsComponent,
    ProductDetailsComponent,
    OrderComponent,
    CategoryComponent,
    ProductMenuComponent,
    CustomerMenuComponent,
    HighlightDirective,
    ProductDeleteComponent,
    ProductUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule,
    CustomerModule,
    HttpClientModule
  ],
  providers: [
    ProductService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
