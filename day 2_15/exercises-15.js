function groupAnimals(animals) {
  var namaAkhir = [];

// membuat array kosong.
// melakukan looping pertama.
// membuat array sesuai kata awal kalimat
// menghilangkan kancil
  for ( var i = 0; i < animals.length; i++) {
    //namaAkhir.push([]);
    
    var animalA = [];
    var animalC = [];
    var animalK = [];
    var animalU = [];
    
    for ( var j = 0; j < animals.length; j++) {
      if( animals[j][0] === 'u') {
        animalU.push(animals[j]);
      }else if(animals[j][0] === 'a') {
        animalA.push(animals[j]);
      } else if( animals[j][0] === 'c' ) {
        animalC.push(animals[j]);
      } else if( animals[j][0] === 'k' && animals[j][1] ==='u') {
        animalK.push(animals[j]);
      } 
    }
  }
  namaAkhir.push(animalA);
  namaAkhir.push(animalC);
  namaAkhir.push(animalK);
  namaAkhir.push(animalU);
  return namaAkhir;
}
// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
 console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]

