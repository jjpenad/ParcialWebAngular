import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CafesListComponent } from './cafes/cafes-list/cafes-list.component';

const routes: Routes = [
  { path:"inicio", component: CafesListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
