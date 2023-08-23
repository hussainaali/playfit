import { Component } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  isModalOpen = false;
  swiperModules = [IonicSlides];

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  
  constructor() {}

}
