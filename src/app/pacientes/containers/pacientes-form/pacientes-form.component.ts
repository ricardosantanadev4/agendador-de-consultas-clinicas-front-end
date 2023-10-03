import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as moment from 'moment';
import { Especialista } from '../../model/food';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.scss']
})
export class PacientesFormComponent {

  constructor(private location: Location) {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    // Datepicker with min & max validation
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 10, 0, 1);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }

  onCancel() {
    console.log('buttonCancel()');
    this.location.back();
  }

  // Datepicker with filter validation
  // myFilter = (d: Date | null): boolean => {
  //   const day = (d || new Date()).getDay();
  //   // Prevent Saturday and Sunday from being selected.
  //   return day !== 0 && day !== 6;
  // };

  // Datepicker with min & max validation
  minDate: Date;
  maxDate: Date;

  // Datepicker with custom formats
  date = new FormControl(moment());

  foods: Especialista[] = [
    { id: '1', name: 'doutor 1 especialista', especialidade: 'CARDIOLOGISTA', dataDisponivel: '29/09/2023', horarioDisponivel: '16:00:00', status: 'DISPONIVEL' },
    { id: '2', name: 'doutor 2 especialista', especialidade: 'NEUROLOGISTA', dataDisponivel: '01/12/2023', horarioDisponivel: '14:00:00', status: 'INDISPONIVEL' },
    { id: '3', name: 'doutor 3 especialista', especialidade: 'PEDIATRA', dataDisponivel: '25/10/2023', horarioDisponivel: '17:00:00', status: 'DISPONIVEL' }
  ];

  selectedFood = this.foods[2].id;
}