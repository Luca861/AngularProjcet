import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter:number = 0;
  private error:boolean = false;

  constructor() { }

  getCounter():number{
    return this.counter;
  }

  addCounter(value:number = 1):any{
    return this.counter += value;
  }

  subCounter(value:number = 1):any{
    if (value > this.counter){
      this.error = true;
    }else{
      this.counter -= value;
      return this.counter;
    }
  }

  getError():boolean{
    return this.error;
  }

}
