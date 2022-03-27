import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Aplicación calculadora';
  resultado: number = 0;
  
  resultadoNuevo ( resultado: number ) {
    this.resultado = resultado;
  }
}
