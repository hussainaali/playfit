import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  appPages = [
    {
      title: 'Signin',
      url: 'fire-signin',
      icon: 'flame'
    },
    {
      title: 'Signup',
      url: 'fire-signup',
      icon: 'flame'
    },
    {
      title: 'Forgot',
      url: 'fire-forgot',
      icon: 'flame'
    },
    {
      title: 'Profile',
      url: 'fire-profile',
      icon: 'flame'
    }
  ];  
  loggedIn = false;
  dark = false;
  
  constructor() {}
}
