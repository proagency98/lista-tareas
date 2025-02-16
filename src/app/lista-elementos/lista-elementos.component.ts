import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista-elementos',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './lista-elementos.component.html',
  styleUrl: './lista-elementos.component.css'
})
export class ListaElementosComponent {
  elementos: { id: number, nombre: string}[] = [];
  nuevoElemento: string = '';
 
  agregarElemento() {
    if (this.nuevoElemento.trim()) { //verificamos que no esté vacio
      const nuevoId = this.elementos.length + 1;

      this.elementos.push({id: nuevoId, nombre: this.nuevoElemento}); //agregamos el elemento

      this.nuevoElemento = ''; // limpiamos el input despues de agregar el elemento
    }
  }
  eliminarElemento() {
    this.elementos.pop()
  }
}
