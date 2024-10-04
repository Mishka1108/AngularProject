import { Component, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomeComponent {
     public bestSeller: any []=[]  
     public brand: {img:string} [] = [
      {
        img: "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/256_144_4.png?$512_N_PNG$"
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmD1EzAedSRZ9csLZLh2TZXr6_XSz36x29ow&s"
      },
      {
        img: "https://1000logos.net/wp-content/uploads/2021/08/Xiaomi-logo.png"
      },
      {
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Lenovo_Global_Corporate_Logo.png/2560px-Lenovo_Global_Corporate_Logo.png"
      }
     ]
     constructor (public productService:ProductService, public router:Router) {}
    ngOnInit() :void{
      this.loadProduct()
    }
     loadProduct() :void{
      this.productService.getProduct().subscribe(
        product => {
         this.bestSeller= product.filter(product=> product.sell=== "Best Seller")
        }
      )
     }
 viewProduct(item:any){
this.router.navigate(["/productdetails"],{
  queryParams:{
    title: item.title,
    category: item.category,
    data: item.data,
    price: item.price,
    image: item.image
  }
})
 }
}
