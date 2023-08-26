import { Pipe, PipeTransform } from '@angular/core';
import { Consulta } from 'src/app/pacientes/model/consulta';

@Pipe({
  name: 'consultaid'
})
export class ConsultaidPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  // a melhor forma de chamar um metodo em template do angular e usando o metodo em um pipe caso contrario 
  // o metodo vai ser executado varias vezes
  // metodo de teste criado para exibir o id das consultas na tabela do Angular
  // observacoes: o .map() foi a melhor opcao porque tem retorno e a tabela pode rederizar os dados
  // ale disso foram utlizadas menas linhas de codigo para retornar o id das consultas usando o .map() 
  transform(c: Consulta[]) {

    // .map retorna um valor por isso a tabela renderiza os dados 
    return c.map(c => c.id);

    // dessa forma a tabela nao renderiza porque o forEach nao tem retorno ou seja o retorno e undefined 
    // o forEach percorre o array e permite executar funcoes mais nao tem retorno
    // let cs = c.forEach(c => c.id);
    // console.log(cs);
    // return cs;

    // essa forma funciona, porem possui mais linhas de codigo ainda
    // let cs: string[] = [];
    // c.map(c => {cs.push(c.id), console.log(cs)});
    // return cs;

    // .forEach apenas percorre o array e pode realizar algumas operacoes, mais nao retorna um valor 
    // por isso a tabela nao renderiza
    // return c.forEach(c => c.id);
  }

}
