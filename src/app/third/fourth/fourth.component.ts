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
  users=['Anoy','Arif']
  userDetails=[
    {
      name:'Anoy',
      age: 25,
      religion:'Islam'
    }
  ]
  details=[
    {
      name:'Arif',
      age:26,
      hobby:'gaming',
      extra:['goodLooking','goodSoul']
    }
  ]

}
