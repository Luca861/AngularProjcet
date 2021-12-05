import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './core/components/user-list/user-list.component';
import { UserSingleComponent } from './core/components/user-single/user-single.component';
import { UserDetailComponent } from './core/components/user-detail/user-detail.component';
import { UserContainerComponent } from './core/container/user-container/user-container.component';
import { OrderContainerComponent } from './core/container/order-container/order-container.component';
import { OrderListComponent } from './core/components/order-list/order-list.component';
import { OrderSingleComponent } from './core/components/order-single/order-single.component';
import { OrderDetailComponent } from './core/components/order-detail/order-detail.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserSingleComponent,
    UserDetailComponent,
    UserContainerComponent,
    OrderContainerComponent,
    OrderListComponent,
    OrderSingleComponent,
    OrderDetailComponent,
    NavbarComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
