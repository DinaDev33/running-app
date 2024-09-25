const btn1 = document.querySelector(".btn1");

const secondBis = document.querySelector("#sec");
secondBis.addEventListener("keypress", function(e){
    if (e.keyCode === 13) {
        calculateSpeed();
    }
})
btn1.addEventListener ("click", calculateSpeed);
function calculateSpeed(e){
    e.preventDefault ();


  const meter = parseFloat(document.querySelector("#meters").value);
const hour = parseFloat(document.querySelector("#hour").value);
   const minute = parseFloat(document.querySelector("#min").value);
    const second = parseFloat(document.querySelector("#sec").value);
    const speedInput = document.querySelector("#speed");
   const allureInput = document.querySelector("#allure");

    let distance = meter / 1000;
    let time = hour + minute/60 + second/3600;
       //time = time.toFixed(2);
       
        console.log (time);
        console.log (distance);

    let speedDisplay = distance / time;
    let allureDisplay = time / distance * 60;

        speedDisplay = speedDisplay.toFixed (2);
        allureDisplay = allureDisplay.toFixed(2);


        document.querySelector ("#speed").textContent = speedDisplay;
        document.querySelector ("#allure").textContent = allureDisplay;

     
        
      speedInput.textContent = speedDisplay;
      allureInput.textContent = allureDisplay;
}
function calculateTime(e){
    e.preventDefault ();
}