import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription,PartialObserver } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { IBeer } from 'src/app/models/beer';

@Component({
  selector: 'app-container-shop',
  templateUrl: './container-shop.component.html',
  styleUrls: ['./container-shop.component.scss']
})
export class ContainerShopComponent implements OnInit,OnDestroy {
  subscription!: Subscription;
  beerList :IBeer[] = [];
  selectedBeer! : IBeer;


  constructor(private beerService:AppService) { }

  ngOnInit(): void {
    this.subscription = this.beerService.getBeers().subscribe(
      data => this.beerList = data)
  }

  selectBeer(item: IBeer){
  this.beerService.getBeerById(item).subscribe
   (data => this.selectedBeer = data)
}

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }

}
