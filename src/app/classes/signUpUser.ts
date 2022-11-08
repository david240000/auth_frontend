import { DayTemplateContext } from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-day-template-context";

export class SignUpUser{
    public email:string;
    public password?:string;
    public fullName?:string;
    public location?:string;
    public birthDate?:any;
    constructor(email: string, password:string, fullName:string, location:string, birthDate:Date){
        this.email = email;
        this.password = password;
        this.fullName = fullName;
        this.location = location;
        this.birthDate = birthDate;
    }
}