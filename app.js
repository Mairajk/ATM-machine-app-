
let userPin = "42580"
let userInputPin;
let errorMessage;
let main = document.querySelector(`#main`);
let amountInBox = 40000;
let cardLimit = 50000;
let accountBalance = 70000;
let inputAmount;

const insertCard = () => {
    main.innerHTML = `
    <form action="" class="getPinForm" onsubmit="verifyPin(event)">

    <label for="userInputPin">Enter Your 5 Digit PIN </label>

    <input type="number" id="userInputPin" name="userInputPin" required autofocus min="0">

    <p class="error" id="errorMessage"></p>
    <button type="submit"> Verify </button>

</form>
`
}

const verifyPin = (e) => {

    e.preventDefault()

    errorMessage = document.querySelector(`#errorMessage`);

    userInputPin = document.querySelector(`#userInputPin`);


    if (userInputPin.value.length != 5) {
        errorMessage.innerHTML = `Enter a valid 5 digit PIN ✖️`
    }
    else if (userInputPin.value === userPin) {
        main.innerHTML = `
    <h3 class="amountEnter">Enter Amount</h3>

        <form action="" onsubmit="withDraw(event)">
    
        <input type="number" required autofocus id="inputAmount" min="0">
        
        <p class="error" id="errorMessage2"></p>
        <button type="submit"> With Draw </button>

        </form>

        
    <div class="" id="details" class="details" >
    
    <div class="amountInBox" id="amountInBox"><p> Amount in Box is </p>
     <span class="amount"> ${amountInBox} </span> </div>
    
     <div class="cardLimit" id="cardLimit"> <p> Your Card Limit is </p>
     <span class="amount"> ${cardLimit} </span> </div>
    
     <div class="accountBalance" id="accountBalance"> <p> Your account balance is </p>
     <span class="amount"> ${accountBalance} </span> </div>
    
     </div>

    `
    }
    else {
        errorMessage.innerHTML = `Incorrect PIN try again ✖️`

    }
}



const withDraw = (e) => {
    e.preventDefault();

    inputAmount = document.querySelector(`#inputAmount`);
    let errorMessage2 = document.querySelector(`#errorMessage2`)

    if (inputAmount.value % 500 != 0) {

        errorMessage2.innerHTML = `Enter a valid amount in 500(s) ✖️ "like 500 , 1000 , 1500 , 2000 ..."  `
    }
    else if (inputAmount.value > accountBalance) {

        errorMessage2.innerHTML = `Sorry ! there is insuffucient balance in you account ✖️`
    }
    else if (inputAmount.value > cardLimit) {
        console.log("inputAmount % 500 :", inputAmount.value % 500);

        errorMessage2.innerHTML = `Sorry ! your card limit is exceed `
    }
    else if (inputAmount.value > amountInBox) {

        errorMessage2.innerHTML = `Sorry ! there is insuffucient amount in machine ✖️`
    }

    else {

        amountInBox = amountInBox - inputAmount.value;
        document.querySelector(`#amountInBox`).innerHTML =
            `<p>Amount in Box is</p> <span class="amount"> ${amountInBox} </span> `;

        cardLimit = cardLimit - inputAmount.value;
        document.querySelector(`#cardLimit`).innerHTML =
            `<p>Your Card Limit is </p> <span class="amount">  ${cardLimit} </span>`;

        accountBalance = accountBalance - inputAmount.value
        document.querySelector(`#accountBalance`).innerHTML =
            `<p>Your account balance is </p> 
            <span class="amount"> ${accountBalance} </span>`;

        errorMessage2.innerHTML = `Transaction done successfully ✔️`
        errorMessage2.style.color = `green`
        errorMessage2.style.textShadow = `-2px -2px 2px  white`
    }
}
