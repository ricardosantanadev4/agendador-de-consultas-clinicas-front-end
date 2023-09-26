import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Especialista } from '../../model/food';

@Component({
  selector: 'app-pacientes-form',
  templateUrl: './pacientes-form.component.html',
  styleUrls: ['./pacientes-form.component.scss']
})
export class PacientesFormComponent {

  constructor(private location: Location) { }

  onCancel() {
    console.log('buttonCancel()');
    this.location.back();
  }

  foods: Especialista[] = [
    { id: '1', name: 'doutor 1 especialista', especialidade: 'CARDIOLOGISTA', dataDisponivel: '29/09/2023', horarioDisponivel: '16:00:00', status: 'DISPONIVEL' },
    { id: '2', name: 'doutor 2 especialista', especialidade: 'NEUROLOGISTA', dataDisponivel: '01/12/2023', horarioDisponivel: '14:00:00', status: 'INDISPONIVEL' },
    { id: '3', name: 'doutor 3 especialista', especialidade: 'PEDIATRA', dataDisponivel: '25/10/2023', horarioDisponivel: '17:00:00', status: 'DISPONIVEL' }
  ];

  selectedFood = this.foods[2].id;


}
