import { Component } from '@angular/core';
import { first, Observable, tap } from 'rxjs';
import { Consulta } from '../../model/consulta';
import { Paciente } from '../../model/paciente';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-consultas-list',
  templateUrl: './consultas-list.component.html',
  styleUrls: ['./consultas-list.component.scss']
})
export class ConsultasListComponent {
  // dataSource: Paciente[] = [];
  dataSource: Observable<Paciente[]>;

  displayedColumns = ['name', 'rg', 'telefone', 'dataNascimento', 'consulta'];

  constructor(pacienteService: PacienteService) {
    this.dataSource = pacienteService.getConsultas().pipe(
      tap(p => console.log(p)));
  }

  // metodo criado para exibir o id da consulta na conluna consulta na tabela do angular
  // com isso e necessario percorrer o array de consultas para extrair e retornar essa informacao
  // contudo nao e a melhor forma porque o id e sobrescrito na variavel e retorna so um id, 
  // porem o paciente pode ter varias consultas ou seja mais de um id deveria serexibido
  consultaID(c: Consulta[]) {
    // dessa forma o id da consulta e exibido na tabela, porem o id e sobrescrito e mostra somente um
    let cs = '';
    c.forEach(c => { cs = c.id, console.log(c.id) });
    return cs;

    // a tabela nao entede esse tipo de return por isso nao renderiza o valor na tabela
    // return c.forEach(c => c.id);
  }
}