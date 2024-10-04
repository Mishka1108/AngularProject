import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation:ViewEncapsulation.ShadowDom
 
})
export class LoginComponent {
  
  public login:any={
    username: "",
    password: ""
  }

enter(){
  console.log("პაროლი", this.login.password ,
    "მომხმარებელი" ,this.login.username
  );
  this.login= {
    username:"",
    password:""
  }
 
  
}


}
