import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../list-films/film.model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  public baseUrl: string = 'http://localhost:3001';
  public listFilms: Film[] = [];
  public totalPrice: number = 0;
  private _priceHandler: number = 0;
  

  getPrice(): number {
    return this._priceHandler;
  }

  setPrice(value: number) {
    this._priceHandler = value;
  }

  constructor(private httpClient: HttpClient) {
  }

  getListFilms(): Observable<Film[]> {
    return this.httpClient.get<Film[]>(this.baseUrl+'/films');
  }

  selectFilm() {
    setTimeout(() =>{
      this.totalPrice += this.getPrice();
      console.log(this.totalPrice)
      }, 1);
    }

  unselectFilm () {
    this.totalPrice -= this.getPrice();
    if (this.totalPrice < 0) {
      this.totalPrice = 0; 
      console.log(this.totalPrice)
    }
  }
}
