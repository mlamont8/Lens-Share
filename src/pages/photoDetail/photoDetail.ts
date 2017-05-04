import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-photoDetail',
  templateUrl: 'photoDetail.html'
})
export class PhotoDetail {
  open_at_index : any;

  constructor(public navCtrl: NavController, public params: NavParams) {
      // this.open_at_index = this.params.get('photo_index');
      console.log('photo_index', params.get('photo_index'));
  }

}
