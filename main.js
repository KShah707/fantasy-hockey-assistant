function addPlayer() {
	var firstNameBox = document.getElementById("firstnamebox");
	var lastNameBox = document.getElementById("lastnamebox");
	var firstName = firstNameBox.value;
	var lastName = lastNameBox.value;
	
	var fullName = firstName + " " + lastName;
	var URLName = lastName.substring(0, 5).toLowerCase() + firstName.substring(0, 2).toLowerCase();
	
	var div_playerRank = document.getElementById("player_ranker");
	var bioTemplate = document.getElementById("template_player-bio");
	var newBio = bioTemplate.content.cloneNode(true);
	
	var namebox = newBio.getElementById("row-namebox");
	var imgbox = newBio.getElementById("photo");
	namebox.innerHTML = fullName;
	imgbox.alt = fullName;
	imgbox.src = imgbox.src + URLName + "01-2015.jpg";
	
	div_playerRank.appendChild(newBio);
	
	firstNameBox.value = "";
	lastNameBox.value = "";
}

function Upvote(elem) {
	var thisRow = elem.parentNode.parentNode;
	var container = thisRow.parentNode; //the container for all playerRow objects
	//container.removeChild(thisRow);
	container.insertBefore(thisRow, thisRow.previousSibling);
	
	
}

function Downvote(elem) {
	var thisRow = elem.parentNode.parentNode;
	var container = thisRow.parentNode; //the container for all playerRow objects
	//container.removeChild(thisRow);
	container.insertBefore(thisRow, thisRow.nextSibling.nextSibling);
}