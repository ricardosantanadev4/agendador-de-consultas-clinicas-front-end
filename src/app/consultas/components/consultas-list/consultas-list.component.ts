import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../../model/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-consultas-list',
  templateUrl: './consultas-list.component.html',
  styleUrls: ['./consultas-list.component.scss']
})
export class ConsultasListComponent {
  dataSource: Paciente[] = [];
  displayedColumns = ['name', 'rg', 'telefone', 'dataNascimento', 'consulta'];

  constructor(pacienteService: PacienteService) {
    // this.dataSource = pacienteService.dataSource;
    pacienteService.getConsultas().subscribe(c => this.dataSource = c);
  }  

  getConsulta(pacienteService: PacienteService){
    this.dataSource = pacienteService.getConsultas();
  }
}