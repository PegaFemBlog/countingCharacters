var portalString = "The cake is a lie";
countingCharacters(portalString);

function countingCharacters(stringToCount) {
	// The length property has been mentioned in
	//the Logging Letter Exercise in Lesson 4
	console.log (stringToCount + " has " + stringToCount.length + " charcters.");
}

function countingCharacters2(stringToCount, characterToFind) {
	var characterCount = 0;
	for (var characterPosition = 0; characterPosition < stringToCount.length; characterPosition++) {
		if (stringToCount[characterPosition] == characterToFind) { characterCount++;
		}
	}
	console.log("String to search in: " + stringToCount);
	console.log("Character to find; " + characterToFind);
	console.log("Number of times the character apears: " + characterCount);
}
//str - string to search
//search - charcters to find in str
function countingCharacters3(str, search) {
	var count = 0; //number of 'search' found
	var numChars = search.length;
	var lastIndex = str.length - numChars;
	//loop will go through the string searching for 'search' characters
	for(var index = 0; index <= lastIndex; index++) {
		var current = str.substring(index, index + numChars);
		if (current == search) {
			count++;
		}
	}
	console.log("String to search in: " + str);
	console.log("Charcter to find: " + search);
	console.log("Number of times the character appears: " + count);
}
	
	
	