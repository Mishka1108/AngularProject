import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"product",component:ProductComponent
  },
  {
    path: 'product/:category', component:ProductComponent
  },
  {
    path: 'productdetails', component:ProductdetailsComponent
  }
  ,
  {
    path:"aboutme",component:AboutmeComponent
  },
  {
    path:"contact",component:ContactComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
     path: "register", component:RegisterComponent
  },
  {
    path:"**",component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
