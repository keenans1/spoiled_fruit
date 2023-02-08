describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')
    cy.contains('Spoiled Fruit')
    cy.intercept("GET", "http://localhost:3001/api/v1/users/4", {
    id: 4,
    name: "Scott Ertmer",
    image: "https://ca.slack-edge.com/T029P2S9M-UJ910QEJF-7244f37f7e12-512",
    email: "scott@turing.edu",
    password: "ertmer20",
  });
  })
})