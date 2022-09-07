var myTest = document.getElementById("message");
var result = document.getElementById("result");
var limit = 60;
result.textContent = 0 + "/" + limit;

myText.addEventListener("input", function () {
    var textLength = myTest.value.length;
    result.textContent = textLength + "/" + limit;

    if (textLength > limit) {
        myTest.style.borderColor = "#ff2851";
        result.style.color = "#ff2851";
    }
    else {
        myTest.style.borderColor = "#b2b2b2";
        result.style.color = "#737373";
    }



});