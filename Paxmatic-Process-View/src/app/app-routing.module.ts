import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProcessComponent} from './components/process/process.component';
import {HomeComponent} from './components/home/home.component';
import {DocumentsComponent} from './components/documents/documents.component';


const routes: Routes = [

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'home/prozesse', component: ProcessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

