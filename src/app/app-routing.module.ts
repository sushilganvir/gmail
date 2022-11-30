import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { EmailListComponent } from './components/email-list/email-list.component';

const routes: Routes = [
  {path:'' , component:EmailListComponent},
  {path:'mail' , component:EmailListComponent},
  {path:'details/:id' , component:DetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
