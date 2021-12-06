import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { CounterService } from 'src/app/counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.scss']
})
export class ShowCounterComponent implements OnInit, OnDestroy{
  subscription!: Subscription;
  myCounter = 0;
  myError : boolean = this.counter.getError();

  constructor(private counter:CounterService) {

  }

  ngOnInit(): void {
    this.subscription = this.counter.getCounter().subscribe(data => this.myCounter = data);
}


  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
