import { Injectable } from '@angular/core';
import { USER } from './core/mock-data/mock-data';
import { IUser } from './core/models/user-interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: IUser[] = USER;

  constructor() { }
}
