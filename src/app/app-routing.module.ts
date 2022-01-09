import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesContainerComponent } from './modules/joke/pages/jokes-container/jokes-container.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component: JokesContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
