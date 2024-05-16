import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { CapsulesListComponent } from './capsules-list/capsules-list.component';
const routes: Routes = [
  { path: 'launches', component: LaunchListComponent },
  { path: '', redirectTo: '/launches', pathMatch: 'full' },
  { path: 'capsules', component: CapsulesListComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }