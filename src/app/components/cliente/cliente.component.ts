import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/Cliente';
import { ClienteServicioService } from 'src/app/services/cliente-servicio.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {

  constructor(private _clienteServicio:ClienteServicioService,private router: Router) { }

  clientes:Cliente[]=[];

  ngOnInit(): void {

    this._clienteServicio.ConsultarClientes().subscribe(data=>{

      this.clientes=data;

    });

  }
  public EliminarCliente(id:number | undefined){

    if(confirm("Seguro que desea eliminarlo")){
      this._clienteServicio.EliminarCliente(id).subscribe(data=>{

        //this.router.navigate(['cliente']);
        window.location.reload()
      });

    }

      }

}
