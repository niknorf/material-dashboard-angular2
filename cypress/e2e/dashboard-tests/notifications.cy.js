context("Notification tests", () => {
	// it("Correctly links to notifications page", () => {
	// 	cy.visit("/dashboard");
	// 	cy.get(".sidebar-wrapper").contains("Notifications").click();
	// 	cy.url().should("include", "/notifications");
	// });

	// it("Correctly displays notification after the button press", () => {
	// 	cy.visit("/notifications");
	// 	cy.get("button").contains("Top Left").click();
	// 	cy.get("div[data-notify='container']").should("exist");
	// });

	it("Triggers popover on click", () => {
		cy.visit("/notifications");
		cy.get(".navbar").find(".nav-item.dropdown").click();
		cy.get(".dropdown-menu").should("exist");
	});
});
