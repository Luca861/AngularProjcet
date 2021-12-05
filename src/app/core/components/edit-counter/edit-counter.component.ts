import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/counter.service';

@Component({
  selector: 'app-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.scss']
})
export class EditCounterComponent implements OnInit {

  value:number = 1;


  constructor(private counter : CounterService) { }

  ngOnInit(): void {
  }

  addValue(){
    this.counter.addCounter(this.value);
    
  }

  subValue(){
    this.counter.subCounter(this.value);
  }
}
