describe('login page', () => {
  beforeEach(()=>{
    cy.visit('/')
  })

  it('should login with valid email and password', () => {
    cy.viewport(1366, 776);
    cy.login('test@test.com', 'test')
    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  })

  it('should not login with empty email', () => {
    cy.viewport(375, 667);
    cy.login(null, 'test')
    cy.get('#mail').then((elements)=>{
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('should not login with empty password', () => {
    cy.login('test@test.com', null)
    cy.get('#pass').then((elements)=>{
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
})

