import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Consulta } from '../../model/consulta';
import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-consultas-list',
  templateUrl: './consultas-list.component.html',
  styleUrls: ['./consultas-list.component.scss']
})
export class ConsultasListComponent {
  @Input() pacienteList: Paciente[] = [];
  @Output() pacienteListEvent = new EventEmitter(false);

  readonly displayedColumns = ['name', 'rg', 'telefone', 'dataNascimento', 'consulta'];

  constructor() { }

}