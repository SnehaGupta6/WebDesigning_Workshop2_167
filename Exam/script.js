function calculate() {

    let n = parseInt(document.getElementById("subjects").value);

    let total = 0;
    let pass = true;

    for (let i = 1; i <= n; i++) {

        let marks = parseInt(prompt("Enter marks for Subject " + i));

        total = total + marks;

        if (marks < 33) {
            pass = false;
        }
    }

    let average = total / n;

    let grade;

    if (average >= 90)
        grade = "A";
    else if (average >= 75)
        grade = "B";
    else if (average >= 60)
        grade = "C";
    else if (average >= 40)
        grade = "D";
    else
        grade = "F";

    document.getElementById("result").innerHTML =
        "Total Marks = " + total +
        "<br>Average = " + average +
        "<br>Grade = " + grade +
        "<br>Result = " + (pass ? "PASS" : "FAIL");
}