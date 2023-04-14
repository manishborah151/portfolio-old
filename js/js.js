let valueDisplays =document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay)=>{
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAtribute("data-val"));
        let duration = math.floor(interval / endValue);
        let counter =setInterval(function() {
            startValue += 1;
            valueDisplay.textContent= startValue;
            if (startValue == endValue){
                clearInterval(counter);
            }
        } ,duration);
});





  function menushow() {
document.getElementById("drop1").classList.toggle("show");
document.getElementById("drop").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {
var dropdowns = document.getElementsByClassName("drop");

var i;
for (i = 0; i < dropdowns.length; i++) {
 var openDropdown = dropdowns[i];
 if (openDropdown.classList.contains('show')) {
   openDropdown.classList.remove('show');
 }
}

}
}



