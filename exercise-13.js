function sorting(arrNumber) {
    // code di sini
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i < arrNumber.length; i += 1) {
            if (arrNumber[i - 1] > arrNumber[i]) {
                done = false;
                var tmp = arrNumber[i - 1];
                arrNumber[i - 1] = arrNumber[i];
                arrNumber[i] = tmp;
            }
            if (i % Number(strNumber) === 0) {
                console.log()
            }
        }
    }
    return arrNumber;
}

function getTotal(arrNumber) {
    if (arrNumber == '') {
        return ''
    }
    total = 0

    for (var i = arrNumber.length - 1; i >= 0; i--) {
        if (arrNumber[i] === arrNumber[arrNumber.length - 1]) {
            total++
        }
    }
    return `\n angka paling besar adalah ${arrNumber[arrNumber.length - 1]} dan jumlah kemunculan sebanyak ${total} kali`
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''