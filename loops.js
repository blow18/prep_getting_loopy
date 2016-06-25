// Do your work here

function runPresidents(presidents) {
	for (i in presidents) {
		console.log("The value of i is: " + i);
		console.log("The value at Index is: " + presidents[i]);
	}
}
//runPresidents(["Washington", "Adams", "Jefferson", "Madison", "Monroe"]);

function runStringOfNumbers(stringOfNumbers) {
	for (i = 10; i <= 20; i++) {
		stringOfNumbers += i;
	}
	console.log(stringOfNumbers);
}
//runStringOfNumbers("");

function runEvenNumberArray(evenNumberArray) {
	for (i = 0; i < 50; i++) {
		evenNumberArray[i] = i * 2;
	}
	console.log(evenNumberArray);
}
//runEvenNumberArray([]);

function runOddIndexes(oopsArray) {
	for (i = 1; i < oopsArray.length; i += 2) {
		oopsArray[i] = "nope";
	}
	console.log(oopsArray);
}
//runOddIndexes(["turn", , "down", , "for", , "what"])

function runGoingBackwards(oopsArray) {
	for (i = oopsArray.length - 1; i >= 0; i--) {
		console.log(oopsArray[i]);
	}
}
//runGoingBackwards(["turn", "nope", "down", "nope", "for", "nope", "what"]);

var isNapTime = false;
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
	for (i in napSchedule) {
		nap(napSchedule[i]);
	}
}
runNapTime(isNapTime, [false, false, true, false, true, true]);