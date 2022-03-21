import { AppPage, StreamPage } from "../page-objects";
import { Streams } from "../locators";
import { Chainers } from "../chainers";

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
    appPage.click(Streams.play);

    expect(appPage.should(Streams.stop, Chainers.beVisible));

    streamPage.notEqToText(Streams.songTitle, "Radio Zum 1");
  });

  it("should stop stream", () => {
    appPage.waitUntil(7000);
    appPage.click(Streams.play);
    appPage.waitUntil(7000);
    appPage.click(Streams.stop);

    streamPage.notEqToText(Streams.songTitle, "Radio Zum 1");
  });

  it("should play prev stream", () => {
    appPage.waitUntil(7000);
    appPage.click(Streams.prev);

    expect(appPage.should(Streams.stop, Chainers.beVisible));

    streamPage.notEqToText(Streams.songTitle, "Radio Zum 1");
  });

  it("should play next stream", () => {
    appPage.waitUntil(7000);
    appPage.click(Streams.next);

    expect(appPage.should(Streams.stop, Chainers.beVisible));

    streamPage.notEqToText(Streams.songTitle, "Radio Zum 1");
  });

  it("should click on Radio Zum 2", () => {
    appPage.clickByIndex(Streams.radioStream, 1);
    appPage.waitUntil(7000);

    expect(appPage.should(Streams.stop, Chainers.beVisible));
  });

  it("should click on Radio Zum 3", () => {
    appPage.clickByIndex(Streams.radioStream, 2);
    appPage.waitUntil(7000);

    expect(appPage.should(Streams.stop, Chainers.beVisible));
  });

  it("should click on Radio Zum 1", () => {
    appPage.clickByIndex(Streams.radioStream, 0);
    appPage.waitUntil(7000);

    expect(appPage.should(Streams.stop, Chainers.beVisible));
  });

  it("Click instagram and facebook icon", () => {
    appPage.click(Streams.ig.rz1);
    appPage.click(Streams.fb.rz1);
    appPage.click(Streams.ig.rz2);
    appPage.click(Streams.fb.rz2);
    appPage.click(Streams.ig.rz3);
    appPage.click(Streams.fb.rz3);
  });
});
