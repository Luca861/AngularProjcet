import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter:number = 0;
  constructor() { }

  getCounter():number{
    return this.counter;
  }

  addCounter(value:number = 1):any{
    return this.counter += value;
    console.log('Valore del contatore', this.counter);
  }

  subCounter(value:number = 1):any{
    if (value > this.counter){
      console.log('Errore! Non puoi sottrarre un valore maggiore del contatore')
    }else{
      this.counter -= value;
      return this.counter;
      console.log('Valore del contatore', this.counter);
    }
  }

}
