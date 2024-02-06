import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from 'src/app/Animal';
import { Car } from 'src/app/Cars';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-item-datail',
  templateUrl: './item-datail.component.html',
  styleUrls: ['./item-datail.component.css']
})
export class ItemDatailComponent implements OnInit {
  animal?: Animal;
  car?: Car;

  constructor(private listservice: ListService, private route: ActivatedRoute) {
    this.getAnimal()
    this.getCar()

  }

  ngOnInit(): void {}

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listservice.getItem(id).subscribe((animal)=> (this.animal = animal));
  }

  getCar() {
    const id = Number(this.route.snapshot.paramMap.get("id"));
    this.listservice.getProp(id).subscribe((car) => (this.car = car));
  }

}
