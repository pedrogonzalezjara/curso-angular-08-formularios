import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { PaisService } from '../../services/pais.service';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  usuario = {
    nombre: 'Pedro',
    apellido : 'Gonzalez',
    email : 'pgonzalez@gmail.com',
    pais: ''
  };

  paises: any[] = [];

constructor(private paisService: PaisService) { }

ngOnInit(): void {
  this.paisService.getPaises()
    .subscribe(paises => {
      this.paises = paises;
      this.paises.unshift({
        nombre: '[ Seleccione Pais]',
        codigo: ''
      })
      console.log(paises);
    })
}

guardar(forma: NgForm) {

  if(forma.invalid){
    Object.values(forma.controls).forEach(control => {
      control.markAsTouched();
    });
    return;
  }
    console.log( 'ngForm', forma);
    console.log( 'valor', forma.value);
    console.log('usuario', this.usuario);
  }

}
