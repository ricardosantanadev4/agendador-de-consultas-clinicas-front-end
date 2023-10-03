import { LOCALE_ID, NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';

// @NgModule({
//   declarations: [],
//    imports: [
//      CommonModule,
//    ],
export const MY_FORMATS = {
  parse: {
    /* parse.dateInput: você pode permitir que o usuário insira qualquer tipo de data com qualquer formato, e o 
   adaptador de data irá reformatá-la para o formato especificado neste atributo */
    dateInput: 'LL',
  },
  display: {
    // display.dateInput define o formato da data que vai ser exibido no display apos selecionar a data
    dateInput: 'L',
    // especifica o formato de de data que aparece na aba para selecionar o mes e a data especifico
    monthYearLabel: 'DD MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@NgModule({
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },

    /* como ja foi instalado o moment npm install moment --save e possivel traguzir o caledario para qualquer 
    idioma inclusive o Portugues Brazil, observe que a traducao pt-BR esta em node_modules/moment/locale/pt-br.js */
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class AppMaterialModule { }
