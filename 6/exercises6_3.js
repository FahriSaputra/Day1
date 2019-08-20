console.log('LOOPING GANJIL & GENAP')
for(var angka = 1; angka < 101; angka++) {
  if ( angka % 2 == 0) {
    console.log (angka +' - GENAP')
  }
  else if ( angka % 2 != 0){
    console.log (angka + ' - GANJIL')
  }
}

console.log('LOOPING COUNTER + 2')
for(var a = 1; a < 101; a+=2) {
  if ( a % 3 == 0) {
    console.log(a + ' 3 KELIPATAN ' + 3 )
  }
  else{
    console.log(a +  '" "' )
  }
}

console.log('LOOPING COUNTER + 5')
for(var b = 1; b < 101; b+=5) {
  if ( b % 6 == 0) {
    console.log(a + ' 6 KELIPATAN ' + 6 )
  }
  else{
    console.log(b + '" "' )
  }
}

console.log('LOOPING COUNTER + 9')
for(var c = 1; c < 101; c+=9) {
  if ( c % 10 == 0) {
    console.log(c + ' 10 KELIPATAN ' + 10 )
  }
  else{
    console.log(c+  '" "' )
  }
}