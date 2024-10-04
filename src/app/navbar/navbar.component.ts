import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  public showMenu:boolean=false
  public isShow:boolean=false
  toggleMenu(){
    this.isShow=!this.isShow
    this.showMenu=!this.showMenu
  }
   public categories:string[]=["Smartphone", "Computer", "Pc", "Headphone","Components"]
 

  }
