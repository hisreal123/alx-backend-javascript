alert(" kkkkk");
//
var studentsList = [
    {
        firstName: "George",
        lastName: "Omos",
        age: 20,
        location: "32 ayeobasan street"
    },
    {
        firstName: "Iseal",
        lastName: "James",
        age: 30,
        location: "44 ayeobasan street"
    }
];
var table = document.createElement('table');
// rendering through
studentsList.forEach(function (student) {
    var row = table.insertRow();
    var nameCell = row.insertCell();
    var locationCell = row.insertCell();
    nameCell.textContent = student.firstName;
    locationCell.textContent = student.location;
});
document.body.appendChild(table);
