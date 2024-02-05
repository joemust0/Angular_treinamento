import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { Car } from 'src/app/Cars';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit{
  animals: Animal[] = [];

  animal: Animal = {
    name: 'teste',
    type: 'Alguma coiosa',
    age: 10,
  }
cars: Car[] = [];

car: Car = {
  fabricante: 'honda',
  model: 'civic',
  type: 'sedan',
}

animalDetails = '';

constructor(private listService:ListService) { 
  this.getAnimals()
  this.getCars()
}

  ngOnInit(): void {  }

  underline = 'underline';

  showAge(animal: Animal) { 
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`;
  }

  removeAnimal(animal:Animal){
    console.log('Removendo animnal....')
    this.animals = this.listService.remove(this.animals,animal);
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  getCars(): void {
    this.listService.getAll2().subscribe((cars) =>(this.cars = cars));

  }
}