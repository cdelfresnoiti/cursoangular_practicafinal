import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgentesService } from 'src/app/services/agentes.service';

@Component({
  selector: 'app-crear-agente',
  templateUrl: './crear-agente.component.html',
  styleUrls: ['./crear-agente.component.css']
})
export class CrearAgenteComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private agentesService: AgentesService, private router: Router) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      administrador: new FormControl(false),
      activo: new FormControl(true)
    });
  }

  crearAgente() {
    const data = this.myForm.value;
    if (data) {
      console.log(data);
    }

    this.agentesService.addAgente(data).subscribe(ret=>{
      console.log(ret);
      alert('Agente creado');
      this.router.navigate(['/users']);
    },
    err => {
      console.log(err);
    });
  }

}
