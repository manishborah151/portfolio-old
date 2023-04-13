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


window.addEventListener("scroll", function(){
    var header =document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  })

  function countUp(limit, id) {
    var count = 0;
    var display = document.getElementById(id);

    var intervalId = setInterval(function() {
      if (count < limit) {
        count++;
        display.innerHTML = count;
      } else {
        clearInterval(intervalId);
      }
    }, 150);
  }
  countUp(12, "num1");
  countUp(15, "num2");
  countUp(2, "num3");


