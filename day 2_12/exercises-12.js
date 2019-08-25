function tentukanDeretGeometri(arr) {
  var hasilBagiDeret = arr[1] / arr[0];
  var deretGeometri = true;
  //console.log(selisihDeret);
  for(var i = 1; i < arr.length -1; i++) {
    //console.log(arr[i+1]-arr[i]);
    var bagiSementara = arr[i+1]/arr[i];
    if(bagiSementara !== hasilBagiDeret) {
      deretGeometri = false;
    }
  }
  return deretGeometri;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false