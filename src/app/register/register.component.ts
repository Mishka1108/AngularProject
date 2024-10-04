import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 
  public register:any = {
    fullname:"",
    email:"",
    phone:"",
    personnumber:"",
    username:"",
    password:""
  }


letsGo(){
  console.log(this.register);
  
  this.register={
    fullname:"",
    email:"",
    phone:"",
    personnumber:"",
    username:"",
    password:""
  }
}

}
