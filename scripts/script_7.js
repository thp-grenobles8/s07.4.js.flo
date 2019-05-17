


function script_7(){
  console.log("______________________________________");
  console.log("|                                    |");
  console.log("|             Script n°7             |");
  console.log("|____________________________________|\n\n");
  question = prompt("Que veux tu dire à l'Acné-bot ?");
  if (question.indexOf("?") === (question.length - 1)) {
    console.log("Ouais Ouais...");
  }else if (question === question.toUpperCase() && question !== "") {
    console.log("Pwa, calme-toi...");
  }else if (question.toLowerCase().indexOf("fornite") !== -1) {
    console.log("on s' fait une partie soum-soum ?");
  }else if (question === "") {
    console.log("t'es en PLS ?");
  }else {
    console.log("balek");
  }
}
