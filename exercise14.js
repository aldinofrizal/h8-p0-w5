function changeVocals(str){
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'
    var strOut = ''
    for(var k = 0; k < str.length; k++){
        if(str[k] === 'a' || str[k] === 'i' || str[k] === 'u' || str[k] === 'e' || str[k] === 'o'){
            for(var j = 0; j < alphabet.length; j++){
                if(str[k] === alphabet[j])strOut += alphabet[j+1]
            }
        }else if(str[k] === 'A' || str[k] === 'I' || str[k] === 'U' || str[k] === 'E' || str[k] === 'O'){
            for(var j = 0; j < alphabet.length; j++){
                if(str[k] === alphabet[j].toUpperCase())strOut += alphabet[j+1].toUpperCase();
            }
        }else strOut += str[k]
    }
    return strOut
}

function reverseWord(str){
    var strOut = ''
    for(var i = str.length-1; i >= 0; i--){
        strOut += str[i];
    }
    return strOut;
}

function setLoweUpperCase(str){
    var strOut = ''
    for(var i = 0; i < str.length; i++){
        if(str[i].toUpperCase() === str[i])strOut+=str[i].toLowerCase()
        else if(str[i].toLowerCase() === str[i])strOut+=str[i].toUpperCase()
    }
    return strOut;
}

function removeSpace(str){
    var strOut = ''
    for(var i = 0; i < str.length; i++){
        if(str[i] !== ' ')strOut += str[i] 
    }   
    return strOut
}

function passwordGenerator(name){
    if(name.length < 5)return 'Minimal karakter yang diinputkan adalah 5'
    else return removeSpace(setLoweUpperCase(reverseWord(changeVocals(name))))
}


console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'