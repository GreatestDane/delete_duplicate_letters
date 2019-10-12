const string = "AbraCadABraAlakAzam";
// const badString = "123ASDASD$%$#$23elkajsdf";
// const secondString = "IiAaMmAaMmaann";

function removeDuplicates(input) {
    if (!/[^a-z]/i.test(input)) { // Regex to make sure string is all letters

        console.log("String is all letters");

        const array = input.split(''); // Creates new array from input, splits where there is no space
        let dedupeObj = {};  // Empty object to check against reoccuring letters
        let dedupedArray = [];  // Empty array to create a new string
        array.forEach(letter => {
            if (!dedupeObj[letter.toLowerCase()]) { // Check each index of array and see if a key with that value (ie: "A" "a" "B" "b") appears in the object
                dedupedArray.push(letter) // If the value of index does not exist in object, push to new array
            }
            dedupeObj[letter.toLowerCase()] = true // If value does not exist as key in object, create a new key with this index's value
        });

        console.log(`Your new string is: ${dedupedArray.join("")}`)
        return dedupedArray.join(''); // finally, return the array joined together as a string 

    } else {
        console.log("String is not all letters!");
        return false;
    };
};


removeDuplicates(string);
// removeDuplicates(badString);
// removeDuplicates(secondString);