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

  it("should book add to Favorites", () => {
    cy.login('test@test.com', 'test');
    cy.addBook(
      "Триумфальная арка",
      "Пронзительная история любви всему наперекор, любви, приносящей боль, но и дарующей бесконечную радость. Место действия - Париж накануне Второй мировой войны. Герой - беженец из Германии, без документов, скрывающийся и от французов, и от нацистов, хирург, спасающий человеческие жизни.",
      "Ремарк Эрих Мария"
    );
    cy.contains("Триумфальная арка").as("selectedBook");
    cy.get("@selectedBook")
      .find("button")
      .invoke("text")
      .then((text) => {
        if (text === "Add to favorite") {
          cy.get("@selectedBook").find("button").click();
        }
      });
    cy.contains("Favorites").click();
    cy.contains("Ремарк Эрих Мария").should("be.visible");
  });

  it("should book delete with Favorites", () => {
    cy.login('test@test.com', 'test');
    cy.deleteBook("Триумфальная арка");
    cy.contains("Please add some book to favorit on home page!").should(
      "be.visible"
    );
  });
})

