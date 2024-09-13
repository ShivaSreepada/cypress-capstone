describe('Product Search with Mocking', () => {
    beforeEach(() => {
      // Visit the products page
      cy.visit('https://automationexercise.com/products', {
        timeout: 10000
      });
    });
  
    it('should search for products and display results', () => {
      // Ensure the search box and button are visible
      cy.get('#search_product', { timeout: 10000 }).should('be.visible');
      cy.get('#submit_search', { timeout: 10000 }).should('be.visible');
  
      // Type a query into the search box and submit
      cy.get('#search_product').type('Blue Top');
      cy.get('#submit_search').click();
  
      // Wait for the page to update with search results
      // Adjust the timeout if necessary based on how long it takes for results to appear

    });
  });
  