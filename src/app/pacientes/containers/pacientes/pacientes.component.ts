import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Paciente } from '../../model/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {
  // dataSource: Paciente[] = [];
  pacientes$: Observable<Paciente[]>;

  constructor(pacienteService: PacienteService) {
    this.pacientes$ = pacienteService.getConsultas().pipe(
      tap(console.log)
    );
  }

  onAddPacientes(event: boolean) {
    console.log('onAddPacientes()');
    console.log(event);
  }

  onEditPacientes(event: boolean) {
    console.log('onEditPacientes()');
    console.log(event);
  }

  onDeletePacientes(event: boolean) {
    console.log('onDeletePacientes()');
    console.log(event);
  }

}
