import { AppPage } from "../page-objects";

describe("App: Loadpage", () => {
  let appPage = null;

  beforeEach(() => {
    appPage = new AppPage();
    appPage.navigateTo();
  });

  it("Should be visible main page", () => {
    expect(appPage.getContent());
  });
});
