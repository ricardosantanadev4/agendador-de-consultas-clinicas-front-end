import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './consultas-routing.module';
import { ConsultasComponent } from './containers/consultas/consultas.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ConsultasListComponent } from './components/consultas-list/consultas-list.component';


@NgModule({
  declarations: [
    ConsultasComponent,
    ConsultasListComponent
  ],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    AppMaterialModule
  ]
})
export class ConsultasModule { }
