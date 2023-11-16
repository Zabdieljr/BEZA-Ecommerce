import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {Product} from "../common/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = "http://localhost:8081/api/products";

  constructor(private httpClient:HttpClient) { }

    getProductList(theCategoryId: number): Observable<Product[]> {
    // @TODO: need to build URL based on category id

      const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId?theCategoryId:1}`;

    return this.httpClient.get<GetResponse>(searchUrl).pipe(
    map(response => response._embedded.products)
    );
  }
}

interface GetResponse {
  _embedded: {
    products: Product[];
  }
}
