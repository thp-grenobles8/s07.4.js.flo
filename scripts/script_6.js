function script_6(){
  console.log("______________________________________");
  console.log("|                                    |");
  console.log("|             Script n°6             |");
  console.log("|____________________________________|\n\n");

  let codon = {
    UCU: "Sérine",
    UCC: "Sérine",
    UCA: "Sérine",
    UCG: "Sérine",
    AGU: "Sérine",
    AGC: "Sérine",
    CCU: "Proline",
    CCC: "Proline",
    CCA: "Proline",
    CCG: "Proline",
    UUA: "Leucine ",
    UUG: "Leucine",
    UUU: "Phénylalanine",
    UUC: "Phénylalanine",
    CGU: "Arginine",
    CGC: "Arginine",
    CGA: "Arginine",
    CGG: "Arginine",
    AGA: "Arginine",
    AGG: "Arginine",
    UAU: "Tyrosine",
    UAC: "Tyrosine",
  }
  let arn0 = 'UUACGCAGUAGA';
  let arn1 = 'CCGUCGUUGCGCUACAGC';
  let arn2 = 'CCUCGCCGGUACUUCUCG';
  function spliter(arn){
    let arnSplit = arn.match(/.../g);
    let acideAmine = [];
    for (var i = 0; i < arnSplit.length; i++) {
      acideAmine.push(codon[arnSplit[i]]);
    }
    console.log(acideAmine.join("-"));
  }

  console.log(`L'ARN ${arn0} donne la séquence d'acides aminés suivante :`);
  spliter(arn0);
  console.log(`\n\nL'ARN ${arn1} donne la séquence d'acides aminés suivante :`);
  spliter(arn1);
  console.log(`\n\nL'ARN ${arn2} donne la séquence d'acides aminés suivante :`);
  spliter(arn2);
}
