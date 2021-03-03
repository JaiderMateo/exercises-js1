let word = 'Amteo';
let type1 = "Manager";
let type2 = "Admin";
const vowelList ='AEIOUaeiou';

function CheckStartsCapital(word){
    return word.charAt(0) === word.charAt(0).toUpperCase();
}

function CheckVowel(word){
    return (vowelList.indexOf(word.charAt(0)) !== -1);
}

function check(word, type){
    if(type === 'Manager' || type === 'Admin'){
        console.log("user valid");
    }else 
    if(CheckStartsCapital(word) && CheckVowel(word) && (word.length >= 5) && (word.length <= 10)){
        console.log("user valid");
    }else{
        console.log("user invalid");
}
}
check(word, "normal");