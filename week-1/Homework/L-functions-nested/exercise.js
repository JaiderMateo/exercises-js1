
let students = 65;
let mentors = 35;
let total = students + mentors;
function Percentage(cantidad, total){
    return Math.round((cantidad/total) * 100);
}
function Greetings(){
    console.log("percentage students: " + Percentage(students, total) + "%");
    console.log("percentage mentors: " + Percentage(mentors, total) + "%");
}
Greetings();