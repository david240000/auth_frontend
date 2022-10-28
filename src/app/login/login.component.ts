import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from '../classes/loginUser';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user:LoginUser= new LoginUser('','');
  public error:string = '';

  constructor(private _service: ServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._service.login(this.user)
    .subscribe(
      data => {
        console.log("Siker ", data.access_token)
        this.router.navigate(['/profil/',{access_token: data.access_token}])},
        error => {
          this.error = error.error.message;
          console.error(error)}
    )
  }

}
