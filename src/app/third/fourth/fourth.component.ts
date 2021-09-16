import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.scss']
})
export class FourthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  clickMe(){
    alert("Ki Hoyche??")
  }
  clickMe1(name:string){
    alert(name)
  }

}
