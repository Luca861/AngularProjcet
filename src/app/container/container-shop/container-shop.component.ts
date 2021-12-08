import { Component, OnInit } from '@angular/core';
import { Subscription,PartialObserver } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { IBeer } from 'src/app/models/beer';

@Component({
  selector: 'app-container-shop',
  templateUrl: './container-shop.component.html',
  styleUrls: ['./container-shop.component.scss']
})
export class ContainerShopComponent implements OnInit {
  subscription!: Subscription;
  beerList :IBeer[] = [];
  selectedBeer! : IBeer;


  constructor(private beerService:AppService) { }

  ngOnInit(): void {
    this.subscription = this.beerService.getBeers().subscribe(
      data => this.beerList = data)
  }

  selectBeer(id : number){
  const observer : PartialObserver<IBeer> = {
   next : (birra) => {
     this.selectedBeer = birra;
   }
  }
   this.beerService.getBeerById(id).subscribe(observer);
   }
}
