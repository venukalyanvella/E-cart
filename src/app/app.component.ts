import { Component } from '@angular/core';
// import { ToastrManager } from 'ng6-toastr-notifications';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'myproject';
  constructor(){}


  show(){
    
    console.log(`jquery version:${$.fn.jquery}`);
     
  }
  
  

}
