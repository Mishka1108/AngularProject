import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public url:string = 'https://mishka1108.github.io/json/Product.json'
  constructor(public product:HttpClient) { }
  
  getProduct(){
    return this.product.get<any[]>(this.url)
  }

}
