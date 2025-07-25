const display = document.getElementById('display');
const displayBtn = document.querySelector('.displayBtn');
const hideBtn = document.querySelector('.hideBtn');
const calculator = document.querySelector('.calculator');

displayBtn.addEventListener('click', ()=>{
  calculator.classList.remove('hide');
  calculator.classList.add('show');
})
hideBtn.addEventListener('click', ()=>{
  calculator.classList.add('hide');
  calculator.classList.remove('show');
  operator('c');
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