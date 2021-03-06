let sucio = [100, "iSMael", 55, 45, "sANyiA", 66,"1JaMEs", "eLAmIn", 23, "IsMael", 67, 19,"ElaMIN"];
function cleaner(array){
    let nueva = array.filter(element => (typeof(element) === 'string'));
    return nueva.map(element => element.toUpperCase())
}

var limpio = cleaner(sucio);
console.log(limpio);