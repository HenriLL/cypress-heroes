describe('Login spec', () => {

  it('Login as Normal user', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("nav button").click()
    cy.get("[data-cy='email']").type('test@test.com')
    cy.get("[data-cy='password']").type('test123')
    cy.get("form button").click()
  })

  it('Login as Admin user', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("nav button").click()
    cy.get("[data-cy='email']").type('admin@test.com')
    cy.get("[data-cy='password']").type('test123')
    cy.get("form button").click()
    cy.contains('Create New Hero').should('be.visible')
  })

  it('Fail Login as Normal user', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("nav button").click()
    cy.get("[data-cy='email']").type('test@test.com')
    cy.get("[data-cy='password']").type('test1234')
    cy.get("form button").click()
    cy.get('body').should('contain', 'Invalid email or password')
    
  })

  it('Fail Login as Admin user', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("nav button").click()
    cy.get("[data-cy='email']").type('admin@test.com')
    cy.get("[data-cy='password']").type('test1234')
    cy.get("form button").click()
    cy.get('body').should('contain', 'Invalid email or password')
  })
  
})

describe('New Hero spec', () => {
  it('Create a New Hero', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("nav button").click()
    cy.get("[data-cy='email']").type('admin@test.com')
    cy.get("[data-cy='password']").type('test123')
    cy.get("form button").click()
    cy.contains('Create New Hero').should('be.visible')
    cy.get("[href='/heroes/new']").click()
    cy.location('pathname').should('equal', '/heroes/new')
    cy.get("[data-cy='nameInput']").type("Ice Man")
    cy.get("[data-cy='priceInput']").type("100")
    cy.get("[data-cy='fansInput']").type("50")
    cy.get("[data-cy='savesInput']").type("25")
    cy.get("select").select(1).invoke("val")
    cy.get("[data-cy='avatarFile']").selectFile('boom-mind-blown.gif')
    cy.get("form button").click()
  })

})

describe('Edit Hero spec', () => {
  it('Edit a Hero', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("nav button").click()
    cy.get("[data-cy='email']").type('admin@test.com')
    cy.get("[data-cy='password']").type('test123')
    cy.get("form button").click()
    cy.get("[data-cy='pencil']").eq(0).click()
    cy.location('pathname').should('equal', '/heroes/1/edit')
    cy.get("[data-cy='nameInput']").clear().type("Strenght Man")
    cy.get("[data-cy='priceInput']").clear().type("100")
    cy.get("[data-cy='fansInput']").clear().type("50")
    cy.get("[data-cy='savesInput']").clear().type("25")
    cy.get("select").select(2).invoke("val")
    cy.get("[data-cy='avatarFile']").selectFile('rashid1.jpg')
    cy.get("form button").click()
  })

})

describe('Like spec', () => {
  it('Like', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("nav button").click()
    cy.get("[data-cy='email']").type('admin@test.com')
    cy.get("[data-cy='password']").type('test123')
    cy.get("form button").click()
    cy.get("[data-cy='like']").eq(2).click()
  })

})

describe('Hire spec', () => {
  it('Hire a Hero', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("nav button").click()
    cy.get("[data-cy='email']").type('admin@test.com')
    cy.get("[data-cy='password']").type('test123')
    cy.get("form button").click()
    cy.get("[data-cy='money']").eq(3).click()
    cy.contains('Hire Hero?')
    cy.contains('The Librarian')
    cy.get("button.text-white").eq(1).click()
  })

})

describe('Delete spec', () => {
  it('Delete a Hero', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("nav button").click()
    cy.get("[data-cy='email']").type('admin@test.com')
    cy.get("[data-cy='password']").type('test123')
    cy.get("form button").click()
    cy.get("[data-cy='trash']").eq(5).click()
    cy.contains('Delete Hero?')
    cy.contains('Are you sure you want to delete this hero?')
    cy.contains('Collect Call Paul')
    cy.get("button.bg-red-600").click()
  })

})

describe('Delete on edit tab spec', () => {
  it('Delete a Hero on edit tab', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get("nav button").click()
    cy.get("[data-cy='email']").type('admin@test.com')
    cy.get("[data-cy='password']").type('test123')
    cy.get("form button").click()
    cy.get("[data-cy='pencil']").eq(4).click()
    cy.location('pathname').should('equal', '/heroes/5/edit')
    cy.get("[type='button']").click()
    cy.contains('Delete Hero?')
    cy.contains('Are you sure you want to delete this hero?')
    cy.contains('Mr Angular')
    cy.get("button.bg-red-600").click({force: true,  multiple: true })
  })

})
