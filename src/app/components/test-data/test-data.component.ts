import { Component, OnInit } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'app-test-data',
  templateUrl: './test-data.component.html',
  styleUrls: ['./test-data.component.css']
})
export class TestDataComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
    $('.register').click(function(){
      $('.register-form').show();
      $('.login-form').hide()
    })
    })
    $(document).ready(function () {
      $('.login').click(function(){
        $('.register-form').hide();
        $('.login-form').show()
      })
      })
  }

  

}
