import { NgModule } from "@angular/core";

import { FlexLayoutModule } from '@angular/flex-layout'

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

const MODULES = [
  FlexLayoutModule,
  MatToolbarModule, MatListModule,
  MatInputModule, MatFormFieldModule,
  MatButtonModule, MatIconModule,
  MatCardModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
