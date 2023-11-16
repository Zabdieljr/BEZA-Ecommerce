import { Component } from '@angular/core';
import {ProductService} from "../../services/product.service";
import {Product} from "../../common/product";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
products: Product[] = [];
//add current catetgory Id
  currentCategoryId: number = 1;
  //add search keyword
  searchMode: boolean = false;
  //properties for pagination
  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;


//inject the private route activated route


  constructor(private productService: ProductService,
              //inject the private route: activated route
              private route: ActivatedRoute) { }
  ngOnInit(): void {

    //do a subscribe on the paramMap
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }
  listProducts() {

    //check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      //get the "id" param string. convert string to a number using the "+" symbol
      // @ts-ignore
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id');
    }
    else {
      //not category id available ... default to category id 1
      this.currentCategoryId = 1;
    }

    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    )
  }


}
