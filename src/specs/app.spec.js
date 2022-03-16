import { AppPage } from "../page-objects";
import { App } from "../locators";

describe("App: Loadpage", () => {
  let appPage = null;

  beforeEach(() => {
    appPage = new AppPage();
    appPage.navigateTo();
  });

  it("should be visible main page", () => {
    expect(appPage.shouldBeVisible(App.content));
  });
});
