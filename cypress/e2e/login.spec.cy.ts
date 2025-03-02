describe('template spec', () => {

  it('Login as Normal user', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("nav button").click()
    cy.get("[data-cy='email']").type('test@test.com')
    cy.get("[data-cy='password']").type('test123')
    cy.get("form button").click()
    //cy.get('body').should('contains', "[data-cy='like']").eq(0)
  })

  it('Login as Admin user', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("nav button").click()
    cy.get("[data-cy='email']").type('admin@test.com')
    cy.get("[data-cy='password']").type('test123')
    cy.get("form button").click()
  })

  
})