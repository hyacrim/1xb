function calculer() {
    var montant = document.getElementById("montant").value;
    var cote = document.getElementById("cote").value;
    var multiple = document.getElementById("multiple").value;
    //donner
  var mont = (montant * 2) / 2;
  var multiple = multiple;
  var cote1 = cote;
   //COTE
   var cote2 = cote1;
   var cote3 = cote2;
   var cote4 = cote3;
   var cote5 = cote3;
   var cote6 = cote3;
   var cote7 = cote3;
   var cote8 = cote3;
   var cote9 = cote3;
   var cote10 = cote3;
   var cote11 = cote3;
   //calcul de montant
   var mon2 = Math.floor(mont * multiple);
   var mon3 = Math.floor(mon2 * multiple);
   var mon4 = Math.floor(mon3 * multiple);
   var mon5 = Math.floor(mon4 * multiple);
   var mon6 = Math.floor(mon5 * multiple);
   var mon7 = Math.floor(mon6 * multiple);
   var mon8 = Math.floor(mon7 * multiple);
   var mon9 = Math.floor(mon8 * multiple);
   var mon10 = Math.floor(mon9 * multiple);
   var mon11 = Math.floor(mon10 * multiple);

   //calcul de gagner
   var ga1 = Math.floor(cote1 * mont);
   var ga2 = Math.floor(cote1 * mon2);
   var ga3 = Math.floor(cote2 * mon3);
   var ga4 = Math.floor(cote1 * mon4);
   var ga5 = Math.floor(cote1 * mon5);
   var ga6 = Math.floor(cote1 * mon6);
   var ga7 = Math.floor(cote2 * mon7);
   var ga8 = Math.floor(cote1 * mon8);
   var ga9 = Math.floor(cote1 * mon9);
   var ga10 = Math.floor(cote1 * mon10);
   var ga11 = Math.floor(cote2 * mon11);

   //TOTAL
   var s1 = Math.floor(mont);
   var s2 = Math.floor(s1 + mon2);
   var s3 = Math.floor(s2 + mon3);
   var s4 = Math.floor(s3 + mon4);
   var s5 = Math.floor(mont + mon2 + mon3 + mon4 + mon5);
   var s6 = Math.floor(mont + mon2 + mon3 + mon4 + mon5 + mon6);
   var s7 = Math.floor(mont + mon2 + mon3 + mon4 + mon5 + mon6 + mon7);
   var s8 = Math.floor(mont + mon2 + mon3 + mon4 + mon5 + mon6 + mon7 + mon8);
   var s9 = Math.floor(mont + mon2 + mon3 + mon4 + mon5 + mon6 + mon7 + mon8 + mon9);
   var s10 = Math.floor(mont + mon2 + mon3 + mon4 + mon5 + mon6 + mon7 + mon8 + mon9 + mon10);
   var s11 = Math.floor(mont + mon2 + mon3 + mon4 + mon5 + mon6 + mon7 + mon8 + mon9 + mon10 + mon11);

   //calcul de gain
   var g1 = Math.floor(ga1 - (mont));
   var g2 = Math.floor(ga2 - s2);
   var g3 = Math.floor(ga3 - s3);
   var g4 = Math.floor(ga4 - s4);
   var g5 = Math.floor(ga5 - s5);
   var g6 = Math.floor(ga6 - s6);
   var g7 = Math.floor(ga7 - s7);
   var g8 = Math.floor(ga8 - s8);
   var g9 = Math.floor(ga9 - s9);
   var g10 =Math.floor( ga10 - s10);
   var g11 = Math.floor(ga11 - s11);

   

   //affichage cote
   document.getElementById("co").value = cote1;
   document.getElementById("co2").value = cote2;
   document.getElementById("co3").value = cote3;
   document.getElementById("co4").value = cote4;
   document.getElementById("co5").value = cote5;
   document.getElementById("co6").value = cote6;
   document.getElementById("co7").value = cote7;
   document.getElementById("co8").value = cote8;
   document.getElementById("co9").value = cote9;
   document.getElementById("co10").value = cote10;
   document.getElementById("co11").value = cote11;
   //montant
   document.getElementById("mon1").value = mont;
   document.getElementById("mon2").value = mon2.toString();
   document.getElementById("mon3").value = mon3.toString();
   document.getElementById("mon4").value = mon4.toString();
   document.getElementById("mon5").value = mon5.toString();
   document.getElementById("mon6").value = mon6.toString();
   document.getElementById("mon7").value = mon7.toString();
   document.getElementById("mon8").value = mon8.toString();
   document.getElementById("mon9").value = mon9.toString();
   document.getElementById("mon10").value = mon10.toString();
   document.getElementById("mon11").value = mon11.toString();
   //gagner
   document.getElementById("ga1").value = ga1;
   document.getElementById("ga2").value = ga2;
   document.getElementById("ga3").value = ga3;
   document.getElementById("ga4").value = ga4;
   document.getElementById("ga5").value = ga5;
   document.getElementById("ga6").value = ga6;
   document.getElementById("ga7").value = ga7;
   document.getElementById("ga8").value = ga8;
   document.getElementById("ga9").value = ga9;
   document.getElementById("ga10").value = ga10;
   document.getElementById("ga11").value = ga11;

   //gain
   document.getElementById("g1").value = g1;
   document.getElementById("g2").value = g2;
   document.getElementById("g3").value = g3;
   document.getElementById("g4").value = g4;
   document.getElementById("g5").value = g5;
   document.getElementById("g6").value = g6;
   document.getElementById("g7").value = g7;
   document.getElementById("g8").value = g8;
   document.getElementById("g9").value = g9;
   document.getElementById("g10").value = g10;
   document.getElementById("g11").value = g11;

   //somme total
   document.getElementById("s1").value = s1;
   document.getElementById("s2").value = s2;
   document.getElementById("s3").value = s3;
   document.getElementById("s4").value = s4;
   document.getElementById("s5").value = s5;
   document.getElementById("s6").value = s6;
   document.getElementById("s7").value = s7;
   document.getElementById("s8").value = s8;
   document.getElementById("s9").value = s9;
   document.getElementById("s10").value = s10;
   document.getElementById("s11").value = s11;


   



};

function reset(){
    
   document.getElementById("cote").value = null;
   document.getElementById("montant").value = null;
   document.getElementById("multiple").value = null;

};


function resetall(){

    document.getElementById("cote").value = null;
   document.getElementById("montant").value = null;
   document.getElementById("multiple").value = null;

  //affichage cote
  document.getElementById("co").value = null;
  document.getElementById("co2").value = null;
  document.getElementById("co3").value = null;
  document.getElementById("co4").value = null;
  document.getElementById("co5").value = null;
  document.getElementById("co6").value = null;
  document.getElementById("co7").value = null;
  document.getElementById("co8").value = null;
  document.getElementById("co9").value = null;
  document.getElementById("co10").value = null;
  document.getElementById("co11").value = null;
  //montant
  document.getElementById("mon1").value = null;
  document.getElementById("mon2").value = null;
  document.getElementById("mon3").value = null;
  document.getElementById("mon4").value = null;
  document.getElementById("mon5").value = null;
  document.getElementById("mon6").value = null;
  document.getElementById("mon7").value = null;
  document.getElementById("mon8").value = null;
  document.getElementById("mon9").value = null;
  document.getElementById("mon10").value = null;
  document.getElementById("mon11").value = null;
  //gagner
  document.getElementById("ga1").value = null;
  document.getElementById("ga2").value = null;
  document.getElementById("ga3").value = null;
  document.getElementById("ga4").value = null;
  document.getElementById("ga5").value = null;
  document.getElementById("ga6").value = null;
  document.getElementById("ga7").value = null;
  document.getElementById("ga8").value = null;
  document.getElementById("ga9").value = null;
  document.getElementById("ga10").value = null;
  document.getElementById("ga11").value = null;

  //gain
  document.getElementById("g1").value = null;
  document.getElementById("g2").value = null;
  document.getElementById("g3").value = null;
  document.getElementById("g4").value = null;
  document.getElementById("g5").value = null;
  document.getElementById("g6").value = null;
  document.getElementById("g7").value = null;
  document.getElementById("g8").value = null;
  document.getElementById("g9").value = null;
  document.getElementById("g10").value = null;
  document.getElementById("g11").value = null;

  //somme total
  document.getElementById("s1").value = null;
  document.getElementById("s2").value = null;
  document.getElementById("s3").value = null;
  document.getElementById("s4").value = null;
  document.getElementById("s5").value = null;
  document.getElementById("s6").value = null;
  document.getElementById("s7").value = null;
  document.getElementById("s8").value = null;
  document.getElementById("s9").value = null;
  document.getElementById("s10").value = null;
  document.getElementById("s11").value = null;


};