import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../models/user-interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  @Input() user!:IUser[];
  @Output() showDetail = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

  showDetailOn(user :IUser){
    this.showDetail.emit(user);
  }

}
