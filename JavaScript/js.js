var randomNr = Math.floor(Math.random() * 4) + 2;  // get a random nr between 2-4
console.log(randomNr);

var counter = 0; // counter for slides

function showVal(newVal){   
    if(newVal === "0" ) {
        counter = counter + 1; // add to counter each time the slider hits the bottom
        console.log(counter);
        if(randomNr === counter) {
            document.getElementById("plungerAnim").src="IMGs/moving.gif"
        }
    }

    var pos = (100-newVal) * 0.0715;  // moving the plunger in relation to the slider
    document.getElementById("plungerInt").style.marginTop = pos + "%";
}
