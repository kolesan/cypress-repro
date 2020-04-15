describe('Intersection observer', () => {
  beforeEach(() => {
    cy.visit('https://cypress-repro.netlify.com/')
  })

  it('detects intersection and shows an alert', () => {
    cy.get("#target").log();
  })
})
