import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaRoutingModule } from './pacientes-routing.module';
import { PacientesComponent } from './containers/pacientes/pacientes.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { ConsultasListComponent } from './components/pacientes-list/pacientes-list.component';
import { SharedModule } from '../shared/shared.module';
import { PacientesFormComponent } from './containers/pacientes-form/pacientes-form.component';


@NgModule({
  declarations: [
    PacientesComponent,
    ConsultasListComponent,
    PacientesFormComponent,
  ],
  imports: [
    CommonModule,
    ConsultaRoutingModule,
    AppMaterialModule,
    SharedModule
  ]
})
export class PacientesModule { }
