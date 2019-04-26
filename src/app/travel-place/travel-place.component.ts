import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel-place',
  templateUrl: './travel-place.component.html',
  styleUrls: ['./travel-place.component.scss']
})
export class TravelPlaceComponent implements OnInit {


  @Input() image: string;
  @Input() service: number;
  @Input() travel: number;
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
