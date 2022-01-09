import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './jokes-container.component.html',
  styleUrls: ['./jokes-container.component.scss'],
})
export class JokesContainerComponent implements OnInit {
  likeJokes? = ['Joke piaciuti'];
  dislikeJokes? = ['Joke non piaciuti'];
  constructor() {}

  ngOnInit(): void {}

  like(joke: string) {
    this.likeJokes?.push(joke);
  }

  dislike(joke: string) {
    this.dislikeJokes?.push(joke);
  }
}
