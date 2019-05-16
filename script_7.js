


function script_7(){
  question = prompt("Quelle est ta question ?");
  if (question.indexOf("?") !== -1) {
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
