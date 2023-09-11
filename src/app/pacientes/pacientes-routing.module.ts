import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PacientesFormComponent } from './containers/pacientes-form/pacientes-form.component';
import { PacientesComponent } from './containers/pacientes/pacientes.component';

const routes: Routes = [
  { path: '', component: PacientesComponent },
  { path: 'new', component: PacientesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultaRoutingModule { }
