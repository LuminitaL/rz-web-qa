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
    appPage.waitUntil(7000);
    appPage.clickOnButton(Streams.play);

    expect(appPage.shouldBeVisible(Streams.stop));

    streamPage.notEqToText(Streams.songTitle, "Radio Zum 1");
  });

  it("should stop stream", () => {
    appPage.waitUntil(7000);
    appPage.clickOnButton(Streams.play);
    appPage.waitUntil(7000);
    appPage.clickOnButton(Streams.stop);

    streamPage.notEqToText(Streams.songTitle, "Radio Zum 1");
  });

  it("should play prev stream", () => {
    appPage.waitUntil(7000);
    appPage.clickOnButton(Streams.prev);

    expect(appPage.shouldBeVisible(Streams.stop));

    streamPage.notEqToText(Streams.songTitle, "Radio Zum 1");
  });

  it("should play next stream", () => {
    appPage.waitUntil(7000);
    appPage.clickOnButton(Streams.next);

    expect(appPage.shouldBeVisible(Streams.stop));

    streamPage.notEqToText(Streams.songTitle, "Radio Zum 1");
  });

  it("should click on Radio Zum 2", () => {
    appPage.clickOnButtonByIndex(Streams.radioStream, 1);
    appPage.waitUntil(7000);

    expect(appPage.shouldBeVisible(Streams.stop));
  });

  it("should click on Radio Zum 3", () => {
    appPage.clickOnButtonByIndex(Streams.radioStream, 2);
    appPage.waitUntil(7000);

    expect(appPage.shouldBeVisible(Streams.stop));
  });

  it("should click on Radio Zum 1", () => {
    appPage.clickOnButtonByIndex(Streams.radioStream, 0);
    appPage.waitUntil(7000);

    expect(appPage.shouldBeVisible(Streams.stop));
  });

  it("Click instagram and facebook icon", () => {
    appPage.clickOnButton(Streams.clickOnRadioZum1InstagramIcon);
    appPage.clickOnButton(Streams.clickOnRadioZum1FacebookIcon);
    appPage.clickOnButton(Streams.clickOnRadioZum2InstagramIcon);
    appPage.clickOnButton(Streams.clickOnRadioZum2FacebookIcon);
    appPage.clickOnButton(Streams.clickOnRadioZum3InstagramIcon);
    appPage.clickOnButton(Streams.clickOnRadioZum3FacebookIcon);
  });
});
