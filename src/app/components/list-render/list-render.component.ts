import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit{
  animals: Animal[] = [
    {name: "Lilica", type: "Cachorro", age: 4},
    {name: "Lua", type: "Gato", age: 5},
    {name: "Floquino", type: "Cachorro", age: 2},
    {name: "Spok", type: "Cachorro", age: 10},
    {name: "Thor", type: "Cavalo", age: 7},
    {name: "Theodoro", type: "Coelho", age: 1},
  ];

  animal: Animal = {
    name: 'teste',
    type: 'Alguma coiosa',
    age: 10,
  }
cars= [
  {fabricante: "Honda", model: "Civic", type: "Coupe"},
  {fabricante: "Honda", model: "Accord", type: "sedan"},
  {fabricante: "Honda", model: "CRV", type: "SUV"},
  {fabricante: "Toyota", model: "Corrola", type: "sedan"},
  {fabricante: "Toyota", model: "Hilux", type: "Pick-Up"},
  {fabricante: "VolksWagen", model: "Gol", type: "hatch"},
  {fabricante: "VolksWagen", model: "Polo", type: "hatch"},
];

animalDetails = '';

constructor(private listService:ListService) { }

  ngOnInit(): void {  }

  underline = 'underline';

  showAge(animal: Animal) { 
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal:Animal){
    console.log('Removendo animnal....')
    this.animals = this.listService.remove(this.animals,animal);
  }
}
