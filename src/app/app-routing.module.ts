import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { OrderContainerComponent } from './core/container/order-container/order-container.component';
import { UserContainerComponent } from './core/container/user-container/user-container.component';

const routes: Routes = [
  {path:'user', component:UserContainerComponent},
  {path:'order', component:OrderContainerComponent},
  {path:'', component:UserContainerComponent},
  {path:'**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
