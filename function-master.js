//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
    // should take an object and return its values into an array
    return Object.values(object); //array method return
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    // Should take an object and return all its string values separated 
    // by a space
    var tempArr = Object.keys(object); // create temp array of keys
    let newString = tempArr.join(' ') // create new string with join
    return newString; 
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //Should take an object and return all its string values in a string 
    //each separated with a space
    var stArr = [];
    var tempArr = Object.values(object); //extract values from objects
        for (i = 0; i < tempArr.length; i++){ //loop to search
            maybeString = tempArr[i]; //search variable declaration
            if (typeof maybeString === 'string') { //check for string
                stArr.push(maybeString);
            }
        var newString = stArr.join(' '); //create item to return         
        }
        return newString; //return new string
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //Should take one argument and return 'array' if its an array and 
    //'object' if its an object"
    if (Array.isArray(collection) === true) { //check if object is array
        return "array";     //return "array" if so
     } else if (typeof collection === "object"){ // check if object
        return "object";    //return "object" if so
    }
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    // Should take a string of one word, and return the word with its 
    // first letter capitalized
    var capitalLetter = string.charAt(0);
    capitalLetter = capitalLetter.toUpperCase();
    var restOfWord = string.slice(1);
    return capitalLetter + restOfWord;
}
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //Should take a string of words and return a string with all 
    //the words capitalized
    var stArr = [];           //create function scoped storage array
    var strngArr = string.split(' ');//declare function scoped split string array
       for (let i = 0; i < strngArr.length; i++){            //loop through
    stArr.push(strngArr[i][0].toUpperCase() + strngArr[i].slice(1));
}
    stArr= stArr.join(' ');
    return stArr;
}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    //Should take an object with a name property and return 'Welcome <Name>!'
    return  "Welcome " + object.name[0].toUpperCase() + object.name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
    //Should take an object with a name an a species and return '<Name> is a <Species>
    return object.name[0].toUpperCase() + object.name.slice(1) + 
    " is a " + 
    object.species[0].toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    //Should take an object, if this object has a noises array return 
    //them as a string separated by a space, if there are no noises return 'there are no noises'
    if (Array.isArray(object.noises) && object.noises.length > 0){
        return object.noises.join(' '); 
    } else {
        return "there are no noises";
    }
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //Should take a string of words and a word and return true if <word> 
    //is in <string of words>, otherwise return false.
    let wrdArr = string.split(' ');
    for (i =0; i < wrdArr.length; i++){
        if (wrdArr[i] === word){
            return true;
    } 
}       return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //Should take a name and an object and add the name to the object's
    // friends array then return the object
    object.friends[object.friends.length] = name;
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //Should take a name and an object and return true if <name> is a
    //friend of <object> and false otherwise"
    if (Array.isArray(object.friends)){
        return object.friends.includes(name);
    } else {
        return false;
    }
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    //Should take a name and a list of people, and return a list of 
    //all the names that <name> is not friends with
        let stArr = []; // Create storage array
        for (let person of array) { //use for of loop to check
            if (person.name !== name){ //if the name does not equal 
            if (!person.friends.includes(name)) { 
                stArr.push(person.name);
            }
        }
        }
        return stArr;
    }

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    // Should take an object, a key and a value. Should update the 
    // property <key> on <object> with new <value>. If <key> does not 
    // exist on <object> create it.
    object[key] = value;//adds or updates key:value within object
    return object;//returns object
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    // Should take an object and an array of strings. Should remove 
    // any properties on <object> that are listed in <array>
        for (let i = 0; i < array.length; i++){//loops through array
            delete object[array[i]];//removes key from object if in array
        }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    //Should take an array and return an array with all the duplicates removed
    return [...new Set(array)]; //uses spread and set to compare dups and return
//set is a new method I am trying, like a box with no duplicates and spread puts
//them back into an array? I think?
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}