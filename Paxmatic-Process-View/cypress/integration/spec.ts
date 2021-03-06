it('loads examples', () => {
  cy.visit('/');
});


it('should open basic-process',  () => {
  cy.get('.link').click();
  cy.get('h2').contains('Geschäftsprozesse');

});
