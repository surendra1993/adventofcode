input_strings = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw"
]

same_item_type = [];

for(string of input_strings){
    // Since given rucksack always has the same number of items in each of its two compartments
    first_compartment = string.slice(0, Math.floor(string.length / 2))
    second_compartment = string.slice(Math.floor(string.length / 2), string.length);


    console.log(first_compartment, "first_compartment")
    console.log(second_compartment, "second_compartment")

    set = [];
    
    validate_string(first_compartment, set, same_item_type, 1);
    validate_string(second_compartment, set, same_item_type, 2);

    console.log(set);
}

console.log([...new Set(same_item_type)])

function validate_string(string, set, item_type, counter){
    for(char of string){
        if(set.includes(char) && counter == 2){
            item_type.push(char);
        }
        else if (counter == 1){
            set.push(char);
        }
    }
}