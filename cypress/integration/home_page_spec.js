/// <reference types="cypress"/>

//testing-methods
import "@testing-library/cypress/add-commands";

describe("Youtube Clone", () => {
  beforeEach(() => {
    // cy.intercept("GET", /(mostPopular)/g, {
    //   fixture: "popular.json",
    // }).as("getMostPopular");
    cy.visit("/");
  });

  it("renders", () => {
    cy.findByText("Youtube").should("exist");
  });

  it("display most popular videos first", () => {
    cy.findByText("YoungBoy Never Broke Again").should("exist");
  });
});
