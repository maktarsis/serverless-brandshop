import { browser } from 'protractor';

export class AppPage {
  public navigateTo() {
    return browser.get('/');
  }
}
