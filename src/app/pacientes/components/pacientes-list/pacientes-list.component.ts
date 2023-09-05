import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.scss']
})
export class ConsultasListComponent {
  @Input() pacienteList: Paciente[] = [];
  @Output() pacienteListEvent = new EventEmitter(false);

  readonly displayedColumns = ['name', 'rg', 'telefone', 'dataNascimento', 'consulta', 'actions'];

  constructor() { }

}