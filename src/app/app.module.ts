import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { CardComponent } from './components/card/card.component';
import { ContainerShopComponent } from './container/container-shop/container-shop.component';



@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    CardComponent,
    ContainerShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
