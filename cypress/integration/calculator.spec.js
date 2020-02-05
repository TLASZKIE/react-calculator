describe("Calculator tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("can add two numbers", () => {
    cy.queryByText(/^1$/).click();
    cy.queryByText(/^\+$/).click();
    cy.queryByText(/^2$/).click();
    cy.queryByText(/^=$/).click();
    cy.displayShouldHaveText("3");
  });

  it("should find 4th prime", () => {
    cy.queryByText(/^4$/).click();
    cy.queryByText("Prime").click();
    cy.displayShouldHaveText("7");
  });

  it("should clear work properly", () => {
    cy.queryByText(/^9$/).dblclick();
    cy.queryByText("C").click();
    cy.displayShouldHaveText("0");
    cy.queryByText("C").should("not.exist");
  });
});
