# SauceDemo smoke tests

Smoke tests for [SauceDemo](https://www.saucedemo.com/) using Cypress and JavaScript.

## Requirements

- Node.js 18 or later
- npm

## Setup

```bash
npm install
```

## Run the tests

Run headlessly:

```bash
npm run cy:run
```

Open the Cypress interactive runner:

```bash
npm run cy:open
```

Run tests in a visible browser window:

```bash
npm run cy:run:headed
```

Run tests in Chrome (Chrome must be installed):

```bash
npm run cy:run:headed:chrome
```

## Coverage

- Successful login with the public SauceDemo `standard_user` / `secret_sauce` account.
- Rejection of an incorrect password.
- Required username and password validation.
- Display of all six inventory products.
- Sorting products from lowest to highest price.
- Opening a product details page.
- Adding a product to the cart.
- Removing a product from the cart.

## Technology choices

- **Cypress:** Chosen for its straightforward browser-based end-to-end testing and built-in assertions.
- **JavaScript:** Chosen for its concise syntax and direct support in Cypress, keeping the test setup simple.

## Author

Created by **Ximena Alvarez Morantes** with the assistance of AI (GPT-6 Luna), using **Visual Studio Code** and **GitHub Copilot**.
