import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicProcessComponent } from './basic-process/basic-process.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CreateProcessComponent } from './create-process/create-process.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from "@angular/material/card";
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    BasicProcessComponent,
    CreateProcessComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
