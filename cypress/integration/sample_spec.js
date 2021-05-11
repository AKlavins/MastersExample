
describe('Title test', () => {
    it('Asserts correct title', () => {
      cy.visit('https://aklavins.github.io/MastersExample/')
  
      cy.get('h1').contains('Maģistra darbs')

      // Take a snapshot for visual diffing
      cy.percySnapshot('Title test');
    })
  })

  describe('Table test', () => {
    it('Asserts correct table element value', () => {
      cy.visit('https://aklavins.github.io/MastersExample/')
  
      cy.contains('Read').click()

      // Take a snapshot for visual diffing
      cy.percySnapshot('Table test');
    })
  })