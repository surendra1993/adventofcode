const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {
    // If there was an error in reading input from file
    if (err) throw err;

    input_strings = data.toString().split('\n');

    // console.log(input_strings);
    
    // { 'p', 'L', 'P', 'v', 't', 's' } - Using set to avoid duplicate values
    same_item_type = new Set();
    sum = 0;
    
    for(string of input_strings){
        // Since given rucksack always has the same number of items in each of its two compartments
        first_compartment = string.slice(0, Math.floor(string.length / 2))
        second_compartment = string.slice(Math.floor(string.length / 2), string.length);
        // console.log(first_compartment, "first_compartment")
        // console.log(second_compartment, "second_compartment")
    
        char_list = [];
        
        validate_string(first_compartment, char_list, same_item_type, 1);
        validate_string(second_compartment, char_list, same_item_type, 2);
    }
    
    // console.log(same_item_type)
    
    same_item_type.forEach(num => {
        sum += num;
      });
    
    //  Final returning value
    // console.log(sum)  
    return sum;
    
})

function validate_string(string, char_list, item_type, counter){
    for(char of string){
        if(char_list.includes(char) && counter == 2){
            priority = get_priority(char);
            // console.log(priority);

            item_type.add(priority);
        }
        else if (counter == 1){
            char_list.push(char);
        }
    }
}

function get_priority(char){
    if(char == char.toUpperCase()){
        // Char is Upper case. Eg: A
        // A - Z = priority between 27 and 52. To cal priority for char. Subtracting 38 from ASCII code
        ascii = char.charCodeAt(0);
        priority = ascii - 38;
    }
    if(char == char.toLowerCase()){
        // Char is lower case. Eg: a
        // a - z = priority between 1 and 26. To cal priority for char. Subtracting 96 from ASCII code
        ascii = char.charCodeAt(0);
        priority = ascii - 96
    }
    return priority;
}
