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
  @Output() pacienteListEventOnEdit = new EventEmitter<Paciente>(false);
  @Output() pacienteListEventOnDelete = new EventEmitter<Paciente>(false);

  readonly displayedColumns = ['name', 'rg', 'telefone', 'dataNascimento', 'consulta', 'actions'];

  constructor() { }

  onAddPacientesList() {
    console.log('onAddPacientesList()');
    this.pacienteListEventOnAdd.emit(true);
  }

  onEditPacientesList(record: Paciente) {
    console.log('onEditPacientesList()');
    this.pacienteListEventOnEdit.emit(record);
  }

  onDeletePacientesList(record: Paciente) {
    console.log('onDeletePacientesList()');
    this.pacienteListEventOnDelete.emit(record);
  }
}