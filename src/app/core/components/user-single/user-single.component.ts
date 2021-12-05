import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../models/user-interface';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  @Input() person!:IUser;
  
  @Output() showUser = new EventEmitter<IUser>();

  constructor() { }

  ngOnInit(): void {
  }

}
