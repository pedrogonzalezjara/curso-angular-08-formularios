import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  usuario: object = {
    nombre: 'Pedro',
    apellido : 'Gonzalez',
    email : ''
  };

constructor() { }

guardar(forma: NgForm) {
    console.log( 'ngForm', forma);
    console.log( 'valor', forma.value);
    console.log('usuario', this.usuario);
  }

}
