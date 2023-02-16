context("Test", () => {
	beforeEach(() => {
		cy.visit("http://localhost:4200");
	});

	it("Correct h4 text", () => {
		cy.get(".card-chart .card-title").should("contain.text", "Daily Sales");
	});
});
