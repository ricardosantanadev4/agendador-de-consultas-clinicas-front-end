import { Component } from '@angular/core';
import { Paciente } from '../../model/paciente';

@Component({
  selector: 'app-consultas-list',
  templateUrl: './consultas-list.component.html',
  styleUrls: ['./consultas-list.component.scss']
})
export class ConsultasListComponent {
  dataSource: Paciente[] = [{
    name: 'Ricardo', rg: '7777777', telefone: '9999999999',
    dataNascimento: '11/11/1111', consulta: '1'
  }];

  displayedColumns = ['name', 'rg', 'telefone', 'dataNascimento', 'consulta'];
}