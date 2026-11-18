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