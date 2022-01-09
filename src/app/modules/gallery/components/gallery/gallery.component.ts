import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  animalImg$! : Observable<string[]>;

  constructor(private readonly galleryService:AnimalService) { }

  ngOnInit(): void {
  this.animalImg$ = this.galleryService.animalImg$;
  }

}


