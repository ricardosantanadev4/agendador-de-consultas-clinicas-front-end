import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material/app-material.module';
import { ConsultaidPipe } from './pipes/consultaid.pipe';


@NgModule({
  declarations: [
    ConsultaidPipe
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
  ],
  exports: [
    ConsultaidPipe
  ]

})
export class SharedModule { }
