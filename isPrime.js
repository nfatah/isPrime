function isPrime(num) {
  num = Math.abs(num);// change num to absolute
  for(var i = 2; i < 10; i++){
    if(num > 9 && num % i === 0){return false;}
    if(num % i === 0){// for num < 10
      return i === num; //return true for prime num
    }
   }
  return num !== 1;// return false if num is 1
}
