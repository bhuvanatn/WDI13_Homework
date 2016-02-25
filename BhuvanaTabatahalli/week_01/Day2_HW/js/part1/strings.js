var DrEvil = function(amt){
  if (amt < 1000000)
  {
    console.log(amt);
    return amt;
  }else {
    console.log(amt + " (pinky)");
    return amt ;
  }
}
DrEvil(10);
DrEvil(1000000);
// mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
var mixUP = function(str1, str2){
  str =  str2.slice(0,2) + str1[2] +" "+  str1.slice(0,2) + str2.slice(2,6);
  console.log(str);
  return str;

}
mixUP('mix', 'pod');
mixUP('dog', 'dinner');

var FixStart = function(str){
for (i= 0; i < str.length; i ++){
  console.log(str[i]);
}

}
FixStart('Bhuvana');
