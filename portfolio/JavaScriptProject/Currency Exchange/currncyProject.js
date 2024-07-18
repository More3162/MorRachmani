//console.log("Hello World");	 // works

const exchangApiKey = "40c87565501166d628c628f6";
let fromCurrency = document.getElementById("fromCurrency");
let toCurrency = document.getElementById("toCurrency");
let btnConvert = document.getElementById("btnConvert");
let result = document.getElementById("result");




async function getCurrenciesCodes() {
    try {
        let response = await fetch(
            `https://v6.exchangerate-api.com/v6/${exchangApiKey}/codes`
        );
        let data = await response.json();
        let codes = data.supported_codes.map((item) => item[0]);
        return codes;
    } catch (error) {
        console.log(error);
    }
}
getCurrenciesCodes();



async function populateSelectors() {
    let codes = await getCurrenciesCodes();
    let fromSelector = document.getElementById("fromCurrency");
    let toSelector = document.getElementById("toCurrency");
    codes.forEach((code) => {
        let newOption = `<option value="${code}">${code}</option>`;
        fromSelector.innerHTML += newOption;
        toSelector.innerHTML += newOption;
    });
}
populateSelectors();


async function convertCurrency() {
    //btnConvert.addEventListener("click", async () => {
    try {
        let amount = document.getElementById("amount").value;

        let response = await fetch(`https://v6.exchangerate-api.com/v6/${exchangApiKey}/pair/${fromCurrency.value}/${toCurrency.value}/${amount}`)

        let data = await response.json();
        console.log(data);

        result.innerHTML = data.conversion_result;
    }
    catch (error) {
        console.log(error);
    }
}

btnConvert.addEventListener("click", async () => convertCurrency());






/* מה עשיתי לבד :) */
/* 
async function getCurrency() {
    try {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/${exchangApiKey}/latest/USD`);
        let data = await response.json();
        let currency = data.conversion_rates;
        //console.log(data);
        console.log(currency);
    }
    catch (error) {
        console.log("failed!!!!!!!!");
    }
}

//getCurrency();

// משוך את קוד המטבע לכל מדינה
async function getCurrencyCodes() {
    try {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/${exchangApiKey}codes`);
        let data = await response.json();

        let CountryArr = data.supported_codes; //  + קוד מערך של המדינות

        let currencyCountry = CountryArr.map((country) => { // תחזיר לי מערך חדש של המדינות
            return (country[0]); // קוד המדינה
        });

        let newData =
            currencyCountry.forEach(element => { // עבור כל מדינה במערך

                console.log(element); //  הצג בנפרד. קוד המדינה

                let newDatatoCurrency =
                    currencyCountry.forEach(element => { // עבור כל מדינה במערך
                        //console.log(element); //  הצג בנפרד. קוד המדינה
                        Option = document.createElement("option"); // צור אופציה
                        Option.text = element; // הכנס את הקוד של המדינה
                        toCurrency.add(Option); // הוסף לרשימה
                    });

                let newDatafromCurrency =
                    currencyCountry.forEach(element => { // עבור כל מדינה במערך
                        Option = document.createElement("option"); // צור אופציה
                        Option.text = element; // הכנס את הקוד של המדינה
                        fromCurrency.add(Option); // הוסף לרשימה
                    });

            });
    }
    catch (error) {
        console.log("failed!!!!!!!!");
    }
}
getCurrencyCodes();


async function convertCurrency() {
    convert.addEventListener("click", async () => {
        try {
            let fromCurrencyValue = fromCurrency.value;
            let toCurrencyValue = toCurrency.value;
            let amount = document.getElementById("amount").value;

        }

});
}

 */

