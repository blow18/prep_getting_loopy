// Do your work here

function runPresidents(presidents) {
	for (var i in presidents) {
		console.log("The value of i is: " + i);
		console.log("The value at Index is: " + presidents[i]);
	}
}
//runPresidents(["Washington", "Adams", "Jefferson", "Madison", "Monroe"]);

function runStringOfNumbers(stringOfNumbers) {
	for (var i = 10; i <= 20; i++) {
		stringOfNumbers += i;
	}
	console.log(stringOfNumbers);
}
//runStringOfNumbers("");

function runEvenNumberArray(evenNumberArray) {
	for (var i = 0; i < 50; i++) {
		evenNumberArray[i] = i * 2;
	}
	console.log(evenNumberArray);
}
//runEvenNumberArray([]);

function runOddIndexes(oopsArray) {
	for (var i = 1; i < oopsArray.length; i += 2) {
		oopsArray[i] = "nope";
	}
	console.log(oopsArray);
}
//runOddIndexes(["turn", , "down", , "for", , "what"])

function runGoingBackwards(oopsArray) {
	for (var i = oopsArray.length - 1; i >= 0; i--) {
		console.log(oopsArray[i]);
	}
}
//runGoingBackwards(["turn", "nope", "down", "nope", "for", "nope", "what"]);

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

function generateArrayOfStrings(storage) {
	var output = [];
	for (var i in storage) {
		if (typeof storage[i] == "string") {
			output[output.length] = storage[i];
		}
	}
	return output;
}
var miscStorage = [[], 'Carrots', 9, 'Beets', {}, {name: "Todd B."}, 'Mush'];
console.log(generateArrayOfStrings(miscStorage));