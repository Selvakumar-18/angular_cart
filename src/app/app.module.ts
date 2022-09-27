import { NgModule ,OnInit} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient ,HttpClientModule} from '@angular/common/http';
import { SearchFilterPipe } from './search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    CartComponent,
    ProductsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
