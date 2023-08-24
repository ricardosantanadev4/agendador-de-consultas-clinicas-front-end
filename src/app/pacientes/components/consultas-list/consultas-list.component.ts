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

  // metodo de teste criado para exibir o id de todas as consultas de cada paciente na coluna consulta da tabela do angular
  // com isso e necessario percorrer o array de consultas para extrair e retornar essa informacao
  // para a tabela do angular renderizar o array e necesario criar um array com o mesmo tipo do dado a ser exibido
  // o id da consulta e do tipo string logo c.id retorna um dado tipo string por isso cs: String[]
  consultaId(paciente: Paciente) {
    let cs: String[] = [];
    paciente.consulta.forEach(c => cs.push(c.id));
    console.log(cs);
    return cs;

    //   // a tabela nao entede esse tipo de return por isso nao renderiza o valor na tabela
    //   // return c.forEach(c => c.id);
  }

}