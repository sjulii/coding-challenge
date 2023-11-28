function oneTwoThree(n) {
    // justDoIt!!
  if (n==0)
    return ["0","0"]
  let one_str= "1".repeat(n)
  let num=one_str.length
  let plus_str=""
  while(num>9){
    plus_str+=9
    num-=9
  }
  plus_str+=num
    return [plus_str,one_str];
}