import { AppPage } from './app.po';
import {browser, by, logging} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  beforeAll(async (done) => {
    page = new AppPage();
    await page.navigateTo();
    await browser.waitForAngularEnabled(true);
    browser.driver.manage().window().setSize(1280, 1080);
    done();
  });

  it('should check pageElements',  async () => {
    expect(await page.getTitleText()).toEqual('Willkommen bei der PAXMATIC AG');
  });

  it('should click on processLink',  async () => {
    expect(await page.clickProcessLink()).toEqual('Prozesse');
    expect(await page.getTitleText()).toEqual('Willkommen bei der PAXMATIC AG');
  });


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
