import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AppService {
  content = {
    welcome: {
      es: 'Bienvenido',
      en: 'Welcome'
    },
    running: {
      es: ' funciona!',
      en: ' app is running!'
    }
  }
  language = 'en';
  constructor() { }

  changeLanguage() {
    if (this.language === 'es') {
      this.language = 'en';
    } else {
      this.language = 'es';
    }
  }

}
