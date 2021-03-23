import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private _api=`http://localhost:3000/api`
  constructor(private _http:HttpClient) { }

  //get all products
  getAllProducts(){
    return this._http.get<any>(this._api+`${'/allProducts'}`)
  }


}
