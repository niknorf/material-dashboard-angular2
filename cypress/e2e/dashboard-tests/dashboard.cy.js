context("Dashboard tests", () => {
	it("Lets you check a checkbox", () => {
		cy.visit("#/dashboard");
		cy.get(".tasks").find("tr").eq(1).find(".form-check").click();
	});
});
