export class StreamPage {
  notEqToText(locator, title) {
    cy.get(locator).then(($el) => {
      const text = $el.text();

      expect(text).to.not.eq(title);
    });
  }
}
