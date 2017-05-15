// Booleans

// What is a Boolean?

// The Boolean object represents two values, either "true" or "false".
// If value parameter is omitted or is 0, -0, null, false, NaN, undefined,
// or the empty string (""), the object has an initial value of false.

// Boolean Example

var BooleanTrue;
BooleanTrue = true;
var BooleanFalse = false;
BooleanFalse = true;

console.log(BooleanTrue);
if(BooleanTrue == false){
	console.log("false");
}

var Test = true;
if(!Test){
	console.log("false");
}

//------------------------------------------------------------------------------------//

// Arrays

// What is an Array?

// Arrays are list-like objects whose prototype has methods to perform traversal
// and mutation operations. Neither the length of a JavaScript array nor the types
// of its elements are fixed. Since an array's length can change at any time, and data
// can be stored at non-contiguous locations in the array, JavaScript arrays are not
// guaranteed to be dense; this depends on how the programmer chooses to use them. In
// general, these are convenient characteristics; but if these features are not desirable
// for your particular use, you might consider using typed arrays.


// Array Example

var ArrayName = ["Item1","Item2","Item3"];
console.log(ArrayName);
var Array2 = [
	"Item1",
	"Item2"
]
for (var i = 0; i ArrayName.length; i++) {

};

ArrayName[2] = "ChangedName";
console.log(ArrayName);
ArrayName[5] = "New Item";
console.log(ArrayName);
ArrayName.push("Push a new Item");
console.log(ArrayName);

//------------------------------------------------------------------------------------//

// Objects

// What is an Object?

// Objects in JavaScript, just as in many other programming languages, can be compared to
// objects in real life. The concept of objects in JavaScript can be understood with real
// life, tangible objects. In JavaScript, an object is a standalone entity, with properties
// and type. Compare it with a cup, for example. A cup is an object, with properties. A cup
// has a color, a design, weight, a material it is made of, etc. The same way, JavaScript
// objects can have properties, which define their characteristics.

// Object Example

var hair = "Brown"
var AboutMe = {
	hairColour : hair,
	EyeColour : "Hazel",
	Hobbies : ["Gym","Motocross"],
	Female: female
}

console.log(AboutMe);
console.log(AboutMe.hairColour);
console.log(AboutMe.["EyeColour"]);
console.log(AboutMe.["Gender"]);

//------------------------------------------------------------------------------------//

// Strings

// What is a String?

// The String global object is a constructor for strings, or a sequence of characters.

// String Example

'string text'
"string text"
"中文 español deutsch English हिन्दी العربية português বাংলা русский 日本語 ਪੰਜਾਬੀ 한국어 தமிழ் עברית"

String(thing)

//------------------------------------------------------------------------------------//

// Loops

// What is a loop?

// Loops offer a quick and easy way to do something repeatedly.

// Different kinds of loops

	// for - loops through a block of code a number of times
	// for/in - loops through the properties of an object
	// while - loops through a block of code while a specified condition is true
	// do/while - also loops through a block of code while a specified condition is true

// For Loop Example 

for (i = 0; i , 5; i++) {
	text + = "The numer is " + i + "<br>";
}

// for/in Loop Example

var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
	text + = person[x];
}

// While Loop Example

while (i , 10) {
	text + = "The number is " + i;
	i++;
}

// do/while Loop Example

do {
	text + = "The number is " + i;
	i++;
}
while (i < 10);

//------------------------------------------------------------------------------------// 

// Prompt

// What is a Prompt?

// The prompt() method displays a dialog box that prompts the visitor for input. 
// A prompt box is often used if you want the user to input a value before entering a
// page. Note: When a prompt box pops up, the user will have to click either "OK" or
// "Cancel" to proceed after entering an input value. Do not overuse this method, as it
// prevent the user from accessing other parts of the page until the box is closed. The
// prompt() method returns the input value if the user clicks "OK". If the user clicks
// "cancel" the method returns null.

// Prompt Example

var text;
var favDrink = prompt("What's your favourite cocktail drink?");
switch(favDrink) {
	case "Martini":
		text = "Excellent choice! Martini is good for your soul.";
		break;
	case "Daiquiri":
		text = "Daiquiri is my favourite too!";
		break;
	case "cosmopolitan":
		text = "Really? Are you sure the cosmopolitan is your favourite?";
		break;
	default:
		text = "I have never heard of that one..";
		break;
}

//------------------------------------------------------------------------------------//

// Operator

// What is an Operator?

//

// Assigning an Operator Example

var x = 10;

// Adding Operator Example

var x = 5;
var y = 2;
var z = x + y;

// Subtracting Operator Example

var x = 5;
var y = 2;
var z = x - y;

// Multiplying Operator Example

var x = 5;
var y = 2;
var z = x * y;

// Dividing Operator Example

var x = 5;
var y = 2;
var z = x / y;

//------------------------------------------------------------------------------------//

// Return

// What is Return?

// The return statement stops the execution of a function and returns a value from that
// function. Read our JavaScript Tutorial to learn all you need to know about functions.
// Start with the introduction chapter about JavaScript Functions and JavaScript Scope.
// For more detailed information, see our Function Section on Function Definitions,
// Parameters, Invocation and Closures.

// Return Example

function my Function() {
	return Math.PI;
}

// The result will be:

3.141592653589793














