import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  clases: string;
  icono: string;
  oculto: boolean;
  mensaje: string;

  constructor() { }

  ngOnInit(): void {
    this.inicializarVariables();
  }

  /**
   * 
   * @param tipo Tipo de alert a mostrar
   * @param msj Mensaje a mostrar
   * @param segs Tiempo que dura el mensaje en pantalla (segundos). (si se omite no se autooculta)
   */
  mostrar(tipo:string, msj:string, segs:number){
    this.oculto = false;
    this.mensaje = msj;
    this.setVariables(tipo);
    if (segs > 0){
      setTimeout(() => {
        this.cerrar();
      }, segs*1000);
    }
  }

  /**
   * Cierra el alert vaciando las variables
   */
  cerrar(){
    this.inicializarVariables();
  }

  /**
   * Setea las variables para definir el estilo del alert segun el tipo de alert a mostrar
   * @param tipo Tipo de alert a mostrar
   */
  private setVariables(tipo: string) {
    switch (tipo) {
      case "success":
        this.clases = "alert-success";
        this.icono = "check-circle";
        break;
      case "info":
        this.clases = "alert-info";
        this.icono = "info-circle";
        break;
      case "warning":
        this.clases = "alert-warning";
        this.icono = "exclamation-triangle";
        break;
      case "danger":
        this.clases = "alert-danger";
        this.icono = "exclamation-circle";
        break;
      default:
        this.setVariables("info");
        this.mensaje = "Le erraste en el tipo de alert";
        break;
    }
  }

  /**
   * Vacia todas las variables
   */
  private inicializarVariables(){
    this.clases = "";
    this.icono = "";
    this.oculto = true;
    this.mensaje = "";
  }
}
