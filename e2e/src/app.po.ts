import { browser, by, element } from 'protractor'

export class AppPage {
  getParagraphText(): any {
    return element(by.css('app-root h1')).getText()
  }
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>
  }

  getTitleText() {
    return element(by.css('app-root mat-toolbar span')).getText() as Promise<string>
  }
}
