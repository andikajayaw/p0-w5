function totalDigitRekursif(angka) {
    // you can only write your code here!
    // var result = 0
    var strNumber = String(angka);
    // console.log(strNumber);
    // for (var i = 0; i < strNumber.length; i++) {
    //     console.log(strNumber[i])
    //     result += Number(strNumber[i])
    // }
    // return result

    if (strNumber.length === 1) {
        return Number(strNumber[0])
    } else {
        return Number(strNumber[0]) + totalDigitRekursif(Number(strNumber.slice(1)));
    }

    // result += totalDigitRekursif(strNumber)

    // return result

}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5