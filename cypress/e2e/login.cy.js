describe('SauceDemo login smoke tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('logs in with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    cy.url().should('include', '/inventory.html');
    cy.get('[data-test="title"]').should('have.text', 'Products');
  });

  it('shows an error when the password is incorrect', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('incorrect_password');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and(
        'contain.text',
        'Username and password do not match any user in this service',
      );
  });

  it('requires a username', () => {
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Username is required');
  });

  it('requires a password', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="login-button"]').click();

    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Password is required');
  });
});
