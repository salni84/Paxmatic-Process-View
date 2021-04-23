import '@4tw/cypress-drag-drop';
import {environment} from '../../src/environments/environment.prod';


describe('end2end tests for process-View', () => {

  it('should execute DB-Script', () => {
    cy.exec('npm run db');
  });

  it('loads examples', () => {
    cy.visit('/');
  });

  it('should open basic-process', () => {
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

  it('should login as admin', () => {
    cy.get('app-header .header a:nth-child(3)').click();
    cy.get('.button.mat-button-base.mat-raised-button > .mat-button-wrapper').contains('Login');
    cy.get('.ng-pristine.ng-star-inserted.ng-untouched.ng-valid').type(environment.password);
    cy.wait(1000);
    cy.get('.button.mat-button-base.mat-raised-button').click();
    cy.get('.button.mat-button-base.mat-raised-button.ng-star-inserted > .mat-button-wrapper').contains('LogOut');
  });

  it('should open legend and add new department', () => {
    cy.get('mat-expansion-panel-header').contains('Legende');
    cy.get('mat-expansion-panel-header').click();
    cy.get('div#cdk-accordion-child-0');

  });

  it('should open sub-process after click on basic-process', () => {
    cy.get('div:nth-of-type(1) > .cdk-drag.mat-card').click();
    cy.get('h2').contains('Teilprozess');
    cy.url().should('contain', '/Projekt');
  });

  it('should check if circle-elements are visible', () => {
    cy.get('.cdk-drag.circle.mat-card  label').contains('Bestellung');
    cy.get('.cdk-drag.circle.mat-card').should('have.css', 'border-radius', '100px');
    cy.get('.cdk-drag.circle.mat-card').should('have.css', 'width', '45px');
  });

  it('should check static-process-names and edit-window', () => {
    cy.get('div:nth-of-type(2) > .cdk-drag.mat-card  .connection.ng-star-inserted').contains('Akquisition');
    cy.get('div:nth-of-type(2) > .ng-star-inserted.saveAndUpdate > .buttons > button:nth-of-type(2) > .mat-button-wrapper')
      .contains('Delete');
    cy.get('div:nth-of-type(2) > .ng-star-inserted.saveAndUpdate > div > button:nth-of-type(3)')
      .contains('Update');
  });

  it('should add new process Element', () => {
    cy.get('.addButton.mat-button-base.mat-raised-button.ng-star-inserted').click();
    cy.get('.createName').type('test-element');
    cy.get('app-create-process .container > div:nth-of-type(2)').click();
    cy.get('mat-option:nth-of-type(1)').click();
    cy.get('app-create-process .container > div:nth-of-type(3)').click();
    cy.get('mat-option:nth-of-type(1) > .mat-option-text').click();
    cy.get('app-create-process button').click();
    cy.get('div:nth-of-type(2) > .cdk-drag.mat-card > .names > label:nth-of-type(1)').contains('test-element');
  });

  it('should delete new process-element and close edit-component', () => {
    cy.get('div:nth-of-type(2) > .ng-star-inserted.saveAndUpdate > .buttons > button:nth-of-type(2) > .mat-button-wrapper').click();
    cy.get('div:nth-of-type(2) > .cdk-drag.mat-card > .names > label:nth-of-type(1)').contains('test').should('not.exist');
    cy.get('div:nth-of-type(2) > .cdk-drag.mat-card').should('have.css', 'background-color', 'rgb(255, 0, 0)');
    cy.get('.addButton.mat-button-base.mat-raised-button.ng-star-inserted').click();
  });

  it('should move 1st process-element to the right end', () => {
    cy.get('div:nth-of-type(2) > .cdk-drag.mat-card')
      .trigger('mousedown', {button: 0});

    cy.get('.cdk-drag.circle.mat-card')
      .trigger('mousemove')
      .click();
  });

  it('should move process-element back to initial-status', () => {
    cy.get('.cdk-drag.circle.mat-card')
      .trigger('mousedown', {button: 0});

    cy.get('div:nth-of-type(2) > .cdk-drag.mat-card')
      .trigger('mousemove')
      .click();
    cy.get('.arrow').click();
  });

  it('should logOut', () => {
    cy.get('.button.mat-button-base.mat-raised-button.ng-star-inserted').click();
    cy.get('.button.mat-button-base.mat-raised-button.ng-star-inserted > .mat-button-wrapper').contains('Login');
  });

  it('should click to departmentprocess-component', () => {
    cy.get('div:nth-of-type(3) > .cdk-drag.mat-card').click();
    cy.get('h2').contains('Abteilungsprozess');
  });

  it('should click to detailprocess-component', () => {
    cy.get('div:nth-of-type(2) > .cdk-drag.mat-card').click();
    cy.get('h2').contains('Detailprozess');
  });

  it('should check if document-icon is existing', () => {
    cy.get('.cdk-drag.mat-card > .doc-icon').should('have.css', 'margin-bottom', '0px');
  });

  it('should click to document-component', () => {
    cy.get('.main .ng-star-inserted:nth-of-type(1) [tabindex]').click();
    cy.get('h2').contains('Dokumente');
  });

  it('should check if document is visible', () => {
    cy.get('tr[role=\'row\'] > td:nth-of-type(2)').contains('checkliste');
  });

  it('should check if other detail-documents are visible', () => {
    cy.get('.otherDocuments > a:nth-of-type(1)').contains('Abnahme');
    cy.get('.otherDocuments > a:nth-of-type(2)').contains('Bestellung');
  });

  it('should go back to home-page', () => {
    cy.get('[href=\'\\#\\/home\']').click();
    cy.get('h1').contains('Willkommen bei der PAXMATIC AG');
  });
});
