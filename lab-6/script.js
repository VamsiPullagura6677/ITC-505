function convertToMinutes() {
    var hours = parseFloat(document.getElementById("hoursInput").value);
    if (!isNaN(hours)) {
        var minutes = hours * 60; // 1 hour = 60 minutes
        document.getElementById("result").innerHTML = hours + " hours is equal to " + minutes.toFixed(2) + " minutes.";
    } else {
        document.getElementById("result").innerHTML = "Please enter a valid number for hours.";
    }
}

var x = document.lastModified;
document.getElementById('lastModified').textContent = x;
