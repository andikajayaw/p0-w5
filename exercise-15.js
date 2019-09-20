function makanTerusRekursif(waktu) {
    // you can only write your code here!
    // var result = 0

    // for (var i = waktu; i >= 0; i -= 15) {
    //     result += 1
    // }
    // return result

    var result = 1

    if (waktu <= 0) {
        return 0
    }
    result += makanTerusRekursif(waktu - 15)

    return result
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0