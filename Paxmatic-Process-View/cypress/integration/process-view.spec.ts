import '@4tw/cypress-drag-drop';


describe('end2end tests for process-View', () => {

it('should execute DB-Script', () => {
  cy.exec('npm run db');
});

it('loads examples', () => {
  cy.visit('/');
});

it('should open basic-process',  () => {
  cy.get('.link').click();
  cy.get('h2').contains('Geschäftsprozesse');
});

it('should check it basic-process-elements are visible', () => {
  cy.get('div:nth-of-type(1) > .cdk-drag.mat-card  label').contains('Projekt');
  cy.get('div:nth-of-type(2) > .cdk-drag.mat-card label').contains('Admin');
  cy.get('div:nth-of-type(3) > .cdk-drag.mat-card label').contains('Service');
});

it('should check if basic-process color are correct', () => {
  cy.get('div:nth-of-type(1) > .cdk-drag.mat-card').should('have.css', 'background-color', 'rgb(0, 128, 0)');
  cy.get('div:nth-of-type(2) > .cdk-drag.mat-card').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  cy.get('div:nth-of-type(3) > .cdk-drag.mat-card').should('have.css', 'background-color', 'rgb(0, 0, 255)');
});

it('should open sub-process after click on basic-process',  () => {
  cy.get('div:nth-of-type(1) > .cdk-drag.mat-card').click();
  cy.get('h2').contains('Teilprozess / projekt');
  cy.url().should('contain', '/projekt');
});

it('should check if circle-elements are visible',  () => {
  cy.get('.cdk-drag.circle.mat-card  label').contains('Bestellung');
  cy.get('div#cdk-drop-list-0 > div:nth-of-type(2)').should('have.css', 'border-radius', '100px');
  cy.get('div:nth-of-type(3) > .cdk-drag.circle.mat-card').should('have.css', 'width', '45px');
});

it('should login as admin',  () => {
  cy.get('app-header .header a:nth-child(3)').click();
  cy.get('.button.mat-button-base.mat-raised-button > .mat-button-wrapper').contains('Login');
  cy.get('input').type('salens');
  cy.wait(1000);
  cy.get('.button.mat-button-base.mat-raised-button').click();
  cy.get('.button.mat-button-base.mat-raised-button.ng-star-inserted > .mat-button-wrapper').contains('LogOut');
});

it('should check static-process-names and edit-window',  () => {
  cy.get('div:nth-of-type(2) > .cdk-drag.circle.mat-card  .connection.ng-star-inserted').contains('akquisition');
  cy.get('div:nth-of-type(2) > .ng-star-inserted.saveAndUpdate > .buttons > button:nth-of-type(1) > .mat-button-wrapper')
    .contains('Delete');
  cy.get('div:nth-of-type(2) > .ng-star-inserted.saveAndUpdate > .buttons > button:nth-of-type(2) > .mat-button-wrapper')
    .contains('Update Name');
});

it('should change process visibleName', () => {
  cy.get('#mat-input-0').clear();
  cy.get('.mat-form-field-infix.ng-tns-c88-0').type('Test');
  cy.get('div:nth-of-type(2) > .ng-star-inserted.saveAndUpdate > div > button:nth-of-type(2)').click();
  cy.get('div:nth-of-type(2) > .cdk-drag.circle.mat-card > div > label:nth-of-type(1)').contains('Test');
});

it('should add new process Element', () => {
  cy.get('.addButton.mat-button-base.mat-raised-button.ng-star-inserted').click();
  cy.get('.mat-form-field-infix.ng-tns-c88-6').type('test-element');
  cy.get('.mat-form-field-infix.ng-tns-c88-7').type('blue');
  cy.get('.mat-select-arrow-wrapper.ng-tns-c150-9').click();
  cy.get('mat-option:nth-of-type(1) > .mat-option-text').click();
  cy.get('app-create-process button').click();
  cy.get('div:nth-of-type(2) > .cdk-drag.mat-card > .names > label:nth-of-type(1)').contains('test-element');
});

it('should delete new process-element and close edit-component',  () => {
  cy.get('div:nth-of-type(2) > .ng-star-inserted.saveAndUpdate > .buttons > button:nth-of-type(1) > .mat-button-wrapper').click();
  cy.get('div:nth-of-type(2) > .cdk-drag.mat-card > .names > label:nth-of-type(1)').contains('test').should('not.exist');
  cy.get('div:nth-of-type(2) > .cdk-drag.mat-card').should('have.css', 'background-color', 'rgb(255, 0, 0)');
  cy.get('.addButton.mat-button-base.mat-raised-button.ng-star-inserted').click();
});

it('should logOut',  () => {
  cy.get('.button.mat-button-base.mat-raised-button.ng-star-inserted').click();
  cy.get('.button.mat-button-base.mat-raised-button.ng-star-inserted > .mat-button-wrapper').contains('Login');
});

it('should move 1st process-element to the right end', () => {
  cy.get('div:nth-of-type(1) > .cdk-drag.circle.mat-card')
    .trigger('mousedown', { button: 0 });

  cy.get('[id] div:nth-of-type(2) [tabindex]')
    .trigger('mousemove')
    .click();
  cy.get('app-department-process  mat-icon[role=\'img\']').click();
});

it('should move process-element back to inital-status', () => {
  cy.get('div:nth-of-type(1) > .cdk-drag.circle.mat-card')
    .trigger('mousedown', { button: 0 });

  cy.get('[id] div:nth-of-type(1) [tabindex]')
    .trigger('mousemove')
    .click();
  cy.get('app-department-process  mat-icon[role=\'img\']').click();
});

it('should go back to home-page', () => {
  cy.get('[href=\'\\#\\/home\']').click();
  cy.get('h1').contains('Willkommen bei der PAXMATIC AG');
});
});
