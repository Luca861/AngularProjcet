import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

numProperties : number = 0;

constructor( private readonly http:HttpClient) {}

getAll(){
  return this.http.get(`${environment.apiUrl}`);
}
}














