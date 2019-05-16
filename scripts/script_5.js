function script_5(){
  console.log("______________________________________");
  console.log("|                                    |");
  console.log("|             Script n°5             |");
  console.log("|____________________________________|\n\n");

  let booksSort = books.sort(compareRented);
  console.log("Est-ce que tous les livres ont été empruntés au moins une fois ? : \n\n");
  if (booksSort[0].rented !== 0) {
    console.log("Oui tous les livres ont été emprunté au moins une fois !!");
  } else {
    console.log("Non il y a un livre qui n'a pas été emprunté");
    console.log(booksSort[0]);
  }
  console.log("_________________________________________________");

  console.log("Le livre le plus emprunté est :\n\n");
  console.log(booksSort.slice(-1)[0]);

  console.log("_________________________________________________");

  console.log("Le livre le moins emprunté est :\n\n");
  console.log(booksSort.slice(0)[0]);

  console.log("_________________________________________________");

  console.log("Le livre avec l'id 873495: \n\n");
  for( var i = 0; i < books.length; i++){
    if ( books[i].id === 873495) {
      console.log(books[i]);
    }
  }


  console.log("_________________________________________________");

  console.log("La liste des livres sans le livre avec l'id 133712 : \n\n");
  for( var i = 0; i < books.length; i++){
    if ( books[i].id === 133712) {
      books.splice(i, 1);
    }
  }
  console.log(books);

  console.log("_________________________________________________");
  let booksSortTitle = books.sort(compareTitle);
  console.log("La liste des livres par ordre alphabétique : \n\n");
  console.log(booksSortTitle);

  console.log("_________________________________________________");
}



const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Les frères Karamazov', id: 450911, rented: 5 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];



function compareRented(a, b) {
  const bookA = a.rented;
  const bookB = b.rented;

  let comparison = 0;
  if (bookA > bookB) {
    comparison = 1;
  } else if (bookA < bookB) {
    comparison = -1;
  }
  return comparison;
}
function compareTitle(a, b) {
  const bookA = a.title;
  const bookB = b.title;

  let comparison = 0;
  if (bookA > bookB) {
    comparison = 1;
  } else if (bookA < bookB) {
    comparison = -1;
  }
  return comparison;
}
