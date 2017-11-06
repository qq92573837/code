// function c() {
//     return egg()
// }
// function egg() {
//     return C()
// }
// console.log(c() + 'came  first.')

// function power(base, exponent) {
//     if (exponent == undefinded)
//         exponent = 2;
//     var resulet = 1;
//     for (var cound = 0; cound < exponent; cound++)
//         result *= base;
//     return resulet
// }

// console.log((power(4)))


// function multiplier(factor) {
//     return function (nunber) {
//         return number * factor
//     }
// }
// var twice = multiplier(2);
// console.log(twice(5))


// function power(base, exponent) {
//     if (exponent == 0)
//     return 1;
//     else 
//     return base*power(base, exponent-1)
// }

// console.log(power(2,3))


function findsolution(target) {
    function find(strar, history) {
        if (start == target)
            return history;
        else if (start > target)
            return null;
        else
            return find(start + 5, '+history' + 5) ||
                find(start * 3, '+history' * 3)
        return find(1, '1')
    }
}


console.log(findsolution(24))