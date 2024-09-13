describe('User Login/Logout', () => {
    it('should handle valid and invalid login attempts, and allow logout', () => {
      cy.visit('https://automationexercise.com/login');

      
      // Test invalid login
      cy.get('.login-form [data-qa="login-email"]').type('shiva841h856@anymail.com');
      cy.get('.login-form [data-qa="login-password"]').type('hello');
      cy.get('.login-form [data-qa="login-button"]').click();
      cy.get('.login-form').should('contain', 'Your email or password is incorrect!');

      // Test valid login
      cy.get('.login-form [data-qa="login-email"]').clear().type('shiva1302@anymail.com');
      cy.get('.login-form [data-qa="login-password"]').clear().type('Shiva1302');
      cy.get('.login-form [data-qa="login-button"]').click();
      cy.get('.features_items').should('be.visible'); // Verify successful login
  

  
      // Log out
      cy.get('a').contains('Logout').click();
      
      cy.get('.login-form').should('be.visible'); // Verify redirected to login page
    });
  });