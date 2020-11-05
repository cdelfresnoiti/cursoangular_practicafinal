import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agente } from '../models/agente';

@Injectable({
  providedIn: 'root'
})
export class AgentesService {

  constructor(private httpClient: HttpClient) { }

  getAgentes(): Observable<Agente[]> {
    return this.httpClient.get<Agente[]>('Agentes');
  }
}
