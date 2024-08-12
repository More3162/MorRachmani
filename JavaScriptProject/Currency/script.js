document.addEventListener('DOMContentLoaded', () => {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');

    const currencies = {
        "USD": { "country": "United States", "flag": "https://flagcdn.com/us.svg" },
        "EUR": { "country": "Eurozone", "flag": "https://flagcdn.com/eu.svg" },
        "JPY": { "country": "Japan", "flag": "https://flagcdn.com/jp.svg" },
        "GBP": { "country": "United Kingdom", "flag": "https://flagcdn.com/gb.svg" },
        "AUD": { "country": "Australia", "flag": "https://flagcdn.com/au.svg" },
        "CAD": { "country": "Canada", "flag": "https://flagcdn.com/ca.svg" },
        "CHF": { "country": "Switzerland", "flag": "https://flagcdn.com/ch.svg" },
        "CNY": { "country": "China", "flag": "https://flagcdn.com/cn.svg" },
        "SEK": { "country": "Sweden", "flag": "https://flagcdn.com/se.svg" },
        "NZD": { "country": "New Zealand", "flag": "https://flagcdn.com/nz.svg" },
        "INR": { "country": "India", "flag": "https://flagcdn.com/in.svg" },
        "BRL": { "country": "Brazil", "flag": "https://flagcdn.com/br.svg" },
        "ZAR": { "country": "South Africa", "flag": "https://flagcdn.com/za.svg" },
        // Add more currencies as needed
    };

    fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_bNha1WJPxEhYJ3tYVvT6HzfTAZc0vtDC9YDZoCuD`)
        .then(response => response.json())
        .then(data => {
            for (const [code, details] of Object.entries(currencies)) {
                const optionFrom = document.createElement('option');
                optionFrom.value = code;
                optionFrom.textContent = `${code} - ${details.country}`;
                fromCurrency.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.value = code;
                optionTo.textContent = `${code} - ${details.country}`;
                toCurrency.appendChild(optionTo);
            }

            fromCurrency.value = 'USD';
            toCurrency.value = 'EUR';

            // Display top popular currencies
            const topCurrenciesContainer = document.getElementById('topCurrencies');
            Object.entries(currencies).forEach(([code, details]) => {
                const currencyElement = document.createElement('div');
                currencyElement.innerHTML = `
                    <img src="${details.flag}" alt="${details.country} flag">
                    ${details.country} (${code}): ${data.data[code].value}
                `;
                topCurrenciesContainer.appendChild(currencyElement);
            });
        })
        .catch(error => console.error('Error fetching currency data:', error));
});

document.getElementById('convertBtn').addEventListener('click', () => {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    if (fromCurrency && toCurrency && amount) {
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_bNha1WJPxEhYJ3tYVvT6HzfTAZc0vtDC9YDZoCuD`)
            .then(response => response.json())
            .then(data => {
                const rate = data.data[toCurrency].value / data.data[fromCurrency].value;
                const result = (amount * rate).toFixed(2);
                document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
            })
            .catch(error => console.error('Error fetching the exchange rate:', error));
    } else {
        alert('Please fill in all fields.');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');

    const allCurrencies = {
        "AED": "United Arab Emirates",
        "AFN": "Afghanistan",
        "ALL": "Albania",
        "AMD": "Armenia",
        "ANG": "Netherlands Antilles",
        "AOA": "Angola",
        "ARS": "Argentina",
        "AUD": "Australia",
        "AWG": "Aruba",
        "AZN": "Azerbaijan",
        "BAM": "Bosnia and Herzegovina",
        "BBD": "Barbados",
        "BDT": "Bangladesh",
        "BGN": "Bulgaria",
        "BHD": "Bahrain",
        "BIF": "Burundi",
        "BMD": "Bermuda",
        "BND": "Brunei",
        "BOB": "Bolivia",
        "BRL": "Brazil",
        "BSD": "Bahamas",
        "BTN": "Bhutan",
        "BWP": "Botswana",
        "BYN": "Belarus",
        "BZD": "Belize",
        "CAD": "Canada",
        "CDF": "Congo",
        "CHF": "Switzerland",
        "CLP": "Chile",
        "CNY": "China",
        "COP": "Colombia",
        "CRC": "Costa Rica",
        "CUP": "Cuba",
        "CVE": "Cape Verde",
        "CZK": "Czech Republic",
        "DJF": "Djibouti",
        "DKK": "Denmark",
        "DOP": "Dominican Republic",
        "DZD": "Algeria",
        "EGP": "Egypt",
        "ERN": "Eritrea",
        "ETB": "Ethiopia",
        "EUR": "Eurozone",
        "FJD": "Fiji",
        "FKP": "Falkland Islands",
        "FOK": "Faroe Islands",
        "GBP": "United Kingdom",
        "GEL": "Georgia",
        "GGP": "Guernsey",
        "GHS": "Ghana",
        "GIP": "Gibraltar",
        "GMD": "Gambia",
        "GNF": "Guinea",
        "GTQ": "Guatemala",
        "GYD": "Guyana",
        "HKD": "Hong Kong",
        "HNL": "Honduras",
        "HRK": "Croatia",
        "HTG": "Haiti",
        "HUF": "Hungary",
        "IDR": "Indonesia",
        "ILS": "Israel",
        "IMP": "Isle of Man",
        "INR": "India",
        "IQD": "Iraq",
        "IRR": "Iran",
        "ISK": "Iceland",
        "JEP": "Jersey",
        "JMD": "Jamaica",
        "JOD": "Jordan",
        "JPY": "Japan",
        "KES": "Kenya",
        "KGS": "Kyrgyzstan",
        "KHR": "Cambodia",
        "KID": "Kiribati",
        "KMF": "Comoros",
        "KRW": "South Korea",
        "KWD": "Kuwait",
        "KYD": "Cayman Islands",
        "KZT": "Kazakhstan",
        "LAK": "Laos",
        "LBP": "Lebanon",
        "LKR": "Sri Lanka",
        "LRD": "Liberia",
        "LSL": "Lesotho",
        "LYD": "Libya",
        "MAD": "Morocco",
        "MDL": "Moldova",
        "MGA": "Madagascar",
        "MKD": "North Macedonia",
        "MMK": "Myanmar",
        "MNT": "Mongolia",
        "MOP": "Macau",
        "MRU": "Mauritania",
        "MUR": "Mauritius",
        "MVR": "Maldives",
        "MWK": "Malawi",
        "MXN": "Mexico",
        "MYR": "Malaysia",
        "MZN": "Mozambique",
        "NAD": "Namibia",
        "NGN": "Nigeria",
        "NIO": "Nicaragua",
        "NOK": "Norway",
        "NPR": "Nepal",
        "NZD": "New Zealand",
        "OMR": "Oman",
        "PAB": "Panama",
        "PEN": "Peru",
        "PGK": "Papua New Guinea",
        "PHP": "Philippines",
        "PKR": "Pakistan",
        "PLN": "Poland",
        "PYG": "Paraguay",
        "QAR": "Qatar",
        "RON": "Romania",
        "RSD": "Serbia",
        "RUB": "Russia",
        "RWF": "Rwanda",
        "SAR": "Saudi Arabia",
        "SBD": "Solomon Islands",
        "SCR": "Seychelles",
        "SDG": "Sudan",
        "SEK": "Sweden",
        "SGD": "Singapore",
        "SHP": "Saint Helena",
        "SLL": "Sierra Leone",
        "SOS": "Somalia",
        "SRD": "Suriname",
        "SSP": "South Sudan",
        "STN": "São Tomé and Príncipe",
        "SYP": "Syria",
        "SZL": "Eswatini",
        "THB": "Thailand",
        "TJS": "Tajikistan",
        "TMT": "Turkmenistan",
        "TND": "Tunisia",
        "TOP": "Tonga",
        "TRY": "Turkey",
        "TTD": "Trinidad and Tobago",
        "TVD": "Tuvalu",
        "TZS": "Tanzania",
        "UAH": "Ukraine",
        "UGX": "Uganda",
        "USD": "United States",
        "UYU": "Uruguay",
        "UZS": "Uzbekistan",
        "VES": "Venezuela",
        "VND": "Vietnam",
        "VUV": "Vanuatu",
        "WST": "Samoa",
        "XAF": "Central African CFA",
        "XAG": "Silver",
        "XAU": "Gold",
        "XCD": "East Caribbean Dollar",
        "XDR": "Special Drawing Rights",
        "XOF": "West African CFA",
        "XPF": "CFP Franc",
        "YER": "Yemen",
        "ZAR": "South Africa",
        "ZMK": "Zambia",
        "ZWL": "Zimbabwe"
    };

    const flagsBaseUrl = 'https://flagcdn.com/16x12/';

    fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_bNha1WJPxEhYJ3tYVvT6HzfTAZc0vtDC9YDZoCuD`)
        .then(response => response.json())
        .then(data => {
            Object.keys(allCurrencies).forEach(code => {
                const optionFrom = document.createElement('option');
                optionFrom.value = code;
                optionFrom.innerHTML = `
                    <img src="${flagsBaseUrl}${code.toLowerCase()}.png" alt="${code} flag">
                    ${code} - ${allCurrencies[code]}
                `;
                fromCurrency.appendChild(optionFrom);

                const optionTo = document.createElement('option');
                optionTo.value = code;
                optionTo.innerHTML = `
                    <img src="${flagsBaseUrl}${code.toLowerCase()}.png" alt="${code} flag">
                    ${code} - ${allCurrencies[code]}
                `;
                toCurrency.appendChild(optionTo);
            });

            fromCurrency.value = 'USD';
            toCurrency.value = 'EUR';

        })
        .catch(error => console.error('Error fetching currency data:', error));
});

document.getElementById('convertBtn').addEventListener('click', () => {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    const amount = document.getElementById('amount').value;

    if (fromCurrency && toCurrency && amount) {
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_bNha1WJPxEhYJ3tYVvT6HzfTAZc0vtDC9YDZoCuD`)
            .then(response => response.json())
            .then(data => {
                const rate = data.data[toCurrency].value / data.data[fromCurrency].value;
                const result = (amount * rate).toFixed(2);
                document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
            })
            .catch(error => console.error('Error fetching the exchange rate:', error));
    } else {
        alert('Please fill in all fields.');
    }
});
