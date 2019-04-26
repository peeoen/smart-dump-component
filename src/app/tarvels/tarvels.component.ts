import { Component, OnInit } from '@angular/core';
import { TravelPlace } from '../models/tarvel-place';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-tarvels',
  templateUrl: './tarvels.component.html',
  styleUrls: ['./tarvels.component.scss']
})
export class TarvelsComponent implements OnInit {

  tarvels: TravelPlace[]  = [];
  constructor(private httpService: HttpService) { }

  ngOnInit() {
  }

  async search() {
    this.tarvels = await this.httpService.callApi();
  }



}
