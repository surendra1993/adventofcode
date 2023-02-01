const fs = require('fs')
 
// Reading input from input file
// Input format
// 1000
// 2000
// 3000

// 4000

// 5000
// 6000

// 7000
// 8000
// 9000

// 10000
fs.readFile('input.txt', 'utf-8', (err, data) => {
    // If there was an error in reading input from file
    if (err) throw err;

    item_calories = data.toString().split('\n');
    // Adding empty strings at teh end of the list to represent to last elve boundry
    // [
    //   '1000', '2000',  '3000',
    //   '',     '4000',  '',
    //   '5000', '6000',  '',
    //   '7000', '8000',  '9000',
    //   '',     '10000', ''
    // ]
    d = item_calories.push("")

    totalCalorie = 0;
    elvis_count = 1;
    calories = [];

    for(item_calorie of item_calories){
        if(item_calorie == ""){
            //if calorie is empty
            calories.push({"elvis": elvis_count, "totalCalorie": totalCalorie});
            totalCalorie = 0;
            elvis_count ++;
            continue;
        }
        else{
            totalCalorie += Number(item_calorie)
        }
    }
    //  returns Top 3 Elvis and max calorie objects from list of objects
    // { elvis: 4, totalCalorie: 24000 }

    max_calorie_elvis =  calories
                        .slice()
                        .sort((a, b) => {
                            return b.totalCalorie - a.totalCalorie
                        })
                        .slice(0, 3);


    // console.log(max_calorie_elvis)

    //  Task 1 Return max totalCalorie and elvis 
    // { elvis: 80, totalCalorie: 69836 } - Eighty th elvis has max calories of 69836
    max_calorie = max_calorie_elvis[0].totalCalorie;
    console.log(max_calorie, "Task 1")

    // Task 2 Add Top 3 totalCalorie of Elvis

    max_three_caloris = max_calorie_elvis[0].totalCalorie + max_calorie_elvis[1].totalCalorie + max_calorie_elvis[2].totalCalorie
    console.log(max_three_caloris, "Task 2")


    // return max_calorie_elvis;

})
