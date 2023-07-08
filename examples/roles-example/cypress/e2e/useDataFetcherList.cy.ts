/* eslint-disable cypress/no-unnecessary-waiting */
// Import the necessary data from the ApiMock file
import { rolesListResponse } from '../../src/api/ApiMock'

// Describe the test case
describe('Data List View', () => {
  // Test: Display loading state and then response data
  it('displays the loading state and then the response data', () => {
    // Visit the root URL or the appropriate route of your Data List View
    cy.visit('/')

    // Assert that the loading message is displayed and has the correct text
    cy.get('h2.loading').should('have.text', 'loading')

    // Assert that the loading message exists
    cy.get('h2.loading').should('exist')

    // Wait for a specific period of time to simulate the asynchronous data fetching
    cy.wait(1000)

    // Assert that the loading message is no longer visible
    cy.get('h2.loading').should('not.exist')

    // Assert that the response data message exists
    cy.get('h2.response').should('exist')

    // Assert that the response data message has the correct text, which is the JSON representation of rolesListResponse
    cy.get('h2.response').should('have.text', JSON.stringify(rolesListResponse))
  })
})