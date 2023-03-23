import { Component, OnInit,Input } from '@angular/core';
import { Cliente } from 'src/app/interfaces/Cliente';

@Component({
  selector: 'app-listado-cliente',
  templateUrl: './listado-cliente.component.html'
})
export class ListadoClienteComponent implements OnInit {


  @Input('clientes') clientes!:Cliente;

  constructor() { }

  ngOnInit(): void {
  }

}
