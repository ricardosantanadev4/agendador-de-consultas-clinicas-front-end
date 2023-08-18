import { Injectable } from '@angular/core';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  dataSource: Paciente[] = [{
    name: 'Ricardo', rg: '7777777', telefone: '9999999999',
    dataNascimento: '11/11/1111', consulta: '1'
  }];

  constructor() { }

}
