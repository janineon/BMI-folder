let display = document.getElementById("result");
let conclude = document.getElementById("conclusion");
// change is about switching value so since yung radio button is magkaiba ng inputs which is considered na value, mas suitable si change na gamitin
document.getElementById("us-units").addEventListener("change", function () {
    document.getElementById("us_units").style.display = "block";
    document.getElementById("metric_units").style.display = "none";
    document.getElementById("ft").value = "";
    document.getElementById("inch").value = "";
    document.getElementById("lb").value = "";
    document.getElementById("result").value = "";
    conclude.textContent = "";
});

document.getElementById("metric-units").addEventListener("change", function () {
    //ginagamit yung block para makita yung specific block for example is yung div ng metric_units
    //yung none naman is para i-hide yung other block 
    document.getElementById("metric_units").style.display = "block";
    document.getElementById("us_units").style.display = "none";
    document.getElementById("cm").value = "";
    document.getElementById("kg").value = "";
    document.getElementById("result").value = "";
    conclude.textContent = "";
});

function calculate() {
    var lb = parseFloat(document.getElementById("lb").value);
    var ft = parseFloat(document.getElementById("ft").value);
    var inch = parseFloat(document.getElementById("inch").value);
    var cm = parseFloat(document.getElementById("cm").value);
    var kg = parseFloat(document.getElementById("kg").value);

    if (document.getElementById("us-units").checked) {
        if (lb > 0 && ft > 0 && inch > 0) {
            var heightinch = (ft * 12) + inch;
            var bmi = (lb / (heightinch * heightinch)) * 703;
            display.value = bmi;
        }
        else {
            conclude.textContent = "No valid Input"
        }

    }
    else if (document.getElementById("metric-units").checked) {
        if (cm > 0 && kg > 0) {
            var meter = cm / 100;
            var bmi = kg / (meter * meter);
            display.value = bmi;
        }
        else {
            conclude.textContent = "No valid input"
        }
    }
    else {
        conclude.textContent = "No valid input";
    }

    display.value = bmi.toFixed(2);

    if (bmi < 18.5) {
        conclude.textContent = "underweight";
    }
    else if (bmi == 18.5 || bmi <= 24.9) {
        conclude.textContent = "Normal Weight";
    }
    else if (bmi >= 25 || bmi <= 29.9) {
        conclude.textContent = "Overweight";
    }
    else if (bmi >= 30) {
        conclude.textContent = "Obese";
    }
}
document.getElementById("calculate").addEventListener("click", calculate);

function reset() {
    document.getElementById("ft").value = "";
    document.getElementById("inch").value = "";
    document.getElementById("lb").value = "";
    document.getElementById("cm").value = "";
    document.getElementById("kg").value = "";
    document.getElementById("result").value = "";
    conclude.textContent = "";

}
document.getElementById("reset").addEventListener("click", reset);