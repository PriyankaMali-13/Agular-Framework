import { Component, OnInit } from '@angular/core';
import { ErollmenntService } from '../enrollment.service';

@Component({
  selector: 'app-list-advertisement',
  templateUrl: './list-advertisement.component.html',
  styleUrls: ['./list-advertisement.component.css'],
})
export class ListAdvertisementComponent implements OnInit {
  listData: any;
  constructor(private _enrollmentService: ErollmenntService) {}

  ngOnInit(): void {
    this._enrollmentService.getPost().subscribe((result) => {
      this.listData = result;
      console.log(this.listData);
    });
  }
}
