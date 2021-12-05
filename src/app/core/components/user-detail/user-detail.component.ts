import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../models/user-interface';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Output() hideDetail = new EventEmitter<boolean>();
  @Input() user!:IUser;

  constructor() { }

  ngOnInit(): void {
  }

}
