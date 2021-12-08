import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { IBeer } from 'src/app/models/beer';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  beerList :IBeer[] = [];
  subscription! : Subscription;

  constructor(private beerService:AppService) { }
  @Output() submitted = new EventEmitter<IBeer>();
  ngOnInit(): void {
    this.subscription = this.beerService.getBeers().subscribe(
      data => this.beerList = data)
    }


  submit(f:NgForm){
    this.submitted.emit({...f.value});
      }

}
