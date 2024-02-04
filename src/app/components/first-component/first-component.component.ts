import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Joe';
  age: number = 32;
  job = "Programador";
  Hobbies = ['Musica', 'Jogar' , 'Viagens'];
car={
  name: 'Honda',
  year: 1998,
  transmition: ['Automático', 'Manual'],
};

  constructor() { }

  ngOnInit(): void {

  }

}
