# SauceDemo login smoke tests

Smoke tests for the login flow at [SauceDemo](https://www.saucedemo.com/) using Cypress and JavaScript.

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

## Coverage

- Successful login with the public SauceDemo `standard_user` / `secret_sauce` account.
- Rejection of an incorrect password.
- Required username and password validation.
