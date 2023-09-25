import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpComponent } from './up/up.component';

const routes: Routes = [
  { path: '', component: UpComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
