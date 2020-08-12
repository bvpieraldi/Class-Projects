function main() {
    words = ["AFGHANISTAN", "ALGERIA", "ARGENTINA", "BANGLADESH", "BRAZIL", "BURMA",
                 "CANADA", "CHINA", "COLUMBIA", "CONGO", "EGYPT", "ETHIOPIA", "FRANCE",
                 "GERMANY", "GHANA", "INDIA", "INDONESIA", "IRAN", "IRAQ", "ITALY",
                 "JAPAN", "KENYA", "MALAYSIA", "MEXICO", "MOROCCO", "NEPAL", "NIGERIA",
                 "NORTHKOREA", "PAKISTAN", "PERU", "PHILIPPINES", "POLAND", "RUSSIA",
                 "SAUDIARABIA", "SOUTHAFRICA", "SOUTHKOREA", "SPAIN", "SUDAN", "TAIWAN",
                 "TANZANIA", "THAILAND", "TURKEY", "UGANDA", "UKRAINE", "UNITEDKINGDOM",
                 "UNITEDSTATES", "UZBEKISTAN", "VENEZUELA", "VIETNAM", "YEMEN"];
    printList(words);
    color.onclick = changeColor;
    fontFamily.onclick = changeFont;
	myButton.onclick = filterByLength;
}


function printList(arr) {
    var names = "";
    for (i = 0; i < words.length; i = i + 1) {
        names = names + " " + words[i];
    }

    countryList.innerHTML = names;
}

function changeColor() {
    var color;
    if (whiteButton.checked) {
        color = "white";
    }
    if (blueButton.checked) {
        color = "blue";
    }
    if (blackButton.checked) {
        color = "black";
    }
    
    countryList.style.color= color;
}

function changeFont() {
    
    var style; 
    
    if (arial.selected) {
        style = "Arial";
    }
    if (timesNewRoman.selected) {
        style = "Times New Roman";
    }
    if (courierNew.selected) {
        style = "Courier New";
    }
    
    countryList.style.fontFamily= style;
    
}

function filterByLength(originalList, min, max) {

	var lengthArray = [];
   			for (i = 0; i < words.length; i = i + 1) {	
					if (words[i].length > minlength.value || words[i].length < maxlength.value){
					lengthArray.push(words[i]);
					}
				
						}
    return lengthArray;
    countryList.innerHTML= lengthArray;
}