/* Presidents Challenge */
function printContent(arrayToPrint, index) {
	console.log("The value of i is: " + index);
	console.log("The value at Index is: " + arrayToPrint[index]);
}
function runPresidents(presidents) {
	for (var i in presidents) {
		console.log("The value of i is: " + i);
		console.log("The value at Index is: " + presidents[i]);
	}
}
//runPresidents(["Washington", "Adams", "Jefferson", "Madison", "Monroe"]);



/* String of Numbers Challenge */
function appendToString(string, toAppend) {
	var output = string += toAppend;
	return output;
}
function runStringOfNumbers(stringOfNumbers) {
	for (var i = 10; i <= 20; i++) {
		stringOfNumbers = appendToString(stringOfNumbers, i);
	}
	return stringOfNumbers;
}
var numberString = "";
numberString = runStringOfNumbers(numberString);
console.log(numberString);



/* Even Number Array Challenge */
function runEvenNumberArray(evenNumberArray) {
	for (var i = 0; i < 50; i++) {
		evenNumberArray[i] = i * 2;
	}
	console.log(evenNumberArray);
}
//runEvenNumberArray([]);



/* Odd Indexes Challenge */
function runOddIndexes(oopsArray) {
	for (var i = 1; i < oopsArray.length; i += 2) {
		oopsArray[i] = "nope";
	}
	console.log(oopsArray);
}
//runOddIndexes(["turn", , "down", , "for", , "what"])



/* Going Backwards Challenge */
function runGoingBackwards(oopsArray) {
	for (var i = oopsArray.length - 1; i >= 0; i--) {
		console.log(oopsArray[i]);
	}
}
//runGoingBackwards(["turn", "nope", "down", "nope", "for", "nope", "what"]);



/* isNapTime Challenge */
function nap(schedule) {
	if (!schedule) {
		console.log("Gotta get to work!");
		isNapTime = false;
		return;
	}
	console.log("ZzZzZzZz");
	isNapTime = true;
}
function runNapTime(napTime, napSchedule) {
	for (var i in napSchedule) {
		nap(napSchedule[i]);
	}
}
//var isNapTime = false;
//runNapTime(isNapTime, [false, false, true, false, true, true]);



/* Copy Array Challenge */
function copyArray(originArray, destinationArray) {
	for (var i in originArray) {
		destinationArray[i] = originArray[i];
	}
}
/*var valuesArray = [99, 66, 829, 1941, 8, 76];
var copyOfValuesArray = [];
copyArray(valuesArray, copyOfValuesArray);
console.log(valuesArray);
console.log(copyOfValuesArray);*/



/* Final Boss Stage 1 */
function generateArrayOfStrings(storage) {
	var output = [];
	for (var i in storage) {
		if (typeof storage[i] == "string") {
			output[output.length] = storage[i];
		}
	}
	return output;
}
//var miscStorage = [[], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush'];
//console.log(generateArrayOfStrings(miscStorage));




/* Final Boss Final Stage */
function graduateAndSetNewClass(clazz) {
	for (var i in clazz) {
		var student = clazz[i];
		if (student.enrolled) {
			student.graduated = true;
		} else {
			student.enrolled = true;
		}
	}
}
/*var currentClass = [
  {
    name: 'Doug',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Pat',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Marsha',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Moira',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Ben',
    graduated: false,
    enrolled: true
  },
  {
    name: 'Nigel the Giraffe',
    graduated: false,
    enrolled: false
  },
  {
    name: 'Brandon the Shark',
    graduated: false,
    enrolled: true
  }
];
graduateAndSetNewClass(currentClass);
console.log(currentClass);*/