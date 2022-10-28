import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { SignUpUser } from '../classes/signUpUser';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  public user:SignUpUser = new SignUpUser('','','','', new Date);
  public token:string='';
  public formattedDate:string|null=null;
  public password: string='';

  constructor(private _service: ServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const datepipe: DatePipe = new DatePipe('en-US')
    this.route.params
      .subscribe(params =>{
        this.token = params['access_token']
      })
    this._service.getProfile(this.token)
    .subscribe(data =>{
      this.user = data;
      this.user.birthDate = datepipe.transform(this.user.birthDate, 'yyyy-MM-dd')
    },
    error => console.error(error)
    )
  }

  onSubmit(){
    delete this.user.password;
    this._service.update(this.token,this.user)
      .subscribe(
      data => {
      console.log("Siker ", data)
      this.ngOnInit},
      error => console.error(error)
  )

  }

  onNewPassword(){
    this._service.changePassword(this.token,this.password)
      .subscribe(
      data => {
      console.log("Siker ", data)
      this.ngOnInit},
      error => console.error(error)
  )
  this.password= '';  
  }

  onDelete(){
    this._service.delete(this.token)
    .subscribe(
      data => {
        console.log("Siker ", data)
        this.router.navigate(['/login'])},
        error => console.error(error)
    )
  }


}
