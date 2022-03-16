import { AppPage, StreamPage } from "../page-objects";
import { Streams } from "../locators";

describe("Streams: Click play, stop, next and back button", () => {
  let appPage = null;
  let streamPage = null;

  beforeEach(() => {
    appPage = new AppPage();
    streamPage = new StreamPage();

    appPage.navigateTo();
  });

  it("should start stream", () => {
    appPage.clickOnButton(Streams.play);

    expect(appPage.shouldBeVisible(Streams.stop));

    streamPage.notEqToText(Streams.songTitle, "Radio Zum 1");
  });

  it("should stop stream", () => {
    appPage.clickOnButton(Streams.play);
    appPage.clickOnButton(Streams.stop);

    streamPage.notEqToText(Streams.songTitle, "Radio Zum 1");
  });

  it("should play prev stream", () => {
    appPage.clickOnButton(Streams.prev);

    expect(appPage.shouldBeVisible(Streams.stop));

    streamPage.notEqToText(Streams.songTitle, "Radio Zum 1");
  });

  it("should play next stream", () => {
    appPage.clickOnButton(Streams.next);

    expect(appPage.shouldBeVisible(Streams.stop));

    streamPage.notEqToText(Streams.songTitle, "Radio Zum 1");
  });
});
