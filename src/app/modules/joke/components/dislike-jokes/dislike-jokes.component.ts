import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dislike-jokes',
  templateUrl: './dislike-jokes.component.html',
  styleUrls: ['./dislike-jokes.component.scss']
})
export class DislikeJokesComponent implements OnInit {
  @Input() dislikeJokes? : string[];

  constructor() { }

  ngOnInit(): void {
  }

}
