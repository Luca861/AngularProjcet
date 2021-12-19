import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppService } from '../app.service';
import { ITest } from '../shared/models/test-model';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, OnDestroy {
  subscription! : Subscription;
  numProperties : ITest[] = [];
  keys :string[] = [];


  constructor(private readonly http: AppService) { }

  ngOnInit(): void {

  this.subscription = this.http.getAll()
  .subscribe(data => {
    this.keys = Object.keys(data)
    this.numProperties = Object.values(data)
  });

}

ngOnDestroy(): void {
    this.subscription.unsubscribe;
}

}
