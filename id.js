document.getElementById("idForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const year = document.getElementById("year").value;
    const sem = document.getElementById("semester").value;
    const dept = document.getElementById("department").value;
    const shortName = document.getElementById("shortName").value;

    const generatedID = generateID(name, year, sem, dept);
    const generatedEmail = generateEmail(name, dept, shortName);

    document.getElementById("output").innerHTML = "Generated ID: " + generatedID + "<br>Generated Email: " + generatedEmail;
});

function generateID(name, year, sem, dept) {
    const b = year.substring(2);

    let deptCode = '';
    if (dept === '1') {
        deptCode = '101';
    } else if (dept === '2') {
        deptCode = '201';
    } else if (dept === '3') {
        deptCode = '301';
    }

    const studentNumber = Math.floor(Math.random() * 300) + 1;
    const concatenatedID =  b + deptCode + studentNumber.toString().padStart(3, '0');
    return concatenatedID;
}

function generateEmail(name, dept, shortName) {
    const parts = name.split(" ");
    const firstName = parts[0].toLowerCase();
    const lastName = parts[parts.length - 1].toLowerCase();

    let departmentName = '';
    if (dept === '1') {
        departmentName = 'cse';
    } else if (dept === '2') {
        departmentName = 'eee';
    } else if (dept === '3') {
        departmentName = 'bba';
    }

    const email = firstName + "." + lastName + "." + departmentName + "@" + shortName + ".edu.bd";
    return email;
}
