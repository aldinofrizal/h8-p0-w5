function meleeRangedGrouping (str) {
    //your code here
    if(str === '')return []
    var arrStr = str.split(',')
    var heroArr = []
    for(var i = 0; i < arrStr.length; i++){
        var TemporaryHeroArr = arrStr[i].split('-');
        heroArr.push(TemporaryHeroArr);
        TemporaryHeroArr = [];
    }
    var ranged = []; var melee = [];
    for(var i = 0; i < heroArr.length; i++){
        if(heroArr[i][1] === 'Ranged')ranged.push(heroArr[i][0])
        else if (heroArr[i][1] === 'Melee')melee.push(heroArr[i][0])
    }
    return [ranged,melee];
}
  

// TEST CASE
  console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
  // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
  console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
//   // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
  console.log(meleeRangedGrouping('')); // []