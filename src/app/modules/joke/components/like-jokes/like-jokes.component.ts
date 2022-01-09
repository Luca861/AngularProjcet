import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-like-jokes',
  templateUrl: './like-jokes.component.html',
  styleUrls: ['./like-jokes.component.scss']
})
export class LikeJokesComponent implements OnInit {
  @Input() likeJokes?:string[];
  constructor() { }

  ngOnInit(): void {
  }

}
