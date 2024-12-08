import * as objects from './objects/page.js';

let username="standard_user";
let password="secret_sauce";

before(()=>{
  cy.config("defaultCommandTimeout",20000);
})

describe('SauceDemo Product Detail', () => {
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

  it('Success browsing first item', () => {
    cy.get(objects.first_product).then(($data)=>{
      const title=$data.text();
      cy.get(objects.first_product).click();
      cy.get('div[class="inventory_details_name large_size"]').should("have.text",title);
      })
  })
})

