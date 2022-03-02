import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NovoUsuario } from './novo-usuario';

@Injectable({
  providedIn: 'root'
})
export class NovoUsuarioService {

  urlPost = 'http://localhost:3000/user/singup';
  
  constructor(private httpClient: HttpClient) { }

  cadastraNovoUsuario(novoUsuario: NovoUsuario) :Observable<any> {
    return this.httpClient.post(this.urlPost, novoUsuario);
  }

  verificaUsuarioExistente(nomeUsuario : string) :Observable<any> {
      return this.httpClient.get(`http://localhost:3000/user/exists/${nomeUsuario}`);
  }
  
}

