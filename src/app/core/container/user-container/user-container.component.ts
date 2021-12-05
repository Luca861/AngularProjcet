import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { IUser } from '../../models/user-interface';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {
  userOn:boolean = false;
  userDetail!:IUser;

  myUsers: IUser[] = this.users.users;

  constructor(private users: UserService) { }

  ngOnInit(): void {
  }

  showUser(value: IUser){
    this.userOn = true;
    this.userDetail = value;
  }

  hideDetail(value:boolean){
    this.userOn = value;
  }
}
