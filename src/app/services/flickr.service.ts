import {Injectable} from "@angular/core";
import{Http}  from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class FlickrService{
  http: any;
  baseUrl: string;
  method: string;
  endUrl: string;

  constructor(http:Http){
    this.http = http;
    this.baseUrl = 'https://api.flickr.com/services/rest?method=';
    this.endUrl = '&api_key=b76d9d315036b7d07b50af5f4240135c&format=json&per_page=20&nojsoncallback=1'
  }

  getTrending(){
    this.method = 'flickr.interestingness.getList'
    return this.http.get(this.baseUrl+this.method+this.endUrl)
      .map(res => res.json());

  }

}
