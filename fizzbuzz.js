function getFizzBuzzValue(num) {
    var result = "";
    if (num % 3 === 0)
        result += "fizz";
    if (num % 5 === 0)
        result += "buzz";
    return result || num.toString();
}
function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        console.log(getFizzBuzzValue(i));
    }
}
fizzBuzz();
