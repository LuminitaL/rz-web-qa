export class AppPage {
  navigateTo() {
    cy.visit("https://www.radiozum.md/");
  }

  shouldBeVisible(locator) {
    cy.get(locator).should("be.visible");
  }

  clickOnButton(locator) {
    cy.get(locator).click();
  }

  clickOnButtonByIndex(locator, index) {
    cy.get(locator).eq(index).click();
  }

  waitUntil(seconds) {
    cy.wait(seconds);
  }
}
