function script_2(){
  function factorial(number){
    let fac = 1;
    for(let count = 1; count <=number; count++){
      fac *= count;
    }
    return fac
  }
  num = prompt("choisis un nombre" );
  console.log(`Le résultat est : ${factorial(num)}`);
}
