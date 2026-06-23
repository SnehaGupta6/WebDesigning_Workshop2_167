function calculateResult() {

    let count = parseInt(document.getElementById("subjectCount").value);

    if (isNaN(count) || count <= 0) {
        alert("Please enter a valid number of subjects");
        return;
    }

    let total = 0;

    for (let i = 1; i <= count; i++) {

        let marks = parseFloat(prompt("Enter marks for Subject " + i));

        if (isNaN(marks) || marks < 0 || marks > 100) {
            alert("Invalid Marks Entered");
            return;
        }

        total += marks;
    }

    let average = total / count;

    let grade = "";
    let result = "";

    if (average >= 75) {
        grade = "A";
    }
    else if (average >= 60) {
        grade = "B";
    }
    else if (average >= 50) {
        grade = "C";
    }
    else {
        grade = "D";
    }

    if (average >= 40) {
        result = "PASS";
    } else {
        result = "FAIL";
    }

    document.getElementById("result").innerHTML =
        "<h3>Total Marks: " + total + "</h3>" +
        "<h3>Average Marks: " + average.toFixed(2) + "</h3>" +
        "<h3>Grade: " + grade + "</h3>" +
        "<h3>Result: " + result + "</h3>";
}