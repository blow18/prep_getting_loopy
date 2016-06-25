// Do your work here

function runPresidents() {
	var presidents = ["Washington", "Adams", "Jefferson", "Madison", "Monroe"];

	for (i in presidents) {
		console.log("The value of i is: " + i);
		console.log("The value at Index is: " + presidents[i]);
	}
}
//runPresidents();

function runStringOfNumbers() {
	var stringOfNumbers = "";

	for (i = 10; i <= 20; i++) {
		stringOfNumbers += i;
	}
	console.log(stringOfNumbers);
}
//runStringOfNumbers();

function runEvenNumberArray() {
	var evenNumberArray = [];

	for (i = 0; i < 50; i++) {
		evenNumberArray[i] = i * 2;
	}
	console.log(evenNumberArray);
}
runEvenNumberArray();