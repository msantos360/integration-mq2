import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseConsumidor } from '../models/response-consumidor';
import { ResponseProdutor } from '../models/response-produtor';

const url = "http://localhost:8080"
const pathConsumidor = "consumidor";
const pathProdutor = "produtor";

const options = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class DronesService {

  constructor(private http: HttpClient) { }

  getConsumidor(): Observable<ResponseConsumidor> {
    return this.http.get<ResponseConsumidor>(`${url}/${pathConsumidor}`, options); 
  }

  startProdutor(): Observable<ResponseProdutor> {
    return this.http.post<ResponseProdutor>(`${url}/${pathProdutor}`, null, options);
  }
}
