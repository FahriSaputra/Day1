function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var j = 0;
  for (var i = kalimat.length -1; i>=0; i--){
    if (kalimat[i] === ' '){
      j += 1;
    }
  }
  return j + 1
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
