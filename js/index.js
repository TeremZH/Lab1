document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();
    var givenName = document.getElementById('givenname').value
    var lastName = document.getElementById('lastname').value
    console.log("First Name: " + givenName);
    console.log("Last Name: " + lastName);
    var fullName = givenName + " " + lastName;
    var outPut = document.getElementById("name");
    outPut.textContent = fullName;
})


