import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicProcessComponent } from './components/basic-process/basic-process.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { CreateProcessComponent } from './components/create-process/create-process.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { SubProcessComponent } from './components/sub-process/sub-process.component';
import { DepartmentProcessComponent } from './components/department-process/department-process.component';
import { DetailProcessComponent } from './components/detail-process/detail-process.component';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DocumentsComponent } from './components/documents/documents.component';
import {MatTableModule} from '@angular/material/table';
import { CreateDocumentComponent } from './components/create-document/create-document.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { HashLocationStrategy, LocationStrategy} from '@angular/common';


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
    MatTableModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
