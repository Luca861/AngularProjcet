import { Component, Input, OnInit } from '@angular/core';
import { CounterService } from 'src/app/counter.service';

@Component({
  selector: 'app-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.scss']
})
export class ShowCounterComponent implements OnInit {

  myCounter = this.counter;

  constructor(private counter:CounterService) { }

  ngOnInit(): void {
  }

}
