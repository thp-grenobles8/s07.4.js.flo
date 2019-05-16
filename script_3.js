function script_3(){
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


  stage = prompt("Combien d'étage veux-tu ?");
  pyramid(stage);
}
