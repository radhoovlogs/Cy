describe('Storia website', () => {
  it('should send a reset password email', () => {
    cy.visit('https://www.storia.ro/ro/login/reset');

    cy.get('#onetrust-accept-btn-handler').click();
    cy.get('#reset-email').type('teach-they@ihl97m9d.mailosaur.net');
    cy.get('.css-u8gy83').click();

    cy.wait(7000);

    cy.mailosaurListMessages("ihl97m9d")
    .then((result) => {
      const email = result.items[0];
      expect(email.subject).to.equal("Codul pentru schimbarea parolei");
      return cy.mailosaurGetMessageById(email.id);
    })
    .then((email) => {
      cy.log(email.html.body);
      expect(email.html.body).to.contain("<title>Am primit o solicitare de resetare a parolei contului tau</title>");
    });
  })
})
