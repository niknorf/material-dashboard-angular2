module.exports = {
	projectId: "o5in45",

	e2e: {
		specPattern: "cypress/e2e/dashboard-tests",
		baseUrl: "http://localhost:4200",
	},

	component: {
		devServer: {
			framework: "angular",
			bundler: "webpack",
		},
		specPattern: "**/*.cy.ts",
	},
};
