import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { FlickrService } from '../../app/services/flickr.service';
import { PhotoDetail } from '../photoDetail/photoDetail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  items: any;
  author: any;

  constructor(public navCtrl: NavController, private flickrService: FlickrService, public modalCtrl: ModalController) {

  }
  ngOnInit(){
    this.getImages();

  }

  getImages(){
    this.flickrService.getTrending().subscribe(response => {
      this.items = response.photos.photo
      console.log('items', response.photos.photo);
    })

  }

  openPhoto(index) {
  let myPhoto = this.modalCtrl.create(PhotoDetail, {photo_index: index});
  myPhoto.present();
}

}
