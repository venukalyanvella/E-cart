import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public ImgUrl='';
  allProducts:any=[];


  constructor(private _productService:ProductService) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    this._productService.getAllProducts().subscribe((products)=>{
      // console.log(products);
      this.allProducts = products
    },
    (error)=>{
      console.log('Error While Getting Products',error);
      
    })
  }

}
