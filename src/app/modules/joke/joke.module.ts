import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesContainerComponent } from './pages/jokes-container/jokes-container.component';
import { CurrentJokeComponent } from './components/current-joke/current-joke.component';
import { LikeJokesComponent } from './components/like-jokes/like-jokes.component';
import { DislikeJokesComponent } from './components/dislike-jokes/dislike-jokes.component';
import { HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    JokesContainerComponent,
    CurrentJokeComponent,
    LikeJokesComponent,
    DislikeJokesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class JokeModule { }
