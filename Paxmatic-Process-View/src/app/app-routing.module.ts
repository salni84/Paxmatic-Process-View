import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicProcessComponent} from './basic-process/basic-process.component';
import {SubProcessComponent} from './sub-process/sub-process.component';
import {DepartmentProcessComponent} from './department-process/department-process.component';
import {DetailProcessComponent} from './detail-process/detail-process.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'home/basisprozesse', component: BasicProcessComponent },
  { path: 'home/basisprozesse/:name', component: SubProcessComponent},
  { path: 'home/basisprozesse/:name/:department', component: DepartmentProcessComponent},
  { path: 'home/basisprozesse/:name/:department/:detail', component: DetailProcessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
