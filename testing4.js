var aboutMe= {
	name: "Oscar",
	place: "NYC",
	job: "Working for the man :(",
	age: 25,
	interest: ["video gaming","guitar","i have no clue"],
	sayHello: function() {
		return "Hello" + " " + this.name;
	}
}

var myDogs = [
	{name: "Lexi",
	age: 11},
	{name: "Spinster",
	age: 5},
	{name: "Violet",
	age: 1}
];

for (var i = 0; i < myDogs.length; i = i + 1) {
	var myDog = myDogs[i];
	console.log(myDog.name + ' is ' + myDog.age + ' old.');
};

function input() {
	var ing = []
	var end = true
	var i = 0
	while (i < 5) {
		ing[i] = prompt("What's the ingredients")
		i = i + 1

	}
	return ing;
}

var recipes = [
	{Title: prompt("What's the title?"),
	 Servings: parseInt(prompt("How many servings?")),
	 Ingredients: input()}
];

for (var i = 0; i < recipes.length; i++){
	var recip = recipes[i];
	console.log(recip.Title + ' serves ' + recip.Servings + ' made with ' + recip.Ingredients);
}
console.log(recipes.Title);


var books = [
	{title:"Fight club",
	author: "Chuck Palunuk",
	read: true
	},
	{
		title:"C# 4.0",
		author:"O'Riley",
		read: true
	},
	{
		title:"Twilight",
		author:"I do not know",
		read: false
	}
];

for (var i = 0; i < books.length; i++){
	var ok = books[i];
	var info = ok.title + ' by ' + ok.author;
	if (ok.read == true){
		console.log('You have already read ' + info)
	}
	else {
		console.log('You still have to read ' + info)
	}
}

var movie = [
	{
		title:"Pulp Fiction",
		mins: 90,
		stars:["Sam Jackson","Uma Thurman","John Travolta"]
	},
	{
		title:"Who Framed Roger Rabbit",
		mins:90,
		stars:["Roger Rabbit","Dude who played super mario in that super mario's movie"]
	}

];

function relay() {
	
	for (var i = 0; i < movie.length; i++){
		var mov = movie[i]
		var sen = mov.title + ' last for ' + mov.mins + ' and stars ' + mov.stars
		console.log(sen)
	}
}

console.log(relay())