const fs = require('fs')

fs.readFile('input.txt', 'utf-8', (err, data) => {

    if (err) throw err;
    camp_assignments = data.toString().split('\n');

    // console.log(camp_assignments)
    camp_cleanup(camp_assignments)
})

function camp_cleanup(camp_assignments){
    assignment_paires = [];

    for(pages of camp_assignments){
        first_section = pages.split(",")[0];
        second_section = pages.split(",")[1];

        first_section_starting_page = Number(first_section.substring(0, first_section.indexOf("-")));
        first_section_ending_page = Number(first_section.substring(first_section.indexOf("-") + 1, first_section.length));

        second_section_starting_page = Number( second_section.substring(0, second_section.indexOf("-")));
        second_section_ending_page = Number(second_section.substring(second_section.indexOf("-") + 1, second_section.length));

        // console.log(first_section, "first_section")
        // console.log(second_section, "second_section")

        task1(first_section_starting_page, first_section_ending_page, second_section_starting_page, second_section_ending_page)
    }
    console.log(assignment_paires.length);
    return assignment_paires.length;
}

function task1(first_section_starting_page, first_section_ending_page, second_section_starting_page, second_section_ending_page){
    if(((first_section_starting_page <= second_section_starting_page) && (first_section_ending_page >= second_section_ending_page)) || (second_section_starting_page <= first_section_starting_page) && (second_section_ending_page >= first_section_ending_page)){
        //  Inside the range
        pair = first_section_starting_page + "-" + first_section_ending_page;
        assignment_paires.push(pair)
    }
}