import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup } from '@angular/forms';
import { Advertisement } from '../advertisement';
import { ErollmenntService } from '../enrollment.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-advertisement',
  templateUrl: './update-advertisement.component.html',
  styleUrls: ['./update-advertisement.component.css'],
})
export class UpdateAdvertisementComponent implements OnInit {
  category = ['Furniture', 'Hardware', 'Mobile'];

  submitted = false;

  editAdvertisement = new FormGroup({
    title: new FormControl(''),
    name: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private _enrollmentService: ErollmenntService,
    private router: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.router.snapshot.params.title);

    this._enrollmentService
      .getCurrentData(this.router.snapshot.params.title)
      .subscribe((result:any) => {
        this.editAdvertisement = new FormGroup({
          title: new FormControl(result['title']),
          name: new FormControl(result['name']),
          category: new FormControl(result['category']),
          description: new FormControl(result['description']),
        });
        
      });
  }
}
