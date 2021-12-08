import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IBeer } from 'src/app/models/beer';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  @Input() beerList: IBeer[] = [];
  @Output() submitted = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {}

  submit(f:NgForm){
    this.submitted.emit(f.form.value.id);
  }
}
