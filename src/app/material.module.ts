import { NgModule } from "@angular/core";

import { MatToolbarModule } from '@angular/material/toolbar'

const MODULES = [
  MatToolbarModule
];

@NgModule({
  imports: MODULES,
  exports: MODULES
})
export class MaterialModule { }
