import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicProcessComponent} from './components/basic-process/basic-process.component';
import {SubProcessComponent} from './components/sub-process/sub-process.component';
import {DepartmentProcessComponent} from './components/department-process/department-process.component';
import {DetailProcessComponent} from './components/detail-process/detail-process.component';
import {HomeComponent} from './components/home/home.component';
import {DocumentsComponent} from './components/documents/documents.component';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'home/basisprozesse', component: BasicProcessComponent },
  { path: 'home/basisprozesse/:name', component: SubProcessComponent},
  { path: 'home/basisprozesse/:name/:department', component: DepartmentProcessComponent},
  { path: 'home/basisprozesse/:name/:department/:detail', component: DetailProcessComponent},
  { path: 'home/basisprozesse/:name/:department/:detail/:document', component: DocumentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
