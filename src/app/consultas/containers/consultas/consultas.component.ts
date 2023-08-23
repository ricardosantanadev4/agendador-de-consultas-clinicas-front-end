import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Paciente } from '../../model/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-consultas',
  templateUrl: './consultas.component.html',
  styleUrls: ['./consultas.component.scss']
})
export class ConsultasComponent {
  // dataSource: Paciente[] = [];
  pacientes$: Observable<Paciente[]>;

  constructor(pacienteService: PacienteService) {
    this.pacientes$ = pacienteService.getConsultas().pipe(
      tap(p => console.log(p)));
  }

}
