let factors1 = new Array(1, 0.1, 0.01, 0.001);
let factors2 = new Array(10, 1, 0.1, 0.01);
let factors3 = new Array(100, 10, 1, 0.1);
let factors4 = new Array(1000, 100, 10, 1);
//let factors5 = new Array(1000000, 100000, 10000, 1000, 1);
let factors = new Array(factors1,factors2,factors3,factors4);

function convertUnit()
{
  // Grab the correct conversion factor from our arrays
  fromIndex = document.lengthCon.fromUnit.selectedIndex;
  toIndex = document.lengthCon.toUnit.selectedIndex;
  factor = factors[fromIndex][toIndex];

  // Check the input box to make sure we have a valid number
  if(isNaN(document.lengthCon.fromValue.value)){
    document.getElementById("toValue").innerHTML = "Konvertuoti galima tik skaičius.";
  }

  // Output the converted number...last number on last line
  else {
    document.getElementById("toValue").innerHTML =Math.round(document.lengthCon.fromValue.value*factor*1000000000)/1000000000;
  }
  if (toIndex==0){
      document.getElementById("toUnit").innerHTML = "mm.";
  }
  if (toIndex==1){
    document.getElementById("toUnit").innerHTML = "cm.";
  }
  if (toIndex==2){
  document.getElementById("toUnit").innerHTML = "dm.";
  }
  if  (toIndex==3){
  document.getElementById("toUnit").innerHTML = "m.";
  }
}


let factors11 = new Array(1, 0.01, 0.001, 0.000001);
let factors22 = new Array(100, 1, 0.01, 0.0001);
let factors33 = new Array(10000, 100, 1, 0.01);
let factors44 = new Array(1000000, 10000, 100, 1);
let fact2 = new Array(factors11,factors22,factors33,factors44);

function convertUnit2()
{
  // Grab the correct conversion factor from our arrays
  fromIndex2 = document.lengthCon2.fromUnit2.selectedIndex;
  toIndex2 = document.lengthCon2.toUnit2.selectedIndex;
  factor2 = fact2[fromIndex2][toIndex2];

  // Check the input box to make sure we have a valid number
  if(isNaN(document.lengthCon2.fromValue2.value)){
    document.getElementById("toValue2").innerHTML = "Konvertuoti galima tik skaičius.";
  }

  // Output the converted number...last number on last line
  else {
    document.getElementById("toValue2").innerHTML =Math.round(document.lengthCon2.fromValue2.value*factor2*1000000000)/1000000000;
  }
  if (toIndex2==0){
      document.getElementById("toUnit2").innerHTML = "mm&sup2";
  }
  if (toIndex2==1){
    document.getElementById("toUnit2").innerHTML = "cm&sup2.";
  }
  if (toIndex2==2){
  document.getElementById("toUnit2").innerHTML = "dm&sup2.";
  }
  if  (toIndex2==3){
  document.getElementById("toUnit2").innerHTML = "m&sup2.";
  }
}


let factors111 = new Array(1, 0.001, 0.000001, 0.000000001);
let factors222 = new Array(1000, 1, 0.001, 0.000001);
let factors333 = new Array(1000000, 1000, 1, 0.0001);
let factors444 = new Array(1000000000, 1000000, 1000, 1);
let fact3 = new Array(factors111,factors222,factors333,factors444);

function convertUnit3()
{
  // Grab the correct conversion factor from our arrays
  fromIndex3 = document.lengthCon3.fromUnit3.selectedIndex;
  toIndex3 = document.lengthCon3.toUnit3.selectedIndex;
  factor3 = fact3[fromIndex3][toIndex3];

  // Check the input box to make sure we have a valid number
  if(isNaN(document.lengthCon3.fromValue3.value)){
    document.getElementById("toValue3").innerHTML = "Konvertuoti galima tik skaičius.";
  }

  // Output the converted number...last number on last line
  else {
    document.getElementById("toValue3").innerHTML =Math.round(document.lengthCon3.fromValue3.value*factor3*1000000000)/1000000000;
  }
  if (toIndex3==0){
      document.getElementById("toUnit3").innerHTML = "mm&sup3";
  }
  if (toIndex3==1){
    document.getElementById("toUnit3").innerHTML = "cm&sup3";
  }
  if (toIndex3==2){
  document.getElementById("toUnit3").innerHTML = "dm&sup3";
  }
  if  (toIndex3==3) {
  document.getElementById("toUnit3").innerHTML = "m&sup3";
  }
}