import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/Cliente';
import { ClienteServicioService } from 'src/app/services/cliente-servicio.service';
import { Router, RouterModule, Routes,ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html'
})
export class EditarClienteComponent implements OnInit {

  formularioCliente:FormGroup=this._fb.group({
    nombre:['',[Validators.required]],
    empresa:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    telefono:['88888888',[Validators.required]],
    notas:['',[Validators.required]],

  });
    cliente!:Cliente;
    clienteId:number=0;
  consecutivoId:number=0;
  clienteTraido:boolean=false;

  constructor(private _fb:FormBuilder,private _clienteService:ClienteServicioService,private router: Router,
    private rutaActiva: ActivatedRoute) { }

  ngOnInit(): void {
    this.clienteId=this.rutaActiva.snapshot.params['clienteId'];

    this._clienteService.ConsultarUnCliente(this.clienteId).subscribe(data=>{

      this.cliente=data;

      this.clienteTraido=this.cliente!==null?true:false;

        this.formularioCliente.reset({
        nombre:this.cliente.nombre,
        empresa:this.cliente.empresa,
        email:this.cliente.email,
        telefono:this.cliente.telefono,
        notas:this.cliente.notas
      })


    });

  }

  public EditarCliente():void{

    const {nombre,empresa,email,telefono,notas}=this.formularioCliente.controls;



    this.cliente={
      nombre:nombre.value,
      empresa:empresa.value,
      email:email.value,
      telefono:telefono.value,
      notas:notas.value
    }




    this._clienteService.EditarCliente(this.clienteId,this.cliente).subscribe(data=>{

    });
    this.router.navigate(['cliente']);

  }
}
