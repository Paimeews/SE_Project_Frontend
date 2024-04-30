describe('filter', () => {
  it('filter activity', () => {
    cy.visit('/campground')
    cy.wait(6000)
    cy.get('#filter').click()
    cy.get('input[id="Hiking"]').click()
    cy.wait(8000)
  })

  it('filter activity, rating', () => {
    cy.visit('/campground')
    cy.wait(6000)
    cy.get('#filter').click()
    cy.get('input[id="Fishing"]').click()
    cy.get('input[id="United States"]').click()
    cy.wait(8000)
  })
})