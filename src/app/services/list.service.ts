import { Injectable } from '@angular/core';
import { Animal } from '../Animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../Cars';

@Injectable({
  providedIn: 'root'
})
export class ListService {
private apiUrl = 'http://localhost:3000/animals';
private apiUrl2 = 'http://localhost:3000/cars'
  constructor(private http: HttpClient) { }

  remove(animals: Animal[], animal:Animal){
    return animals.filter((a) => animal.name!== a.name);
  }
  getAll(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.apiUrl)
  }

  getAll2(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl2)
  }
}
