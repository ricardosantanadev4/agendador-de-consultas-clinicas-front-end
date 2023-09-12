import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(pacienteService: PacienteService, private router: Router, private route: ActivatedRoute) {
    this.pacientes$ = pacienteService.getConsultas().pipe(
      tap(console.log)
    );
  }

  onAddPacientes() {
    console.log('onAddPacientes()');
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEditPacientes(paciente: Paciente) {
    console.log('onEditPacientes()');
    console.log(paciente);
    this.router.navigate(['edit', paciente.id], { relativeTo: this.route });
  }

  onDeletePacientes(paciente: Paciente) {
    console.log('onDeletePacientes()');
    console.log(paciente);

  }

}
