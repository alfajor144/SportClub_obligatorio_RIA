import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actividad } from '../clases/actividad';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  private apiURL: string = "http://159.65.222.132:802/api/Actividades";

  constructor(protected http: HttpClient) { }

  getAll(){
    return this.http.get(this.apiURL);
  }
  create(datos:Actividad){
    return this.http.post(this.apiURL, datos);
  }
  get(id:number){
    return this.http.get(this.apiURL + '/' + id);
  }
  edit(datos:Actividad){
    return this.http.put(this.apiURL + '/' + datos.id, datos);
  }
  delete(id:number){
    return this.http.delete(this.apiURL + '/' + id);
  }
}
/*
Actividades
    GET
    ​/api​/Actividades
    POST
    ​/api​/Actividades
    GET
    ​/api​/Actividades​/{id}
    PUT
    ​/api​/Actividades​/{id}
    DELETE
    ​/api​/Actividades​/{id}
*/