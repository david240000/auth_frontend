import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SignUpUser } from '../classes/signUpUser';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public user:SignUpUser = new SignUpUser('','','','',new Date());
  public error:string = '';

  constructor(private _service: ServiceService, private router: Router) { }


  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.user)
    if(this.user.email == '' || this.user.password==''){
      this.error='Fill the email and password field first'
    }else{
    this._service.signUp(this.user)
    .subscribe(
      data => {
        console.log("Siker ", data)
        this.router.navigate(['/login'])},
        error => {
          this.error = error.error.message;
          console.error(error)}
    )
  }}
}
