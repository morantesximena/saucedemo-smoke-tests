describe('SauceDemo inventory and cart smoke tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="title"]').should('have.text', 'Products');
  });

  it('displays all six products in the inventory', () => {
    cy.get('[data-test="inventory-item"]').should('have.length', 6);
  });

  it('sorts products from lowest to highest price', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi');

    cy.get('[data-test="inventory-item-price"]')
      .first()
      .should('have.text', '$7.99');
    cy.get('[data-test="inventory-item-price"]')
      .last()
      .should('have.text', '$49.99');
  });

  it('opens the details page for a product', () => {
    cy.contains('[data-test="inventory-item-name"]', 'Sauce Labs Backpack').click();

    cy.url().should('include', '/inventory-item.html?id=4');
    cy.get('[data-test="inventory-item-name"]').should(
      'have.text',
      'Sauce Labs Backpack',
    );
    cy.get('[data-test="inventory-item-price"]').should('have.text', '$29.99');
  });

  it('adds a product to the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="shopping-cart-badge"]').should('have.text', '1');
    cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible');
  });

  it('removes a product from the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="shopping-cart-link"]').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    cy.get('[data-test="shopping-cart-badge"]').should('not.exist');
    cy.get('.cart_item').should('not.exist');
  });
});
