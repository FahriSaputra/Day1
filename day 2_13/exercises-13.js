function targetTerdekat(arr) {
  var arrX = [];
  var arrO = [];
  for (var i = 0; i<arr.length; i++){
    if(arr[i]==='o'){
      arrO.push(i);
    } else if(arr[i]==='x'){
      arrX.push(i);
    }
  }
  // console.log(arrO);
  // console.log(arrX);
  if(arrX===[]){
    return 0;
  } else {
    var arrF = [];
    for(var j = 0; j<arrO.length; j++){
      for(var k = 0; k<arrX.length; k++){
        var kurang = Math.abs(arrX[k]-arrO[j]);
        arrF.push(kurang);
      }
    }
    return arrF.sort(function(a,b){return a-b})[0];
  }
}
// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
