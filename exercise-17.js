/**
 * 
 * ALGORITMA
 * 
 * 1. Mencari perkalian yang akan menghasilkan hasil perkalian dengan digit terkecil
 * 2. Menentukan base case untuk menjadi pembatasnya
 */
function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var strAngka = String(angka)

    if (strAngka.length === 1) {
        console.log('angka: ', angka)
        return angka
    } else {
        var kali = 1
        for (var i = 0; i < strAngka.length; i++) {
            kali = kali * Number(strAngka[i])
            console.log('ini angka kali: ', strAngka[i])
        }
        return kaliTerusRekursif(kali)
    }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
// 6 * 6 = 36
// 3 * 6 = 18
// 1 * 8 = 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6