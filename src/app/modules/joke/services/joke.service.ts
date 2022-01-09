import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { interval, map, Observable, switchMap, timeout } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  response$!:Observable<string>;
  constructor(private readonly http:HttpClient) { }


  getJoke():Observable<string>{
    const params = new HttpParams().set('type','single');
    return this.response$ = interval(5000).pipe(
      switchMap(()=> this.http.get<{joke:string}>(`${environment.jokeApi}`,{params})),
      map(res => res.joke)
    )
  }
}
