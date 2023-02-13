describe('template spec', () => {
  let movies
  beforeEach(() => {
  cy.visit('http://localhost:3000')
  movies = {
    movies: [
      {
      id: 436270,
      poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      title: "Black Adam",
      average_rating: 4,
      release_date: "2022-10-19"
      },
      {
      id: 724495,
      poster_path: "https://image.tmdb.org/t/p/original//438QXt1E3WJWb3PqNniK0tAE5c1.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
      title: "The Woman King",
      average_rating: 4,
      release_date: "2022-09-15"
      },
      {
      id: 1013860,
      poster_path: "https://image.tmdb.org/t/p/original//g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
      title: "R.I.P.D. 2: Rise of the Damned",
      average_rating: 7,
      release_date: "2022-11-15"
      }
    ]
  }
  cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies", movies )
})

  it('Should visit our home page and display Spoiled Fruit title', () => {
    cy.contains('Spoiled Fruit')
  })

  it('Should show a list of movies when a user visits the home page', () => {
    cy.get('a[href="/movies/436270"]').should('exist')
    cy.get('a[href="/movies/724495"]').should('exist')
    cy.get('a[href="/movies/1013860"]').should('exist')
  })

  it('Should take a user to a different url endpoint and be shown that movie\'s info', () => {
    cy.get('a[href="/movies/436270"]').click()
    cy.intercept("GET", "https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270", {
      movie: 
    {
      id: 436270,
      title: "Black Adam",
      poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
      backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
      release_date: "2022-10-19",
      overview: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
      genres: 
    [
      "Action",
      "Fantasy",
      "Science Fiction"
      ],
      budget: 200000000,
      revenue: 384571691,
      runtime: 125,
      tagline: "The world needed a hero. It got Black Adam.",
      average_rating: 4
      }
    })
    cy.contains('Black Adam')
    cy.contains('Runtime: 125 minutes')
    cy.url().should('include', '/movies/436270')
  })

  it('Should take a user back to the dashboard when the home button is clicked', () => {
    cy.get('a[href="/movies/436270"]').click()
    cy.get('button').click()
    cy.get('a[href="/movies/436270"]').should('exist')
    cy.get('a[href="/movies/724495"]').should('exist')
    cy.get('a[href="/movies/1013860"]').should('exist')
    cy.url().should('include', '/')
  })

})



