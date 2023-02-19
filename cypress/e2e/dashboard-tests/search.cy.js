context("Search tests", () => {
	// Fetches data from the Topcon API and saves it to the formats.json file, before all the tests
	before(() => {
		cy.request({
			url: "https://beta.mdc.topcon.com/v5/formats",
			headers: {
				accept: "application/json",
				api_key: "f3aa38b12d906de87f30f30e3d0ac616",
			},
		}).then((response) => {
			cy.writeFile("cypress/fixtures/formats.json", response.body);
		});
	});

	it("Lets you clear an input field", () => {
		cy.visit("/");
		cy.get("#navigation").find("input").type("test").clear();
	});

	after(() => {
		cy.log("Test log after all tests are done");
	});
});
