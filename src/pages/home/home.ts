import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FlickrService } from '../../app/services/flickr.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;

  constructor(public navCtrl: NavController, private flickrService: FlickrService) {

  }
  ngOnInit(){
    this.getImages();
    console.log('oninit fired...')
  }

  getImages(){
    this.flickrService.getTrending().subscribe(response => {
      this.items = response.photos.photo
      console.log('items', response.photos.photo);
    })
  }

}
