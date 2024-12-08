import * as objects from './objects/page.js';

let username="standard_user";
let password="secret_sauce";

before(()=>{
  cy.config("defaultCommandTimeout",20000);
})

describe('SauceDemo Add To Cart', () => {
  beforeEach(()=>{
    cy.visit(objects.baseURL);
    cy.get(objects.input_username, { timeout: 20000 }).should('be.visible');
    cy.get(objects.input_username).type(username);
    cy.get(objects.input_password).type(password);
    cy.get(objects.button_login).click();
  })

  afterEach(()=>{
    cy.get(objects.back_to_products).click();
    cy.get(objects.menu).click();
    cy.get(objects.logout).click();
  })

  it('Success add to cart', () => {
    cy.get(objects.first_product).then(($data)=>{
      cy.get(objects.first_product).click();
      cy.get(objects.add_to_cart).click();
      cy.get(objects.shopping_cart).should("have.text","1");
    })
  })
})

