import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  numProperties : any = [];
  keys :string[] = [];


  constructor(private readonly http: AppService) { }

  ngOnInit(): void {

  this.http.getAll()
  .subscribe(data => this.keys = Object.keys(data));

  this.http.getAll()
  .subscribe(data => this.numProperties = Object.values(data))


}

}
