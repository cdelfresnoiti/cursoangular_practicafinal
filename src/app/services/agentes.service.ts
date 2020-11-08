import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agente } from '../models/agente';
import { AgenteAddDto } from '../models/dto/agente-add-dto';

@Injectable({
  providedIn: 'root'
})
export class AgentesService {

  constructor(private httpClient: HttpClient) { }

  getAgentes(): Observable<Agente[]> {
    return this.httpClient.get<Agente[]>('Agentes');
  }

  addAgente(data: AgenteAddDto): Observable<boolean> {
    return this.httpClient.put<boolean>('Agentes', data);
  }
}
