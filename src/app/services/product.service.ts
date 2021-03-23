import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
public _api=environment.api_url
  constructor(private _http:HttpClient) { }


  //get all products
  getAllProducts(){
    let headers= new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET ',
      'Access-Control-Allow-Headers':'application/json application/image',
    })
    
    return this._http.get<any>(this._api+`${'/allProducts'}`,{headers})
  }


}
