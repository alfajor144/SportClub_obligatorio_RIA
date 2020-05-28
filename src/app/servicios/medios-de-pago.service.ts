import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MedioDePago } from '../clases/medio-de-pago';

@Injectable({
  providedIn: 'root'
})
export class MediosDePagoService {

  private apiURL: string = 'http://159.65.222.132:802/api/MediosDePago';

  constructor(protected http: HttpClient) { }

  getAll(){
    return this.http.get(this.apiURL);
  }
  create(datos:MedioDePago){
    return this.http.post(this.apiURL, datos);
  }
  get(id:number){
    return this.http.get(this.apiURL + '/' + id);
  }
  edit(datos:MedioDePago){
    return this.http.put(this.apiURL + '/' + datos.id, datos);
  }
  delete(id:number){
    return this.http.delete(this.apiURL + '/' + id);
  }
}
/*
MediosDePago
    GET
    ​/api​/MediosDePago
    POST
    ​/api​/MediosDePago
    GET
    ​/api​/MediosDePago​/{id}
    PUT
    ​/api​/MediosDePago​/{id}
    DELETE
    ​/api​/MediosDePago​/{id}
*/