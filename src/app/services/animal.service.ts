import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  animalImg$! : Observable<string[]>;


  constructor(private readonly http:HttpClient) { }

  getImages(category:string, number:number){
    const params = new HttpParams().set('count', number)
    this.animalImg$ = this.http.get<string[]>(`${environment.animalApi}${category}`,{params})
    console.log(this.animalImg$);
  }




}

