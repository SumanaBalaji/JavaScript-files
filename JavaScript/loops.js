var name = "Sumana";
var fname = "Balaji";
if (name == "sumana" && fname == "Balaji") {
    document.getElementById("demo").innerHTML = "matched";
}
if (name == "Sumana" || fname == "Balaji") {
    document.getElementById("demo").innerHTML = "Not matched";
}