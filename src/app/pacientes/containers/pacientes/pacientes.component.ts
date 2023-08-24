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
      tap(p => console.log(p)));
  }

}
