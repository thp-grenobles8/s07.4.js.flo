function script_3(){
  console.log("______________________________________");
  console.log("|                                    |");
  console.log("|             Script n°3             |");
  console.log("|____________________________________|\n\n");


  stage = prompt("Combien d'étage veux-tu ?");
  console.log(`Voici la pyramide de mario avec ${stage} étages`);
  pyramid(stage);
}

function pyramid(stage){
  for (let i = 1; i <= stage; i++) {
    let step = "";
    for (let k = 0; k <= (stage - i); k++) {
      step += " ";
    }
    for (let j = 0; j < i; j++) {
      step += "#";
    }
    console.log(step);
  }
}
