import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Consulta } from '../../model/consulta';
import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.scss']
})
export class ConsultasListComponent {
  @Input() pacienteList: Paciente[] = [];
  @Output() pacienteListEvent = new EventEmitter(false);

  readonly displayedColumns = ['name', 'rg', 'telefone', 'dataNascimento', 'consulta'];

  constructor() { }

}