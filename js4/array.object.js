function arrayToObject(array) {
    let newObject ={};

    let arrStrings = [];
    let arrNumber = [];
    let arrBoolean = [];

    array.forEach(function(element) {
        switch(typeof element) {
            case "string": arrStrings.push(element);
            break;
            case "number": arrNumber.push(element);
            break;
            case "boolean": arrBoolean.push(element);
            break;
        }
    });

    newObject.strings = arrStrings;
    newObject.numbers = arrNumber;
    newObject.booleans = arrBoolean;

    return newObject;
}

let input = [-1, 5, "cat", false, 10.2, true, "dog"];

console.log(arrayToObject(input));
document.write(
    "Strings: " + arrayToObject(input).strings + "<br>",
    "Numbers: " + arrayToObject(input).numbers.entries() + "<br>",
    "Booleans: " + arrayToObject(input).booleans.entries() + "<br>"
);
