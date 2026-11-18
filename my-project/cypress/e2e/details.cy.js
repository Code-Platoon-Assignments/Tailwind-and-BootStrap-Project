it('reads the id from the URL', () => {
    cy.visit('/character/22')
    cy.contains('h2', '#22')
})

it('shows the Character from the API', () => {
    cy.visit('/character/22')
    cy.contains('h2', 'Aqua Rick')
    cy.get('img[alt=Aqua Rick]').should('be.visible')
    cy.contains("Species: Humanoid")
})

it('shows a message for an unknown Character', () => {
    cy.visit('/character/0000')
    cy.contains('Character not found')
})

it('opens the details page from a card', () => {
    cy.visit('/')
    cy.get('input[name=nameField]').type('rick{enter}')
    cy.get('#22').should('be.visible').click()
    cy.location('pathname').should('eq', '/character/22')
    cy.contains('h2', 'Aqua Rick #22')
})


it('goes back with the Back button', () => {
    cy.visit('/')
    cy.get('input[name=nameField]').type('rick{enter}')
    cy.get('#22').contains('View this character').click()
    cy.location('pathname').should('eq', '/character/22')
    cy.get('button[aria-label="Go back"]').click()
    cy.location('pathname').should('eq', '/')
})

it('the browser Back button works too', () => {
    cy.visit('/')
    cy.get('input[name=nameField]').type('rick{enter}')
    cy.get('#22').contains('View this character').click()
    cy.location('pathname').should('eq', '/character/22')
    cy.go('back')
    cy.location('pathname').should('eq', '/')
})

it('logs in and goes home', () => {
    cy.visit('/login')
    cy.get('#username').type('john')
    cy.contains("button", 'Log In').click()
    cy.location('pathname').should('eq', '/login')
})

it('stays on the login page with an empty name', () => {
    cy.visit('/login')
    cy.contains('button', "Log In").click()
    cy.location('pathname').should('eq', '/login')
})