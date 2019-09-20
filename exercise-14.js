function changeVocals(str) {
    //code di sini
    var password = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            password += 'b'
        } else if (str[i] === 'i') {
            password += 'j'
        } else if (str[i] === 'u') {
            password += 'v'
        } else if (str[i] === 'e') {
            password += 'f'
        } else if (str[i] === 'o') {
            password += 'p'
        } else if (str[i] === 'A') {
            password += 'B'
        } else if (str[i] === 'I') {
            password += 'J'
        } else if (str[i] === 'E') {
            password += 'F'
        } else if (str[i] === 'U') {
            password += 'V'
        } else if (str[i] === 'O') {
            password += 'P'
        } else {
            password += str[i]
        }
    }
    return password
}

function reverseWord(str) {
    //code di sini
    var reversed = ''
    for (var i = 0; i < str.length; i++) {
        reversed += str[str.length - 1 - i]
    }
    return reversed
}

function setLowerUpperCase(str) {
    //code di sini
    var generator = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            generator += str[i].toLowerCase()
        } else if (str[i] === str[i].toLowerCase()) {
            generator += str[i].toUpperCase()
        }
    }
    return generator
}

function removeSpaces(str) {
    //code di sini
    var space = ''
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            space += str[i]
        }
    }
    return space
}

function passwordGenerator(name) {
    //code di sini
    // return (changeVocals(name) + reverseWord(name) + setLowerUpperCase(name) + removeSpaces(name))

    if (name.length <= 4) {
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var hasil = changeVocals(name)
    hasil = reverseWord(hasil)
    hasil = setLowerUpperCase(hasil)
    hasil = removeSpaces(hasil)

    return hasil
        // return changeVocals(reverseWord(setLowerUpperCase(removeSpaces(name))))

}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'