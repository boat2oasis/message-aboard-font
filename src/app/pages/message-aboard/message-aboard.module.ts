import { MessageAboardComponent } from './message-aboard.component';

import { MatRippleModule } from '@angular/material/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbCardModule,NbButtonModule,
} from '@nebular/theme';
import {MatTableModule} from '@angular/material/table';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms'; 
import { NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MessageAboarBackComponent } from './message-aboard-back.component'; 
const materialModules = [
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatRadioModule,
  MatButtonToggleModule,
  MatTableModule,MatCardModule,
  MatButtonModule, MatDialogModule,MatPaginatorModule,
  MatToolbarModule,MatListModule,CommonModule,
  NbCardModule,ReactiveFormsModule,NbButtonModule,MatRippleModule,NbIconModule, NbInputModule, NbTreeGridModule]

@NgModule({
  declarations: [MessageAboardComponent,MessageAboarBackComponent],
  imports: [
    ...materialModules
  ]
})
export class MessageAboardModule { }
