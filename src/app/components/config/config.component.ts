import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  tokenActual: string;
  tokenOriginal = 'CE127663B4C9B1E6215F992ED33358E7E8F58D75';

  constructor() { }

  ngOnInit() {
    this.tokenActual = localStorage.getItem('token');
  }

  anyadirToken() {
    localStorage.setItem('token', this.tokenOriginal);
    this.tokenActual = this.tokenOriginal;
    alert('Token añadido');
  }

  eliminarToken() {
    localStorage.removeItem('token');
    this.tokenActual = null;
    alert('Token eliminado');
  }

}
