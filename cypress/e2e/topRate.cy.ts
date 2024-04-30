describe('top-rated', () => {
  it('passes', () => {
    cy.visit('/campground')
    cy.wait(6000)
    cy.get('#top-rated').scrollIntoView()
  })
})