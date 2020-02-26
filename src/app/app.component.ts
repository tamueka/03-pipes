import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = 'Capitan America';

  nombre2: string = 'saMUEL rUiz de la ROSA';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI: number = Math.PI;

  porcentaje: number = 0.234;

  salario: number = 1234.5;

  fecha: Date = new Date();

  idioma: string = 'en';

  videoURL: string = 'https://www.youtube.com/embed/wXhTHyIgQ_U'


  valorPromesa = new Promise((resolve)=>{
    setTimeout(function(){
      resolve("¡LLegaron los datos!"); // ¡Todo salió bien!
    }, 4500);
  })

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion:{
      calle: 'Primera',
      casa: 20
    }
  }

}

