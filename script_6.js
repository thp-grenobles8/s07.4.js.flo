function script_6(){

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
  var ARN = 'CCGUCGUUGCGCUACAGC';
  let ARNSplit = ARN.match(/.../g);
  let acideAmine = [];
  for (var i = 0; i < ARNSplit.length; i++) {
    acideAmine.push(codon[ARNSplit[i]]);
  }
  console.log(`L'ARN ${ARN} donne la séquence d'acides aminés suivante : \n\n`);
  console.log(acideAmine.join("-"));
}
