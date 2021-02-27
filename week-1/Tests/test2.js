function animo (feeling){
    if(feeling == "happy"){
        return "Good job, you're doing great!"
    } else if(feeling == "sad"){
        return "Every cloud has a silver lining"
    } else if(typeof feeling == 'number'){
        return "Beep beep boop"
    }else{
        return "I'm sorry, I'm still learning about feelings!"
    }
}
animo(3)