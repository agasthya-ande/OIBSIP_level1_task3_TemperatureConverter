
function showConverter(type) {
    let title = "";

    switch (type) {
        case "cToF":
            title = "Celsius → Fahrenheit";
            break;

        case "fToC":
            title = "Fahrenheit → Celsius";
            break;

        case "cToK":
            title = "Celsius → Kelvin";
            break;

        case "kToC":
            title = "Kelvin → Celsius";
            break;

        case "fToK":
            title = "Fahrenheit → Kelvin";
            break;

        case "kToF":
            title = "Kelvin → Fahrenheit";
            break;
    }

    document.getElementById("content").innerHTML = `
        <div class="converter-box">
            <h2>${title}</h2>

            <input type="text"
                   id="temp"
                   placeholder="Enter Temperature">

            <button onclick="convert('${type}')">
                Convert
            </button>

            <div id="result" class="result"></div>
        </div>
    `;
}

function convert(type) {
    let temp =
        parseFloat(document.getElementById("temp").value);

    if (isNaN(temp)) {
        alert("Please enter a valid number");
        return;
    }

    let result;

    switch (type) {
        case "cToF":
            result = (temp * 9 / 5) + 32;
            result = result.toFixed(2) + " °F";
            break;

        case "fToC":
            result = (temp - 32) * 5 / 9;
            result = result.toFixed(2) + " °C";
            break;

        case "cToK":
            result = temp + 273.15;
            result = result.toFixed(2) + " K";
            break;

        case "kToC":
            result = temp - 273.15;
            result = result.toFixed(2) + " °C";
            break;

        case "fToK":
            result = ((temp - 32) * 5 / 9) + 273.15;
            result = result.toFixed(2) + " K";
            break;

        case "kToF":
            result = ((temp - 273.15) * 9 / 5) + 32;
            result = result.toFixed(2) + " °F";
            break;
    }

    document.getElementById("result").innerHTML =
        "Converted Temperature : " + result;
}