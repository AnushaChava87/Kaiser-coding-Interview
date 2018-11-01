import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  jsonData:any;
  constructor(private service: ApiServiceService){

  }
  ngOnInit(){
    this.service.getDatafromreqres().subscribe((res)=>{
       this.jsonData = res;
    }, err=>{
      console.log(err);
    })
  }
}
