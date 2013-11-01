function greaterNum(x,y) {
	var x = parseInt(prompt("What is the first number?"))
	var y = parseInt(prompt("What is the sdcond number?"))


	if (x > y) {
		return x + "is larger than" + y
	}
	else if (y > x) {
		return y + "is larger than" + x
	}
}

function assignGrade() {
	var grade = parseInt(prompt("What's your score?"))

	if (grade == 100) {
		return "It's an A+!"
	} 
	else if (grade <= 95) {
		return "It's just an A!"
	}
	else if (grade <= 90) {
		return "It's only an A-!"
	}
	else if (grade <= 89) {
		return "B+"
	}
	else if (grade <= 85) {
		return "B"
	}
	else if (grade <= 80) {
		return "B-"
	}
	else if (grade <= 79) {
		return "C+"
	}
	else if (grade <= 75) {
		return "C"
	}
	else if (grade <= 70) {
		return "C-"
	}
	else if (grade <= 69) {
		return "...Dude, go study."
	}
}


