import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LogInComponent } from './Components/Login/login.component';
import { FormspageComponent } from './Components/formspage/formspage.component';
import { InputdemoComponent } from './Components/inputdemo/inputdemo.component';
import { DatedemoComponent } from './Components/datedemo/datedemo.component';
import { ButtontoggledemoComponent } from './Components/buttontoggledemo/buttontoggledemo.component';
import { SelectdemoComponent } from './Components/selectdemo/selectdemo.component';
import { TabledemoComponent } from './Components/tabledemo/tabledemo.component';
import { FormfielddemoComponent } from './Components/formfielddemo/formfielddemo.component';
import { TabsdemoComponent } from './Components/tabsdemo/tabsdemo.component';
import { CarddemoComponent } from './Components/carddemo/carddemo.component';
import { SidenavdemoComponent } from './Components/sidenavdemo/sidenavdemo.component';
import { AutocompleteComponent } from './Components/autocomplete/autocomplete.component';
import { DialogdemoComponent } from './Components/dialogdemo/dialogdemo.component';
import { SnackbardemoComponent } from './Components/snackbardemo/snackbardemo.component';
import { ConfirmationDialogComponent } from './Components/confirmation-dialog/confirmation-dialog.component';

@NgModule({
declarations: [
    AppComponent,
    LogInComponent,
    FormspageComponent,
    InputdemoComponent,
    DatedemoComponent,
    ButtontoggledemoComponent,
    SelectdemoComponent,
    TabledemoComponent,
    FormfielddemoComponent,
    TabsdemoComponent,
    CarddemoComponent,
    SidenavdemoComponent,
    AutocompleteComponent,
    DialogdemoComponent,
    SnackbardemoComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatTableModule,
    MatFormFieldModule,
    MatTabsModule,
    MatCardModule,
    MatSidenavModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatSnackBarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }