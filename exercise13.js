function sorting(arrNumber) {
    // code di sini
    for (var i = 0; i < arrNumber.length-1; i++)
        if(arrNumber[i]>arrNumber[i+1])arrNumber.splice(i,2,arrNumber[i+1],arrNumber[i])
    for (var i = 0; i < arrNumber.length-1; i++)
        if(arrNumber[i] > arrNumber[i+1])return sorting(arrNumber)
    return arrNumber
}
  
  function getTotal(arrNumber) {
    if (arrNumber.length === 0)return ''
    var bigValue = [];
    for(var i = arrNumber.length-1; i >= 0; i--){
        if(arrNumber[i] === arrNumber[i-1])bigValue.push(arrNumber[i])
        else break;
    }
    var amount = bigValue.length + 1;
    return 'angka paling besar adalah ' + arrNumber[arrNumber.length-1] + ' dan jumlah kemunculan sebanyak ' + amount + ' kali'
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
  ''