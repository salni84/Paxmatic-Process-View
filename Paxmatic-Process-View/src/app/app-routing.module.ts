import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BasicProcessComponent} from './basic-process/basic-process.component';
import {SubProcessComponent} from './sub-process/sub-process.component';


const routes: Routes = [

  { path: '', redirectTo: '/basisprozesse', pathMatch: 'full'},
  { path: 'basisprozesse', component: BasicProcessComponent },
  { path: 'basisprozesse/:name', component: SubProcessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
