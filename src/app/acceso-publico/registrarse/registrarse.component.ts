import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AccountService } from '../../servicios/account.service';
import {Router} from "@angular/router";
import { RegistroDTO } from '../../clases/registro-dto';
import { AlertsComponent } from 'src/app/administracion/alerts/alerts.component';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {
  @ViewChild('alertMsj') alertMsj:AlertsComponent = new AlertsComponent();

  public registrarForm: FormGroup;
  constructor(protected accServ:AccountService, private router: Router) { }

  ngOnInit(): void {
    this.registrarForm = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  vaciarCampos(){
    this.registrarForm.controls['email'].setValue("");
    this.registrarForm.controls['password'].setValue("");
  }

  registrar(){
    let correo = this.registrarForm.controls['email'].value;
    let contrasenia = this.registrarForm.controls['password'].value;

    let datosRegistro = new RegistroDTO(correo, contrasenia);

    this.accServ.register(datosRegistro).subscribe(
      (retorno)=>{
        //hacer algo si login es correcto
        this.router.navigate(['/administracion']);
      },
      (error)=>{
        //datos incorrectos
        this.alertMsj.mostrar("danger", "No se ha podido realizar el registro", 4);
      }
    );

  }

}
