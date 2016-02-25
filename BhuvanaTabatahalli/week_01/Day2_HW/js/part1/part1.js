var squareNumber = function(number){
  result = number * number;
  console.log("The result of "+number + " is "+ result);
  return result;
}
squareNumber(3);

var halfNumber = function(number){
  result = number / 2 ;
  console.log("Half of " + number + " is " + result);
  return result;
}
halfNumber(5);

var percentOf = function(a, b){
  result =  (a / b) * 100;
  console.log(  a + "is " + result + " % of " + b );

}
percentOf(5, 50);

var areaOfCircle = function(radius){
  area = 2 * Math.PI * radius * radius;
console.log(" The area of a circle with radius"+ radius + " is " + area.toFixed(2));
  return area;

}
areaOfCircle(2);

var part2Function = function(num){
  result1 = halfNumber(num);
  result2 = squareNumber(result1);
  result3 = areaOfCircle(result2);
  result4 = percentOf(result3, result3);
  console.log("This is part2 function result: " + result);

}
part2Function(20);
