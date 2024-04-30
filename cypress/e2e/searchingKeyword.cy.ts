describe('search', () => {
  it('searching keywords', () => {
    cy.visit('/campground')
    cy.wait(6000)
    cy.get('input[id="searchText"]').type("Grand")
    cy.wait(4000)
    cy.get('button[id="searchButton"]').click()
    cy.wait(8000)
  })
})