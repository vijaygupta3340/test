import { Component, OnInit } from '@angular/core';
import { Http, Response , Headers , RequestOptions} from '@angular/http';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  constructor(private http : Http) { }

  categorys = [];
  fetchProducts = function(){
    this.http.get("http://localhost:5555/categorys").subscribe(
      ( res : Response) =>       
      this.categorys = res.json()      
    );
  }
  ngOnInit() {

    this.fetchProducts();
  }

}
