import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {

  myForm: FormGroup;
  tokenActual: string;
  tokenOriginal: string;

  constructor(private fb: FormBuilder, private loginService: LoginService) { }

  ngOnInit() {

    this.myForm = this.fb.group({
      email: new FormControl('',
      [Validators.required, Validators.email],  // validadores síncronos
      [] // validadores asíncronos
      ),
      password: new FormControl('')
    });

    this.tokenActual = localStorage.getItem('token');
  }

  login() {
    const user = this.myForm.get('email').value;
    const pass = this.myForm.get('password').value;
    this.loginService.login(user, pass).subscribe( ret => {
      this.tokenOriginal = ret.token;
      localStorage.setItem('token', this.tokenOriginal);
      this.tokenActual = this.tokenOriginal;
      alert('Token añadido');
    },
    err => {
      alert(err);
    })
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
