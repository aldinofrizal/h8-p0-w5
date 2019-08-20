function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if(angka < 10)
        return angka;
    else {
        var angkaAr = String(angka).split('')
        var multiply = 1;
        for(var i = 0;i < angkaAr.length; i++){
            multiply = multiply * Number(angkaAr[i])
        }
    }
    return kaliTerusRekursif(multiply)
}
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6