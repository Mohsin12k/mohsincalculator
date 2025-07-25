const display = document.getElementById('display');
const displayHide = document.querySelector('.displayHideBtn');
const calculator = document.querySelector('.calculator');

displayHide.addEventListener('click', ()=>{
  calculator.classList.toggle('hide');
  calculator.classList.toggle('show');
})

const operator = (input) =>{
    if(input === 'c'){
        display.value = "";
    } else {
        display.value += input;
    }
}

const equal = () =>{
    try {

        display.value = math.evaluate(display.value);

    } catch(err) {
        display.style.color = 'red';
        display.value = "Error";
    }
}

const backspace = () =>{
  display.value = display.value.slice(0, -1);
}

// ✅ Add this part LAST
document.addEventListener('keydown', (e) => {
  if ("0123456789+-*/.".includes(e.key)) {
    operator(e.key);
  } else if (e.key === "Enter") {
    equal();
  } else if (e.key.toLowerCase() === "c") {
    operator('c');
  } else if(e.key === "Backspace"){
    backspace();
  }
});