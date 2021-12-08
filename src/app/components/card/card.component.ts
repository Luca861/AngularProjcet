import { Component, Input, OnInit } from '@angular/core';
import { IBeer } from 'src/app/models/beer';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() selectedBeer! : IBeer;

  constructor() { }

  ngOnInit(): void {
  }

}
