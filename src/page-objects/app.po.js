export class AppPage {
  navigateTo() {
    cy.visit("https://www.radiozum.md/");
  }

  should(locator, chainers, value = null) {
    cy.get(locator).should(chainers, value);
  }

  click(locator) {
    cy.get(locator).click();
  }

  clickByIndex(locator, index) {
    cy.get(locator).eq(index).click();
  }

  waitUntil(seconds) {
    cy.wait(seconds);
  }
}
