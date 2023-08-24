import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  // metodo de teste criado para exibir o id das consultas na tabela do Angular
  // observacoes: o .map() foi a melhor opcao porque tem retorno e a tabela pode rederizar os dados
  // ale disso foram utlizadas menas linhas de codigo para retornar o id das consultas usando o .map() 
  consultaId(paciente: Paciente) {

    // .map retorna um valor por isso a tabela renderiza os dados 
    return paciente.consulta.map(c => { c.id, console.log(c.id) });

    // essa forma funciona, porem possui mais linhas de codigo
    // let cs = paciente.consulta.forEach(c => {c.id,console.log(cs)});
    // return cs;

    // essa forma funciona, porem possui mais linhas de codigo ainda
    // let cs: string[] = [];
    // paciente.consulta.map(c => {cs.push(c.id), console.log(cs)});
    // return cs;

    // .forEach apenas percorre o array e pode realizar algumas operacoes, mais nao retorna um valor 
    // por isso a tabela nao renderiza
    // return c.forEach(c => c.id);
  }
}