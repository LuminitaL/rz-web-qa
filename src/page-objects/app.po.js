export class AppPage {
  navigateTo() {
    cy.visit("https://www.radiozum.md/");
  }

  shouldBeVisible(locator) {
    cy.get(locator).should("be.visible");
  }

  clickOnButton(locator) {
    cy.wait(7000).get(locator).click();
  }
}
