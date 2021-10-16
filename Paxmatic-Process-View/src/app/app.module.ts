import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {CreateProcessComponent} from './components/create-process/create-process.component';
import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {HomeComponent} from './components/home/home.component';
import {ProcessComponent} from './components/process/process.component';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {LoginComponent} from './components/login/login.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {NavbarComponent} from './components/navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DocumentsComponent} from './components/documents/documents.component';
import {MatTableModule} from '@angular/material/table';
import {CreateDocumentComponent} from './components/create-document/create-document.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDialogModule} from '@angular/material/dialog';
import {DialogModalComponent} from './dialog/dialog-modal/dialog-modal.component';
import {LegendComponent} from './components/legend/legend.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {loginReducer} from "./store/reducers/login.reducer";
import { EffectsModule } from '@ngrx/effects';
import {processReducer} from "./store/reducers/process.reducer";
import {ProcessEffects} from "./store/effects/process.effects";
import {reducers} from "./store/state/app.state";

@NgModule({
  declarations: [
    AppComponent,
    CreateProcessComponent,
    HomeComponent,
    ProcessComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    DocumentsComponent,
    CreateDocumentComponent,
    DialogModalComponent,
    LegendComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
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
    MatSlideToggleModule,
    MatDialogModule,
    MatExpansionModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
      },
    }),
    StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([ProcessEffects]),
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
