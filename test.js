function addNum(num1, num2) {
	return num1 + num2
}

function subNum(num1, num2) {
	return num1 - num2
}

function multi(num1, num2) {
	return num1 * num2
}

function cal() {
var num1 = parseInt(prompt("What is the first number?"))
var num2 = parseInt(prompt("What is the second number?"))

var pick = parseInt(prompt("Press 1 for add, 2 for sub, or 3 for multiplication"))

if (pick == 1)
{
	return addNum(num1, num2)
}
else if (pick == 2)
{
	return subNum(num1, num2)
}
else if (pick == 3) 
{
	return multi(num1, num2)
}
}

alert(cal());

function age() {
	var year = 2013
	var bYear = prompt("What year were you born?")
	return year - parseInt(bYear)
}


alert(age());



function life() {
	var max = 100 - parseInt(prompt("How old are you?"))
	var day = parseInt(prompt("How many things do you eat a day?")) * 365
	var total = max * day
	return "You will eat" + " " + total + " " + "every year"

}

alert(life());

function aPerfectCircle() {
	var r = parseFloat(prompt("What is the radius?"))
	var cir = 2*r*Math.PI
	return "The circumfence is " + " " + cir
}

alert(aPerfectCircle())

function rando(array) {
   var ran = Math.floor((Math.random()*array.length))
   var result = array[ran]
   return result
}
	var kids = [1,2,3,4,5,6];
	var celeb = ["Scarlett Johansson", "Angelina", "Kate", "Devin"];
	var geo = ["Japan", "Vegas", "NYC","Amsterdam"];
	var job = ["Programmer","Developer","Da Boss"];

function fortune() {
	
	return "You will have"+ " " + rando(kids) + " " + "with" + " " + rando(celeb) + " " + "and live in " + " " + rando(geo) + " " + "while making money as a" + " " + rando(job)
}


alert(fortune())

