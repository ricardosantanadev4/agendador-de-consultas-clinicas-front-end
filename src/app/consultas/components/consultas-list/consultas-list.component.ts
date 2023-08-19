import { Component } from '@angular/core';
import { Consulta } from '../../model/consulta';
import { Paciente } from '../../model/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-consultas-list',
  templateUrl: './consultas-list.component.html',
  styleUrls: ['./consultas-list.component.scss']
})
export class ConsultasListComponent {
  dataSource: Paciente[] = [];
  // dataSource!: Observable<Paciente[]>;

  displayedColumns = ['name', 'rg', 'telefone', 'dataNascimento', 'consulta'];

  constructor(pacienteService: PacienteService) {
    // this.dataSource = pacienteService.dataSource;
    pacienteService.getConsultas().subscribe(paciente => { this.dataSource = paciente, paciente.map(p => { console.log(p.consulta) }) });
  }

  // consultaID(c: Consulta[]) {
  //   return c.forEach(c => c.id);
  // }
}