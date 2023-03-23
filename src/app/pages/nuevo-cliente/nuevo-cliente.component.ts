import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/app/interfaces/Cliente';
import { ClienteServicioService } from 'src/app/services/cliente-servicio.service';
import { Router, RouterModule, Routes } from '@angular/router';
@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html'
})
export class NuevoClienteComponent implements OnInit {


  formularioCliente:FormGroup=this._fb.group({
    nombre:['',[Validators.required]],
    empresa:['',[Validators.required]],
    email:['',[Validators.required,Validators.email]],
    telefono:['88888888',[Validators.required]],
    notas:['',[Validators.required]],

  });
  cliente!:Cliente;
  consecutivoId:number=0;

  constructor(private _fb:FormBuilder,private _clienteService:ClienteServicioService,private router: Router) { }

  ngOnInit(): void {
    this._clienteService.ConsultarClientes().subscribe(data=>{
      // console.log(data[data.length-1].id);
       this.consecutivoId!=data[data.length-1].id;
     });
  }

  public  generarId():number{

    return this.consecutivoId+=1;
  }

  public AgregarCliente():void{

    const {nombre,empresa,email,telefono,notas}=this.formularioCliente.controls;



    this.cliente={
      id:this.generarId(),
      nombre:nombre.value,
      empresa:empresa.value,
      email:email.value,
      telefono:telefono.value,
      notas:notas.value
    }

   if(this.formularioCliente.valid){
    this._clienteService.GuardarCliente(this.cliente).subscribe(data=>{

    });
    this.router.navigate(['cliente']);
   }else{
    alert("Faltan campos qué agregar");
   }








  }

}
