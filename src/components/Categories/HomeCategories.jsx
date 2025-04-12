import React from "react";
// import { useState } from 'react'
import "../../assets/css/Categories/CategoriesMain.css";
import CategorySlider from "./CategorySlider";

//dumy data for testing

//semulate the categories array
const categoriesArray = [
  {
    category: "Action",
    description: "High-octane action films with thrilling sequences",
    movies: [
      {
        Title: "Last Action Hero",
        Year: "1993",
        imdbID: "tt0107362",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZGU2NWQyY2ItY2JiZS00ZDJhLWI0NDQtNjMyNWU3MDA1NTgzXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Back in Action",
        Year: "2025",
        imdbID: "tt21191806",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMWQ4YWYxYTAtZTlhNC00Nzc3LWE3OWUtZjY5MThlNWNiYTBiXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Looney Tunes: Back in Action",
        Year: "2003",
        imdbID: "tt0318155",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDU2NmU2YzktNWFlMC00MDk1LWFhZjQtYjUxZThiMjZhNjQ2XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "An Action Hero",
        Year: "2022",
        imdbID: "tt15600222",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNWUzNzljNjMtYTdiZS00MWQ2LWFkZWItYTM0MzVmZGFhYzNjXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "A Civil Action",
        Year: "1998",
        imdbID: "tt0120633",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMDgyNDNkYTMtYmU0NC00YjliLWFhNjgtMmFhOTQ1MmE4NzNmXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Missing in Action",
        Year: "1984",
        imdbID: "tt0087727",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZGE2NmNlODYtMzMyNS00YTM0LThlMzMtNjg1YTBhMTRkNjJhXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Action Jackson",
        Year: "1988",
        imdbID: "tt0094612",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzY1N2NjMjYtM2U3OS00OTMzLTk4OGEtMWI1YjUwMWRjODQ1XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Action Point",
        Year: "2018",
        imdbID: "tt6495770",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjEyMTU5MTk1N15BMl5BanBnXkFtZTgwMzIzMzczNTM@._V1_SX300.jpg",
      },
      {
        Title: "321 Action",
        Year: "2020",
        imdbID: "tt13423846",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODdlNmZiYmItYTkyZC00NDNhLWEzMDctZjJhMDNjZWJkNTRlXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Missing in Action 2: The Beginning",
        Year: "1985",
        imdbID: "tt0089604",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjQwNjUxZjUtYmUxOS00YmRjLTljZTgtMTc0OTFlZDllZjM5XkEyXkFqcGc@._V1_SX300.jpg",
      },
    ],
  },
  {
    category: "Comedy",
    description: "Laugh-out-loud comedies to brighten your day",
    movies: [
      {
        Title: "The King of Comedy",
        Year: "1982",
        imdbID: "tt0085794",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYTQxNGUwNmUtMDJhYy00ZjM1LWFjZjQtYmI5ZGY4YTZmZWQyXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "A Midsummer Night's Sex Comedy",
        Year: "1982",
        imdbID: "tt0084329",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTMxMTM0MTk3Nl5BMl5BanBnXkFtZTcwOTEyODI1NA@@._V1_SX300.jpg",
      },
      {
        Title: "The Bugs Bunny/Looney Tunes Comedy Hour",
        Year: "1985–1986",
        imdbID: "tt0088491",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNWIxMGI0NjQtNjdjZi00ZDZlLWJhZmMtMTkwOTNmYmE0ZmI2XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Fear City: A Family-Style Comedy",
        Year: "1994",
        imdbID: "tt0109440",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMGU1NDhjYzMtZDhhYS00YTJlLTllNDEtY2U2NmJhMTVlMzViXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "My Teen Romantic Comedy SNAFU",
        Year: "2013–2023",
        imdbID: "tt2703720",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDE5NmZhN2ItNzU4YS00YTRlLWJlODYtMGQ1ZTQ2NTMxOTg2XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Broken Hearts Club: A Romantic Comedy",
        Year: "2000",
        imdbID: "tt0222850",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BN2UxYTIxYTMtZTc2Yi00NDljLWJhMTctZGRmZjgxOWM2YWI5XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "King of Comedy",
        Year: "1999",
        imdbID: "tt0188766",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZGQ4MmNlMzctNTBkYS00Nzg5LWIxZjMtZDRjZWIwYjI2MjczXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Comedy of Terrors",
        Year: "1963",
        imdbID: "tt0056943",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDlkNzNlYzUtZjU2Mi00MTkxLThlYzgtMzk0YWM5MWJiNjdkXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Louis C.K.: Live at the Comedy Store",
        Year: "2015",
        imdbID: "tt4368814",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYTZhYjRlMDktMGQ5OC00ZTAzLWI2YjUtMTU1NTFmNDRmOWRjXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Original Kings of Comedy",
        Year: "2000",
        imdbID: "tt0236388",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOWQxY2Q5YzEtZDA5ZS00MWM1LThmYzEtYjQ0ZDhkOWUyZTVhXkEyXkFqcGc@._V1_SX300.jpg",
      },
    ],
  },
  {
    category: "Drama",
    description: "Critically acclaimed dramas with compelling narratives",
    movies: [
      {
        Title: "Confessions of a Teenage Drama Queen",
        Year: "2004",
        imdbID: "tt0361467",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTIzMDE0MDQ5Ml5BMl5BanBnXkFtZTcwNTUwMDUyMQ@@._V1_SX300.jpg",
      },
      {
        Title: "Total Drama",
        Year: "2007–2014",
        imdbID: "tt1173427",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODhiMGRiMTQtOTc2ZS00NTdmLWE1MjUtMGJiZDRiMzJiMmNkXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "A Woman of Paris: A Drama of Fate",
        Year: "1923",
        imdbID: "tt0014624",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTFhYmZjZDUtMzZmMC00YzRmLTlmOTUtZjJlN2M1MzBjODFhXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Kim Possible: So the Drama",
        Year: "2005",
        imdbID: "tt0446724",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzNlMTUyMTAtZjNjMC00NTFmLWExYjAtZDU0ZjRkYjQwYWIzXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Eating Out: Drama Camp",
        Year: "2011",
        imdbID: "tt1833845",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTM2NTI0ODE4NF5BMl5BanBnXkFtZTcwMTE0NTE2Nw@@._V1_SX300.jpg",
      },
      {
        Title: "Total Drama All Stars",
        Year: "2013–2014",
        imdbID: "tt3177810",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BN2IwY2UyZWYtMDEwMS00MWM1LThmYmUtYjk4NjIzNWYzYjYxXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Total Drama Presents: The Ridonculous Race",
        Year: "2015",
        imdbID: "tt3787754",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzY3YTNjMGItM2FlMC00ZmM4LTkyZjUtOTg1MjNmYTk2NzU0XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Total Drama Revenge of the Island",
        Year: "2012–2015",
        imdbID: "tt2733534",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjI0NTExNDA4NF5BMl5BanBnXkFtZTgwODQ3ODAxMzE@._V1_SX300.jpg",
      },
      {
        Title: "Love Action Drama",
        Year: "2019",
        imdbID: "tt7117870",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYTY3YWI3OGQtMDZlNC00MTJiLWE5OGMtNGRkNjAyN2U5ODVmXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Drama/Mex",
        Year: "2006",
        imdbID: "tt0808237",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMDgxYTU4ODMtMDZjNy00OWFlLTg2ZjctYWYxZmQwZjZkMDk2XkEyXkFqcGc@._V1_SX300.jpg",
      },
    ],
  },
  {
    category: "Horror",
    description: "Spine-chilling horror movies to keep you up at night",
    movies: [
      {
        Title: "American Horror Story",
        Year: "2011–",
        imdbID: "tt1844624",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNzJjZTg0ZmMtMTg0Ny00NzYxLWFjMWMtMWFiYmNkMTNjZGMyXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Rocky Horror Picture Show",
        Year: "1975",
        imdbID: "tt0073629",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTg2YzY5ZGYtNDk1My00N2Q2LWFhN2YtZWU5YTkzODIyZGRmXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Amityville Horror",
        Year: "2005",
        imdbID: "tt0384806",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzc1Njc2NDc3NV5BMl5BanBnXkFtZTYwODYyNzI3._V1_SX300.jpg",
      },
      {
        Title: "Nosferatu: A Symphony of Horror",
        Year: "1922",
        imdbID: "tt0013442",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDg1OTI1M2MtMTVlMS00ZjFhLTgyMTAtYjIzOWUwZTkyZWE5XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Amityville Horror",
        Year: "1979",
        imdbID: "tt0078767",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYzU4NGM2NjktMzBiNy00OTljLWIwNjQtMzRiNjk3OTc3NzFlXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Horror of Dracula",
        Year: "1958",
        imdbID: "tt0051554",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNTQxZTQxYjUtZDg0Zi00ZGE2LWJlMzQtYWJhMjM2MTJmYTI1XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "American Horror Stories",
        Year: "2021–",
        imdbID: "tt12306692",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZTY4NTQ0ZDMtMGM4ZS00YmYwLWFkYmUtYWFlZmUwMTA5MWMyXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "A Classic Horror Story",
        Year: "2021",
        imdbID: "tt12877640",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYTg5ZDgxNDAtMzFkNS00M2UwLWI4N2EtOTczYjM0MjYwZDRjXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Masters of Horror",
        Year: "2005–2007",
        imdbID: "tt0448190",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjg4NTZmNDQtZTlhMC00NWI1LWE3ZGUtYzhjYWViNDJhOGYyXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Horror Express",
        Year: "1972",
        imdbID: "tt0068713",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMWY4MzczOWUtYTdlYS00MjNlLTg1ODEtYjkzOTY0MTNmZmEyXkEyXkFqcGc@._V1_SX300.jpg",
      },
    ],
  },
  {
    category: "Science Fiction",
    description: "Futuristic and mind-bending sci-fi adventures",
    movies: [
      {
        Title: "Weird Science",
        Year: "1985",
        imdbID: "tt0090305",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYjI2N2Q4ZjEtZjMyNC00MDM5LTkxZTQtNzA4MTE1ZGQyYTgwXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Science of Sleep",
        Year: "2006",
        imdbID: "tt0354899",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTg3NTcxNzY5NV5BMl5BanBnXkFtZTcwODk5NTQzMQ@@._V1_SX300.jpg",
      },
      {
        Title: "Mystery Science Theater 3000",
        Year: "1988–1999",
        imdbID: "tt0094517",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDA1MjM1Y2ItNjJjZi00ZjFkLWI5MjMtYWM3ODIwZDI5M2IzXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Mystery Science Theater 3000: The Movie",
        Year: "1996",
        imdbID: "tt0117128",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYmIzYmZlNWMtYTVjNC00YWU5LWI1N2UtZjY2MDVjYTE0YjU0XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Rocket Science",
        Year: "2007",
        imdbID: "tt0477078",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDg0MWNmZmItYWZiNy00OWE0LWI0ZDAtNTIwMWUwYzk5ZDdhXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Bill Nye the Science Guy",
        Year: "1993–1998",
        imdbID: "tt0173528",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjcxNTIyYTItNDVhMS00OWEyLTkxOTUtZTFkMWQxZjUyZjQ3XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "My Science Project",
        Year: "1985",
        imdbID: "tt0089652",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzBkNjljZjctYjM3OS00NjA5LWE0NDYtNmZiZDY2NDhmNTgzXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Brainiac: Science Abuse",
        Year: "2003–2008",
        imdbID: "tt0442633",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYzdjMjllYTMtOTU2Zi00NjVkLWIxMjQtMzA3NmJiNTUzOTc1XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Mystery Science Theater 3000",
        Year: "2017–2022",
        imdbID: "tt6782014",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYzY3N2NhMDQtMWM5Ni00ZmVlLTljMDItMDUyOWEzNDEwYjdiXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Weird Science",
        Year: "1994–1998",
        imdbID: "tt0108988",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYzc4YTdiNzUtZGUxZC00OTM1LTk5NDUtNGRhYjFiZGNjMjE4XkEyXkFqcGc@._V1_SX300.jpg",
      },
    ],
  },
  {
    category: "Romance",
    description: "Heartfelt love stories that touch your soul",
    movies: [
      {
        Title: "True Romance",
        Year: "1993",
        imdbID: "tt0108399",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYzQ5OGMwMDAtMzcyOS00YTA4LWEwM2MtOTA1MDZjZGEyYmI1XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "College Romance",
        Year: "2018–2023",
        imdbID: "tt8809646",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDlkNzI2MWUtYTkyOS00MTkxLTg0YzctZmQwNjExYjQzOTc1XkEyXkFqcGdeQXVyMTExMTIzMTA5._V1_SX300.jpg",
      },
      {
        Title: "Romance & Cigarettes",
        Year: "2005",
        imdbID: "tt0368222",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTliNWE0MTMtNTBmYS00NWVhLThkYzAtMTAxMzMyZDNhNmQwXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Romance",
        Year: "1999",
        imdbID: "tt0194314",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZmIzM2JjMzMtZWM0OS00ZjNiLWFiYTAtZTNjNzZjMzdjZDI5XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Office Romance",
        Year: "1977",
        imdbID: "tt0076727",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BN2EzNTEwYTMtNzhjNy00ZTI1LWEwMWItNGRkNTZkNGYxZTc4XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Shuddh Desi Romance",
        Year: "2013",
        imdbID: "tt2988272",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTU0NjI2MTI0Ml5BMl5BanBnXkFtZTcwNjI4MzY5OQ@@._V1_SX300.jpg",
      },
      {
        Title: "Romance Is a Bonus Book",
        Year: "2019",
        imdbID: "tt9130542",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNmVmNmI0MzAtMzljNy00MjQ2LWI0NzktYzkwNzZmZWM1NTQ3XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Murphy's Romance",
        Year: "1985",
        imdbID: "tt0089643",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDU3ZjA1YzktNDUxNy00MDVmLTlhMGQtYjljNjcwMTcwNzZiXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "A Little Romance",
        Year: "1979",
        imdbID: "tt0079477",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTg1YjQ1ZWYtMDRkNi00MDNhLTk4ZTQtM2I1MTNmNzg4MGQ4XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Guilty of Romance",
        Year: "2011",
        imdbID: "tt1743724",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODE0ZWY4MzMtODdjOC00NTYwLTk3NDEtYWMyZGI0MjdlZDIyXkEyXkFqcGc@._V1_SX300.jpg",
      },
    ],
  },
  {
    category: "Animation",
    description: "Animated movies for kids and the young at heart",
    movies: [
      {
        Title: "Ping Pong the Animation",
        Year: "2014",
        imdbID: "tt3592032",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNmYzMDRkMmYtZjNiZS00ZGVlLWI2NWQtMjc2NTE1OThmZTBiXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Azumanga Daioh: The Animation",
        Year: "2002",
        imdbID: "tt0339955",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYmYyZWQzMTYtM2EyNS00YzllLThmZGYtZGY2ODA0NDc2M2FkXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Wallace & Gromit: The Best of Aardman Animation",
        Year: "1996",
        imdbID: "tt0118114",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTUyNDMxOTIxOF5BMl5BanBnXkFtZTcwODA1NTcyMQ@@._V1_SX300.jpg",
      },
      {
        Title: "Danganronpa: The Animation",
        Year: "2013",
        imdbID: "tt2902582",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjZmYmIzNzctMTMwZS00NmQxLWJjNzQtNDM0OWQ3MDVmOGFiXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Supernatural: The Animation",
        Year: "2011",
        imdbID: "tt1679482",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZTJlZjE1YWUtNjNkMy00NjVhLWFiN2ItNGY2OTlhMDgxNTM4XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Hunter x Hunter: Original Video Animation",
        Year: "2002",
        imdbID: "tt0435031",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNmM5NjU2MWItOGQzYi00ODgxLWFiNTQtYTg1M2UwODQ1NTE2XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Night of the Living Dead 3D: Re-Animation",
        Year: "2012",
        imdbID: "tt1879012",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTU5ODgyNTI1Nl5BMl5BanBnXkFtZTcwMjEwOTA0Nw@@._V1_SX300.jpg",
      },
      {
        Title: "Scott Pilgrim vs. the Animation",
        Year: "2010",
        imdbID: "tt1707823",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYmRmOWI4YzEtNTYxMi00ZTMxLTk2MzgtYjZiMTBiNWY1NTk3XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Sword Gai: The Animation",
        Year: "2018",
        imdbID: "tt7415066",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYTEwYzhmYjgtZmU5Ni00ODAwLTg5NTAtZWZiMmUyYmYwZmY1XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Persona 4: The Animation",
        Year: "2011–2012",
        imdbID: "tt2387612",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNjQzY2YxMzItZTA5Zi00MmUzLTk4ZDktNTAzYThmOGEzYWFlXkEyXkFqcGc@._V1_SX300.jpg",
      },
    ],
  },
  {
    category: "Adventure",
    description: "Epic journeys and thrilling exploration",
    movies: [
      {
        Title: "Bill & Ted's Excellent Adventure",
        Year: "1989",
        imdbID: "tt0096928",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTk3Mjk5MzI3OF5BMl5BanBnXkFtZTcwMTY4MzcyNA@@._V1_SX300.jpg",
      },
      {
        Title: "Adventure Time",
        Year: "2010–2018",
        imdbID: "tt1305826",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjkxMzIwNmQtMzM5Ni00YWJiLTg4YjQtNjBiN2IxMjZhMGQ2XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Zathura: A Space Adventure",
        Year: "2005",
        imdbID: "tt0406375",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDMzZDZhMTQtYzJkNi00OTI2LThjNDUtN2I2N2JjZmYwMWM5XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Pee-wee's Big Adventure",
        Year: "1985",
        imdbID: "tt0089791",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYTQ2ZTUzZjktMWVmNC00MzBmLTg1ZjMtYzQyNmE1YzY1MDFiXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Poseidon Adventure",
        Year: "1972",
        imdbID: "tt0069113",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNmMyNWRlMDgtMjg4ZS00ZTg3LTkxOWItMjVhMjEyZWJjOGYxXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "JoJo's Bizarre Adventure",
        Year: "2012–",
        imdbID: "tt2359704",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzIyNzY4NTMtNmVhYS00OWFhLTkwMWMtOGFkNTdmNWU2ZDdiXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Free Willy 2: The Adventure Home",
        Year: "1995",
        imdbID: "tt0113114",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMmVjZjMxMmUtYWQ4Mi00YzAzLThkMmQtZjNmMGQyNDVkNzk2XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Oogieloves in the Big Balloon Adventure",
        Year: "2012",
        imdbID: "tt1520498",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTk0ODM0MzA0OV5BMl5BanBnXkFtZTcwODUyODc3Nw@@._V1_SX300.jpg",
      },
      {
        Title: "Olaf's Frozen Adventure",
        Year: "2017",
        imdbID: "tt5452780",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzRlNWU1NjMtMTY3ZC00MmQxLTk0YWEtNzcxNzI3NjFhNDQzXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Remo Williams: The Adventure Begins",
        Year: "1985",
        imdbID: "tt0089901",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZTYwZDQ1NTQtMGJhZC00NGI5LWFiODgtY2MzZDgyM2MzNWI4XkEyXkFqcGc@._V1_SX300.jpg",
      },
    ],
  },
  {
    category: "Thriller",
    description: "Gripping suspense and unexpected twists",
    movies: [
      {
        Title: "Michael Jackson: Thriller",
        Year: "1983",
        imdbID: "tt0088263",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODhhZjJlYTktZDQ2MS00Yzk4LWFlOTQtYTgyOGE1ZGE5YWEyL2ltYWdlXkEyXkFqcGdeQXVyMzA5MjgyMjI@._V1_SX300.jpg",
      },
      {
        Title: "Thriller: A Cruel Picture",
        Year: "1973",
        imdbID: "tt0072285",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMGRjYzk4YjYtNDcyMC00ZDA0LTgwNzItNjRmZDhmZGIyNjYzXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Sing: Thriller",
        Year: "2024",
        imdbID: "tt33999453",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTRlZTcxMTMtZDBhYS00NjRjLWJmN2YtZjhhYjEzNDA5YTUwXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Clue: A Love Thriller",
        Year: "2021",
        imdbID: "tt15211098",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjc1YmVjYWMtNjMzOC00YjJlLTliMjItZmU3ZDhiODZiNThiXkEyXkFqcGdeQXVyMTEwOTUyOTg5._V1_SX300.jpg",
      },
      {
        Title: "Thriller 40",
        Year: "2023",
        imdbID: "tt22482764",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZWIwZWUzNzMtYmY5MS00NmYwLTk5YjMtMTE5NmMyNTIyZDU4XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Thriller",
        Year: "1960–1962",
        imdbID: "tt0053546",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZDk4YzgwOGYtMWQ1YS00ZjRlLTg2YTEtMWE3YTUzMDQyZjUxXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Thriller",
        Year: "2018",
        imdbID: "tt7671414",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BOTIxNjg1YTYtZjExNi00YWIwLTlmNGMtNjdkODc5NTc4ZmYzXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Shrek: Thriller Night",
        Year: "2011",
        imdbID: "tt2051999",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjljZTQ0YWYtNGEwNC00ODJmLTgyOTQtZmIyNjI0YzFmNDgzXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Thriller",
        Year: "1973–1976",
        imdbID: "tt0164295",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZjc3ODdkNzUtMTdmZC00Y2I1LWJkNDUtMjkzOGUyYjU2ZTMwXkEyXkFqcGdeQXVyMTAxNTc1MzY3._V1_SX300.jpg",
      },
      {
        Title: "The Making of 'Thriller'",
        Year: "1983",
        imdbID: "tt0242682",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjM5MDkwMDg5Nl5BMl5BanBnXkFtZTgwMDI2MjkxMzE@._V1_SX300.jpg",
      },
    ],
  },
  {
    category: "Documentary",
    description: "Real-life stories, people, and places",
    movies: [
      {
        Title: "Minimalism: A Documentary About the Important Things",
        Year: "2015",
        imdbID: "tt3810760",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BZWQ1ZDljNDAtYWI4ZC00NWVkLTgwOTctZmM4MDc5MDJiMjU5XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Documentary Now!",
        Year: "2015–",
        imdbID: "tt4677934",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTQ2Mjg3NTA5NV5BMl5BanBnXkFtZTgwNzExNTU1NjE@._V1_SX300.jpg",
      },
      {
        Title: "Woody Allen: A Documentary",
        Year: "2012",
        imdbID: "tt2397619",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BNDkxNjM3NDQ0OF5BMl5BanBnXkFtZTcwNzkyMjM5OA@@._V1_SX300.jpg",
      },
      {
        Title: "Hands on a Hardbody: The Documentary",
        Year: "1997",
        imdbID: "tt0116481",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTQxOTYxODYyN15BMl5BanBnXkFtZTcwMDI3MDg4OQ@@._V1_SX300.jpg",
      },
      {
        Title: "Chasing Trane: The John Coltrane Documentary",
        Year: "2016",
        imdbID: "tt4283892",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMzRhMDVhZDgtYTcwZi00MDBlLWJkZjItNjY2YmEyYmVhZDk3XkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Never Surrender: A Galaxy Quest Documentary",
        Year: "2019",
        imdbID: "tt11044122",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BODM2ODk4YWMtMzE3Ny00MDQ3LWIwMzctYjY4ZjczYzg2MTlhXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "Steve! (Martin): A Documentary in 2 Pieces",
        Year: "2024",
        imdbID: "tt21629194",
        Type: "series",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BY2ZjZDA0ZjgtNjExMy00MDhmLWIyN2ItZDA1MDNjNTc0OGFmXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "The Amazing Johnathan Documentary",
        Year: "2019",
        imdbID: "tt9358084",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BYWRkZDliMmUtOTc0Yi00ZWQ1LTk0MTEtNGRmYzFhZTE0YjdmXkEyXkFqcGc@._V1_SX300.jpg",
      },
      {
        Title: "No Impact Man: The Documentary",
        Year: "2009",
        imdbID: "tt1280011",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMTA2MzM0ODIxMDheQTJeQWpwZ15BbWU3MDc1OTMzNzI@._V1_SX300.jpg",
      },
      {
        Title: "Tricked: The Documentary",
        Year: "2013",
        imdbID: "tt2246924",
        Type: "movie",
        Poster:
          "https://m.media-amazon.com/images/M/MV5BMjA1NzMzNjQwMV5BMl5BanBnXkFtZTgwMzgxNzU5NTE@._V1_SX300.jpg",
      },
    ],
  },
];

function HomeCategories() {
  // for mohamed sameh => write the logic to get the categories from the server
  // =================||==============================||==============================
  // i am waiting for a response => [{},{},.... ] array of objects,
  // each object has a category name and an array of movies
  // =================||==============================||==============================
  // i will reuse this logic in movies and series pages

  return categoriesArray.map((cat) => {
    return (
      <div className="category-slider" key={cat.category}>
        <CategorySlider data={cat} />
      </div>
    );
  });
}

export default HomeCategories;
