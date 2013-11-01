function guessing(){
	var ans = ["F","O","X"]
	for (var i = 0; i < 10; i++){
		var letter = prompt("What's your letter?")
		if (letter === ans[0,1,2]){
			console.log(letter)}
		else{
			console.log(i + " "+ "chances left!")}
	}
}

console.log(guessing())