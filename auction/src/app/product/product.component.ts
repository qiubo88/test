import { Component, OnInit } from '@angular/core';
import construct = Reflect.construct;
import {Product, ProductService} from '../shared/product.service';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  private products: Product[];
  private keyword: string;
  private titleFilter: FormControl = new FormControl();  
  private imgUrl = 'http://placehold.it/320x150';//用于前台属性绑定
  constructor(private productService: ProductService) { 
    this.titleFilter.valueChanges
    .debounceTime(1000) //要加：import 'rxjs/Rx'
    .subscribe(
      value => this.keyword = value
    );
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
    //console.log(this.products[0]['price'])
  }

}
/*
 export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<String>
  ) {

  }
}
*/
