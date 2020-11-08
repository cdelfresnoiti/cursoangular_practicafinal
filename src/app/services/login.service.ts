import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResultDto } from '../models/dto/login-result-dto';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }


  login(user: string, pass: string): Observable<LoginResultDto> {
    const data = {
      email: user,
      password: pass
    };
    return this.httpClient.post<LoginResultDto>('Login', data);
  }
}
