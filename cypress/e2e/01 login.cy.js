import * as objects from './objects/page.js';

let username="standard_user";
let password="secret_sauce";
let needlogout=1;

before(()=>{
  cy.config("defaultCommandTimeout",20000);
})

describe('Sauce Demo Login', () => {
  beforeEach(()=>{
    cy.visit(objects.baseURL);
    cy.get(objects.input_username, { timeout: 20000 }).should('be.visible');
    cy.get(objects.input_username).type(username);
    cy.get(objects.input_password).type(password);
    cy.get(objects.button_login).click();
  })

  afterEach(()=>{
    if(needlogout==1){
      cy.get(objects.menu).click();
      cy.get(objects.logout).click();
    }
  })

  it('Success login standar user', () => {
    cy.get(objects.title_app, { timeout: 20000 }).should('be.visible');

    //untuk next login
    username="locked_out_user";
    needlogout=0;
  })
  
  it('Failed login locked out user', () => {
    cy.contains('h3','locked out').should("be.visible");
    
    //untuk next login
    username="standard_user";
    password="password123";
    needlogout=0;
  })

  it('Failed login wrong password', () => {
    cy.contains('h3','password do not match').should("be.visible");
  })
})