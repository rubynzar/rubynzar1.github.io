var randomNr = Math.floor(Math.random() * 4) + 2;
console.log(randomNr);

var counter = 0;

function showVal(newVal){
    if(newVal === "0" ) {
        counter = counter + 1;
        console.log(counter);
        if(randomNr === counter) {
            document.getElementById("plungerAnim").src="IMGs/moving.gif"
        }
    }

    var pos = (100-newVal) * 0.0715;
    document.getElementById("plungerInt").style.marginTop = pos + "%";
}