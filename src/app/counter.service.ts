import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterSubject = new BehaviorSubject<number>(1);
  public counter$ = this.counterSubject.asObservable();
  private error:boolean = false;
  private counter:number = 0;

  constructor() {
    this.getCounter().subscribe(data =>
      this.counter = data
    )

   }

  getCounter():Observable<number>{
    return this.counter$;
  }

  addCounter(value:number = 1){
    this.counterSubject.next(this.counter + value);
  }

  subCounter(value:number = 1):any{
    if (value > this.counter){
      this.error = true;
    }else{
      this.counterSubject.next(this.counter - value);
    }
  }

  getError():boolean{
    return this.error;
  }

}
