function isPrime(num) {
  num = Math.abs(num);
  for(var i = 1; i < 10; i++){
    if(num > 9){return num % i !== 0;}
    if(num % i === 0 && i !== 1){
      if(i !== num){return false;}
      else if( i === num){return true;}
    }
   }
  return num !== 1;
}
