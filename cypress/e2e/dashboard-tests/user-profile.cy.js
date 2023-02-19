context("User profile tests", () => {
	beforeEach(() => {
		cy.visit("/#/user-profile");
	});

	it("The correct name text exists", () => {
		cy.findAllByText("Alec Thompson").should("exist");
	});

	it("Types in the name input", () => {
		cy.get('input[data-placeholder="Username"]').type("testuser");
	});

	it("Should have class mat-focused when clicked", () => {
		cy.get(".card-body")
			.find(".mat-form-field")
			.eq(3)
			.click()
			.should("have.class", "mat-focused");
	});

	it("Inputs user data from fixture", () => {
		cy.fixture("user").then((user) => {
			cy.get('input[data-placeholder="Username"]').type(user.username);
			cy.get('input[data-placeholder="Email address"]').type(user.email);
			cy.get('input[data-placeholder="First Name"]').type(user.firstName);
			cy.get('input[data-placeholder="Last Name"]').type(user.lastName);
		});
	});
});
