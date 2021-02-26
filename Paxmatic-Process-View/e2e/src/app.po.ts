import { browser, by, element } from 'protractor';


const homebutton = by.xpath('//app-root/div[@class=\'main\']/div[@class=\'content\']/app-home//h1[.=\'Willkommen bei der PAXMATIC AG\']');
const processLink = by.xpath('//app-root/div[@class=\'main\']//app-navbar//a[@href=\'/home/basisprozesse\']')


export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText(): Promise<string>  {
    return element(homebutton).getText() as Promise<string>;
  }

  getProcessLinkLabel(): Promise<string> {
    return element(processLink).getText() as Promise<string>;
  }


  async clickProcessLink(): Promise<any> {
    const link = await element(processLink);
    return link.click();
  }
}

