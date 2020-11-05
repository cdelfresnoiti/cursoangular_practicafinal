import { Component, OnInit } from '@angular/core';
import { Agente } from 'src/app/models/agente';
import { AgentesService } from 'src/app/services/agentes.service';

@Component({
  selector: 'app-agentes',
  templateUrl: './agentes.component.html',
  styleUrls: ['./agentes.component.css']
})
export class AgentesComponent implements OnInit {

  agentes: Agente[];

  constructor(private agentesService: AgentesService) { }

  ngOnInit() {
    this.loadAgentes();
  }

  loadAgentes() {
    this.agentesService.getAgentes().subscribe(ret => {
this.agentes = ret;
    });
  }

  onRowUpdating(data) {
    console.log(data);
    if (data.key.nombre === 'Matías2') {
      console.log('Cancelamos evento');
      data.cancel = true;
    }
    else{
      console.log('Continuamos evento');
    }
  }

  onRowUpdated(data) {
    console.log(data);
    // Aquí se hace la llamada al api
    // para realizar la modificación
    // del agente modificado
  }

}
