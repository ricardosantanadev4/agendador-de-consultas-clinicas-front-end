import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-pacientes-list',
  templateUrl: './pacientes-list.component.html',
  styleUrls: ['./pacientes-list.component.scss']
})
export class ConsultasListComponent {
  @Input() pacienteList: Paciente[] = [];
  @Output() pacienteListEventOnAdd = new EventEmitter<boolean>(false);
  @Output() pacienteListEventOnEdit = new EventEmitter<boolean>(false);
  @Output() pacienteListEventOnDelete = new EventEmitter<boolean>(false);

  readonly displayedColumns = ['name', 'rg', 'telefone', 'dataNascimento', 'consulta', 'actions'];

  constructor() { }

  onAddPacientesList() {
    console.log('onAddPacientesList()');
    this.pacienteListEventOnAdd.emit(true);
  }

  onEditPacientesList() {
    console.log('onEditPacientesList()');
    this.pacienteListEventOnEdit.emit(true);
  }

  onDeletePacientesList() {
    console.log('onDeletePacientesList()');
    this.pacienteListEventOnDelete.emit(true);
  }
}