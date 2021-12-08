import { Injectable } from '@angular/core';
import { map, Observable,of} from 'rxjs';
import { BEERS } from './mock-data/mock-data';
import { IBeer } from './models/beer';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  private beers:IBeer[] = BEERS;
  private beerObservable : Observable<IBeer[]> = of(this.beers);

  constructor() {
    this.getBeers().subscribe(data =>
      this.beers = data)
  }

    getBeers(){
     return this.beerObservable;
    }


  getBeerById(id:number):Observable<IBeer>{
  return this.beerObservable.pipe(
     map(beers => beers.find(beer => beer.id == id))
     )as Observable<IBeer>
  }

}
