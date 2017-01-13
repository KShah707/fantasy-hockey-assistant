function addPlayer() {
	var firstNameBox = document.getElementById("firstnamebox");
	var lastNameBox = document.getElementById("lastnamebox");
	var firstName = firstNameBox.value;
	var lastName = lastNameBox.value;
	
	var fullName = firstName + " " + lastName;
	var name = lastName.substring(0, 5).toLowerCase() + firstName.substring(0, 2).toLowerCase();
	
	var div_playerRank = document.getElementById("player_ranker");
	var bioTemplate = document.getElementById("template_player-bio");
	var newBio = bioTemplate.content.cloneNode(true);
	
	var namebox = newBio.getElementById("namebox");
	var imgbox = newBio.getElementById("photo");
	namebox.innerHTML = fullName;
	imgbox.alt = fullName;
	imgbox.src = imgbox.src + name + "01-2015.jpg";
	
	div_playerRank.appendChild(newBio);
	
	firstNameBox.value = "";
}

function addPlayer2() {
	var firstNameBox = document.getElementById("firstnamebox");
	var lastNameBox = document.getElementById("lastnamebox");
	var firstName = firstNameBox.value;
	var lastName = lastNameBox.value;
	
	var fullName = firstName + " " + lastName;
	//the hockeyreference url name
	var name = (lastName.substring(0, 5) + firstName.substring(0, 2)).toLowerCase();
	
	var div_playerRank = document.getElementById("player_ranker");
	var bioTemplate = document.getElementById("template_player-bio");
	var newBio = bioTemplate.content.cloneNode(true);
	
	var namebox = newBio.getElementById("namebox");
	var imgbox = newBio.getElementById("photo");
	namebox.innerHTML = fullName;
	imgbox.alt = fullName;
	imgbox.src = imgbox.src + name + "01-2015.jpg";
	
	if (playerList.indexOf(fullName) < 0) {
		playerList.push(fullName);
		scoreList.push(0);
	}
	div_playerRank.appendChild(newBio);
	
	firstNameBox.value = "";
	lastNameBox.value = "";
}

/* function Upvote(elem) {
	//parent is span, its parent is entire row, 
	var playerName = elem.parentNode.parentNode.getElementById().innerHTML;
}

function Downvote(elem) {
	
} */