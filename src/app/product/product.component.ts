import { Component,OnInit, ViewEncapsulation } from '@angular/core';
import { ProductService } from '../services/product.service';
import { error } from 'console';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
  encapsulation:ViewEncapsulation.ShadowDom
  
  
})
export class ProductComponent implements OnInit {
  public searchProduct:string = "";
  public minPrice:number = 0;
  public maxPrice:number = 0;
  public productList:any []=[];
  public filterProduct : any [] = [];
 public category: string | null = null;
 constructor(public productService:ProductService, public route:ActivatedRoute, public router:Router){}
 ngOnInit(): void {
  // მივიღოთ კატეგორია URL-დან
  this.route.paramMap.subscribe(params => {
    this.category = params.get('category');
    this.loadProducts();
  });
}

loadProducts(): void {
  this.productService.getProduct().subscribe(
    (products: any[]) => {
      // ფილტრაცია კატეგორიის მიხედვით
      if (this.category) {
        this.productList = products.filter(product => product.category === this.category);
      } else {
        this.productList = products;
      }
      this.applyFilters(); // ფილტრაციის ფუნქცია
    },
    error => {
      console.error('404 found', error);
    }
  );


}

// ფილტრაცია ფასით და ძებნით
applyFilters(): void {
  this.filterProduct = this.productList.filter(product => {
    const matchesSearch = this.searchProduct ? product.title.toLowerCase().includes(this.searchProduct.toLowerCase()) : true;
    const matchesMinPrice = this.minPrice ? product.price >= this.minPrice : true;
    const matchesMaxPrice = this.maxPrice ? product.price <= this.maxPrice : true;
    
    return matchesSearch && matchesMinPrice && matchesMaxPrice;
  });
}

viewFullDetails(item:any){
  this.router.navigate(["/productdetails"],{
    queryParams:{
      title:item.title,
      category: item.category,
      date: item.date,
      price: item.price,
      image: item.image
       
    }
  })
}

}
