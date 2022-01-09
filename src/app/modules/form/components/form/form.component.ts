import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimalService } from 'src/app/services/animal.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public myForm = this.fb.group({
    category : ['',[Validators.required]],
    number : [0,[Validators.required]]
  })

  constructor (private readonly test:AnimalService, private fb:FormBuilder,private readonly router: Router) { }

  ngOnInit(): void {}

  submit() {
    this.test.getImages(this.myForm.value.category, this.myForm.value.number);
    this.router.navigate(['/home/gallery'])
  }

}
