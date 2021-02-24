var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";
function Greeting(name){
    return "hello " + name;
}
function UpperCase(name){
    message = Greeting(name)
    console.log(message.toUpperCase())
}
UpperCase(mentor1);
UpperCase(mentor2);
UpperCase(mentor3);
UpperCase(mentor4);
UpperCase(mentor5);
