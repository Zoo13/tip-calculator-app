
let proc = 0;
let people = 1 
let bill = 0;


let buttons = document.querySelectorAll('.tip-rate-btn');
let resetBtn = document.getElementById('btn');

let billAmount = document.getElementById('bill-amount');
let tipRate = document.getElementById('tip-rate');
let peopleInput = document.getElementById('num-of-people');

let tipResultScreen = document.getElementById("tip-result-screen");
let totalResulScreen = document.getElementById('total-result-screen');


resetBtn.addEventListener('click' , reset);

// inputebis kontroli , axali inputis dawerisas
// avtomaturad gamoidzaxebs shesabamis funqcias

tipRate.addEventListener('input' , tipRateProc);
billAmount.addEventListener('input' , takeBill);
peopleInput.addEventListener('input' , takeNumOfPeople);

// amovigot xalxis raodenoba 
function takeNumOfPeople() {
    error.innerHTML = ''
    people = parseInt(peopleInput.value)
    if(people <= 0) {
        error.innerHTML = "Can’t be zero"
    }
    calculate()
}
// amovigot customidan procenti
function tipRateProc() {
    proc = parseFloat(tipRate.value)/100
    calculate()
}
// bill inputidan mnishvnelobis amogeba
function takeBill() {
    bill = parseFloat(billAmount.value)
    calculate()
}

// buttonebis clickze vigebt romel buttons daeklika
buttons.forEach(solo => {
    solo.addEventListener('click',handleClick)

});
// romel buttonsac daeklika class shi emateba active
// daklikuls akldeba active, amit vigebt romeli gilakia daklikuli
// daklikuli gilakis mixedvit amogvaqvs procenti shesabamisi gilakidan
function handleClick(event){
    buttons.forEach(act => {
        act.classList.remove('active')
        if(event.target != tipRate ){
            proc = event.target.innerHTML
            proc = proc.replace('%','')
            proc = parseInt(proc)/100
            event.target.classList.add('active')
        }
    })
    calculate()
}
function calculate() {
    tipResultScreen.innerHTML = '$ ' + (bill * proc / people).toFixed(2)
    totalResulScreen.innerHTML = '$ ' + ((bill + (bill*proc)) / people).toFixed(2)
}

function reset(){
    totalResulScreen.innerHTML = '$ ' + 0.00.toFixed(2)
    tipResultScreen.innerHTML = '$ ' + 0.00.toFixed(2)
    proc = 0;
    people = 1 
    bill = 0;
    document.getElementById('bill-amount').value = ''
    document.getElementById('tip-rate').value = ''
    document.getElementById('num-of-people').value = '1'

}