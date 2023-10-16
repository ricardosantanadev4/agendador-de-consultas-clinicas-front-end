import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NonNullableFormBuilder } from '@angular/forms';
import * as moment from 'moment';
import { Especialista } from '../../model/especialista';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.scss']
})
export class PacientesFormComponent {
  pacientesForm!: FormGroup;

  especialistas: Especialista[] = [
    {
      id: '1', name: 'doutor 1 especialista', especialidade: 'CARDIOLOGISTA', dataDisponivel: ['29/09/2023', '30/09/2023'], horarioDisponivel: '16:00:00',
      status: 'DISPONIVEL'
    },
    {
      id: '2', name: 'doutor 2 especialista', especialidade: 'NEUROLOGISTA', dataDisponivel: ['10/11/2023', '18/11/2023'], horarioDisponivel: '14:00:00',
      status: 'INDISPONIVEL'
    },
    {
      id: '3', name: 'doutor 3 especialista', especialidade: 'PEDIATRA', dataDisponivel: ['11/01/2023', '30/01/2023'], horarioDisponivel: '17:00:00',
      status: 'DISPONIVEL'
    }
  ];

  // Datepicker with custom formats
  date = new FormControl(moment());

  anoaComparar: number[] = [];
  mesaComparar: number[] = [];
  diaaComparar: number[] = [];

  constructor(private formBilder: NonNullableFormBuilder, private location: Location) {
    this.pacientesForm = formBilder.group({
      nome: [],
      rg: [],
      telefone: [],
      dataNascimento: [],
      especialidade: [],
      especialista: [],
      dataEspecialistaDisponivel: []
    });

    // ctrl click em Date para ver a documentacao da interface Date
    // exibe o ano atual
    // console.log(new Date().getFullYear());
    // exibe o indice do dia da semana que vai de 0 a 6
    // console.log(new Date().getDay());
    // exibe o dia que vai de 1 a 31
    // console.log(new Date().getDate());
    // exibe o indice do mes que vai de 0 a 11
    // console.log(new Date().getMonth());
  }

  onCancel() {
    console.log('buttonCancel()');
    this.location.back();
  }

  dataDisponivel() {
    console.log(this.pacientesForm.value.especialista);
    this.especialistas.map(f => { if (f.id == this.pacientesForm.value.especialista.id) { this.dateToNumber(f.dataDisponivel) } });
  }

  dateToNumber = (dateString: string[]) => {
    this.clearDate();
    const datePartes = dateString.map(d => d.split('/')
      .map(d => parseInt(d)));
    console.log(datePartes); // DD MM YYYY 
    /*  */
    datePartes.map(d => this.diaaComparar.push(d[0]));
    datePartes.map(d => this.mesaComparar.push(d[1]));
    datePartes.map(d => this.anoaComparar.push(d[2]));
  }

  // Datepicker with filter validation
  myFilter = (d: Date | null): boolean => {
    const data = (d || new Date()).getDate();
    const mes = (d || new Date()).getMonth() + 1;
    const ano = (d || new Date()).getFullYear();
    return this.diaaComparar.indexOf(+data) !== -1 && this.mesaComparar.indexOf(+mes) !== -1 && this.anoaComparar.indexOf(+ano) !== -1;
  };

  clearDate() {
    this.anoaComparar = [];
    this.mesaComparar = [];
    this.diaaComparar = [];
  }
}