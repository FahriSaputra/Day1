function balikString(x) {
  // you can only write your code here!
  var x = "Hello World!"
  var kataBalik = '';
  
  for (var i= x.length -1; i >= 0; i --){
    
    kataBalik += x[i];
    
  }
  
  return kataBalik;
  
}
console.log(balikString())