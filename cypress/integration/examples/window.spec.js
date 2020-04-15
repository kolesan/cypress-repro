describe('Intersection observer', () => {
  beforeEach(() => {
    cy.visit('https://cypress-repro.netlify.com/');
  })

  it('detects intersection and shows an alert', () => {
    cy.on('window:alert', str => {
      expect(str).to.equal(`Found it!`);
    });
    cy.get("#target").scrollIntoView();
  })

  it('does not detect intersection', () => {
    cy.on('window:alert', str => {
      expect(str).to.equal(`not the string you are looking for`);
    });
    cy.get("#target");
  })
})
