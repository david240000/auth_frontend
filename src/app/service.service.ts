import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { LoginUser } from './classes/loginUser';
import { SignupComponent } from './signup/signup.component';
import { SignUpUser } from './classes/signUpUser';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  _login_url = 'http://localhost:3000/login'
  _signup_url = 'http://localhost:3000/registration'
  _profile_url = 'http://localhost:3000/profil'
  _update_url = 'http://localhost:3000/update'
  _delete_url = 'http://localhost:3000/delete'
  _changePassword_url = 'http://localhost:3000/changePassword'
  _google_url = 'http://localhost:3000/auth/google'
  
  constructor(private _http: HttpClient) { }

  login(user: LoginUser){
    return this._http.post<any>(this._login_url, user);
  }

  signUp(user: SignUpUser){
    return this._http.post<any>(this._signup_url, user);
  }

  getProfile(token:string){
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this._http.get<any>(this._profile_url, {headers:headers_object})
  }

  update(token:string, user:SignUpUser){
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this._http.post<any>(this._update_url, user,{headers:headers_object})
  }

  delete(token:string){
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this._http.delete<any>(this._delete_url,{headers:headers_object})
  }

  changePassword(token:string, password:string){
    var headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    return this._http.post<any>(this._changePassword_url, {password},{headers:headers_object})
  }
   
  googleLogin(){
    return this._http.get<any>(this._google_url);
  }
  
}
