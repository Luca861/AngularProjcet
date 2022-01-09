import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-current-joke',
  templateUrl: './current-joke.component.html',
  styleUrls: ['./current-joke.component.scss']
})
export class CurrentJokeComponent implements OnInit {
  @Output() like = new EventEmitter<string>();
  @Output() dislike = new EventEmitter<string>();

  currentJoke$! :Observable<string>;

  constructor(private readonly jokeService:JokeService) { }

  ngOnInit(): void {
    this.currentJoke$ = this.jokeService.getJoke()
  }

}
