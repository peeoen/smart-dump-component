import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TravelPlace } from '../models/tarvel-place';

@Injectable({providedIn: 'root'})
export class HttpService {

    constructor(private httpClient: HttpClient) { }

mock: TravelPlace[] = [
    {
      image: 'https://www.planetware.com/photos-large/THA/phuket-island.jpg',
      service: 50,
      travel: 25,
      title: 'Phuket'
    },
    {
      image: 'https://cdn.getyourguide.com/img/tour_img-1016616-148.jpg',
      service: 12,
      travel: 10,
      title: 'Krabi'
    },
    {
      image: 'http://static.asiawebdirect.com/m/phuket/portals/thaiwave-com/shared/teasersL/khaoyai/palio/teaserMultiLarge/imageHilight/khaoyai_11.jpg',
      service: 14,
      travel: 7,
      title: 'Khao Yai'
    }
  ];



  async callApi() {
    return await of(this.mock).pipe(
      delay(500)
    ).toPromise();
  }



}


