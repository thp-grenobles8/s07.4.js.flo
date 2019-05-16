function script_2(){
  console.log("______________________________________");
  console.log("|                                    |");
  console.log("|             Script n°2             |");
  console.log("|____________________________________|\n\n");
  num = prompt("choisis un nombre" );
  console.log(`Le résultat ${num}! est de : ${factorial(num)}`);
}

function factorial(number){
  let fac = 1;
  for(let count = 1; count <=number; count++){
    fac *= count;
  }
  return fac
}
