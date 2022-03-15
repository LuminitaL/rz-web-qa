import { App } from "../locators";

export class AppPage {
  navigateTo() {
    cy.visit("https://www.radiozum.md/");
  }

  getContent() {
    cy.get(App.content).should("be.visible");
  }
}
