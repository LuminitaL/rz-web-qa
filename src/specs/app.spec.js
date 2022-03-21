import { AppPage } from "../page-objects";
import { App } from "../locators";
import { Chainers } from "../chainers";

describe("App: Loadpage", () => {
  let appPage = null;

  beforeEach(() => {
    appPage = new AppPage();
    appPage.navigateTo();
  });

  it("should be visible main page", () => {
    expect(appPage.should(App.content, Chainers.beVisible));
  });
});
