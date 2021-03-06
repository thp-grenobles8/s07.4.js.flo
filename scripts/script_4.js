const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

function compare(a, b) {
  const nameA = a.last.toUpperCase();
  const nameB = b.last.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

function script_4(){
  console.log("______________________________________");
  console.log("|                                    |");
  console.log("|             Script n°4             |");
  console.log("|____________________________________|\n\n");


  console.log("Les entrepreneurs nés entre 1970 et 1979 :\n\n");
  entrepreneurs.forEach(entrepreneur => {
    if ( 1970 <= entrepreneur.year && entrepreneur.year < 1980) {
      console.log(`${entrepreneur.first} ${entrepreneur.last} né en ${entrepreneur.year}`);
    }
  });
  console.log("_________________________________________________");
  console.log("Voici le tableau nom-Prenom des entrepreneurs :\n\n");
  let entrepreneursArray = [];
  entrepreneurs.forEach(entrepreneur => {
    entrepreneursArray.push(`${entrepreneur.first} ${entrepreneur.last} `)
  });
  console.log(entrepreneursArray);
  var currentTime = new Date();
  var year = currentTime.getFullYear();
  console.log("_________________________________________________");

  console.log("Voici les ages des entrepreneurs : \n\n");
  entrepreneurs.forEach(entrepreneur =>{
    console.log(`${entrepreneur.first} ${entrepreneur.last} a ${year - entrepreneur.year} ans`)
  });
  console.log("_________________________________________________");
  console.log("Voici les entrepreneurs triés par ordre alphabétique sur les noms de famille : \n\n");
  console.log(entrepreneurs.sort(compare));
}
