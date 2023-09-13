import { Location } from '@angular/common';
import { Component } from '@angular/core';

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
}
