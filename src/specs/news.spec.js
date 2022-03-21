import { AppPage } from "../page-objects";
import { App, News } from "../locators";
import { Chainers } from "../chainers";

describe("News: Click on news and change news page", () => {
  let appPage = null;

  beforeEach(() => {
    appPage = new AppPage();
    appPage.navigateTo();
  });

  it("should click on news card", () => {
    appPage.click(News.clickNewsIcon);
  });

  it.only("should change news page", () => {
    appPage.click(News.clickNextPage);
    appPage.waitUntil(2000);

    expect(appPage.should(News.child(3), Chainers.haveClass, "active"));

    appPage.click(News.clickPrevPage);
    appPage.waitUntil(2000);

    expect(appPage.should(News.child(1), Chainers.haveClass, "disabled"));

    appPage.click(News.clickNumberPage);
    appPage.waitUntil(2000);

    expect(appPage.should(News.child(4), Chainers.haveClass, "active"));
  });
});
