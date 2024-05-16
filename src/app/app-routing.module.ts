import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchListComponent } from './launch-list/launch-list.component';
const routes: Routes = [
  { path: 'launches', component: LaunchListComponent },
  { path: '', redirectTo: '/launches', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }