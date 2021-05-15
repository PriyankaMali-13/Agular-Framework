import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Advertisement } from '../advertisement';
import { ErollmenntService } from '../enrollment.service';

@Component({
  selector: 'app-advertisement-form',
  templateUrl: './advertisement-form.component.html',
  styleUrls: ['./advertisement-form.component.css'],
})
export class AdvertisementFormComponent implements OnInit {
  category = ['Furniture', 'Hardware', 'Mobile'];

  submitted = false;

  addAdvertisement = new FormGroup({
    title: new FormControl(''),
    name: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private _enrollmentService: ErollmenntService) {}

  ngOnInit(): void {}
  createAd() {
    this._enrollmentService
      .addAdvert(this.addAdvertisement.value)
      .subscribe((result) => {
        this.submitted = true ;
        console.log(result);
      });
  }

  closeAlert() {
    this.submitted = false;
  }
}
