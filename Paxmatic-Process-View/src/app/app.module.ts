import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicProcessComponent } from './basic-process/basic-process.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CreateProcessComponent } from './create-process/create-process.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { SubProcessComponent } from './sub-process/sub-process.component';
import { DepartmentProcessComponent } from './department-process/department-process.component';
import { DetailProcessComponent } from './detail-process/detail-process.component';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentsComponent } from './documents/documents.component';
import {MatTableModule} from "@angular/material/table";
import { CreateDocumentComponent } from './create-document/create-document.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicProcessComponent,
    CreateProcessComponent,
    HomeComponent,
    SubProcessComponent,
    DepartmentProcessComponent,
    DetailProcessComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DocumentsComponent,
    CreateDocumentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    DragDropModule,
    FormsModule,
    MatCardModule,
    MatOptionModule,
    MatFormFieldModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
