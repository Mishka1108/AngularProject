import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss',
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ProductdetailsComponent implements OnInit {

  public product: any;
  public isShow:boolean=false
  public hide:boolean=true
public cardInfo : any = {
      fullName:"",
      personNumber: "",
      deliverAdres: "",
      cardNumber: "",
      cardCv : ""
}

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    this.product={
      title: params['title'],
      category: params['category'],
      date: params['date'],
      price: params['price'],
      image: params['image']}
    console.log('Image URL:', this.product.image);
  })
}

show(){
  this.isShow=true
  this.hide=false
}
fillValue(){
  return (this.cardInfo.fullName &&
  this.cardInfo.personNumber &&
  this.cardInfo.deliverAdres &&
  this.cardInfo.cardNumber &&
  this.cardInfo.cardCv )
}
buy(){
  if(this.fillValue()){
    console.log("ბარათის მონაცემები", this.cardInfo);
    this.cardInfo={
      fullName:"",
      personNumber: "",
      deliverAdres: "",
      cardNumber: "",
      cardCv : ""
    }
    alert('გილოცავთ თქვენ შეიძინეთ პროდუქტი')
  } 
  else {
    alert('გთხოვთ შეავსოთ ყველა ველი')
  }

  
}
}