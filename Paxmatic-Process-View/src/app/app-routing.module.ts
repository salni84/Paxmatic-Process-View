import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProcessComponent} from './components/process/process.component';
import {HomeComponent} from './components/home/home.component';
import {DocumentsComponent} from './components/documents/documents.component';


const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/basisprozesse', component: ProcessComponent},
/*  {path: 'home/basisprozesse/:name', component: SubProcessComponent},
  {path: 'home/basisprozesse/:name/:department', component: DepartmentProcessComponent},
  {path: 'home/basisprozesse/:name/:department/:detail', component: DetailProcessComponent},
  {path: 'home/basisprozesse/:name/:department/:detail/:document', component: DocumentsComponent},*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

