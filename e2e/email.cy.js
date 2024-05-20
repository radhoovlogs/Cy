describe ('User',() =>{
    it('I cannot login with false credentials', () => {
        cy.once('uncaught:exception', () => false);
        cy.visit('https://www.saucedemo.com/');
        cy.get('#user-name').type('ana.doe');
        cy.get('#password').type('123456');
        cy.get('.submit-button').click();
        cy.get('.error-message-container.error').should('exist');

    })
})
