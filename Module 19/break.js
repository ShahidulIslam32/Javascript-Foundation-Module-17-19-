
// var startingNumber = 0;

// while(startingNumber <= 10){
//     console.log(startingNumber);
//     startingNumber++;
//     if(startingNumber == 6){
//         console.log('Limit Up !!!');
//         break;
//     }
// }

var numbers = [11,20,23,30,33,40,70]

for (var i=0; i < numbers.length; i++){
    var number = numbers[i]
    if(number > 80){
        break;
    }
    console.log(number)
}