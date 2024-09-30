let students = [];
let currentEditIndex = null;


function addStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;

    
    if (!name || !age || !grade) {
        alert("Please fill all fields.");
        return;
    }

    const student = { name, age, grade };
    students.push(student);
    displayStudents();
    clearForm();
}


function displayStudents() {
    const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = ""; 

    students.forEach((student, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.name}</td>
            <td>${student.age}</td>
            <td>${student.grade}</td>
            <td>
                <button onclick="loadEditForm(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}


function loadEditForm(index) {
    currentEditIndex = index;
    const student = students[index];

    document.getElementById("name").value = student.name;
    document.getElementById("age").value = student.age;
    document.getElementById("grade").value = student.grade;

    document.getElementById("editButton").style.display = "inline";
    document.querySelector("button[onclick='addStudent()']").style.display = "none";
}


function editStudent() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const grade = document.getElementById("grade").value;

   
    if (!name || !age || !grade) {
        alert("Please fill all fields.");
        return;
    }

    students[currentEditIndex] = { name, age, grade };
    displayStudents();
    clearForm();
    resetButtons();
}


function deleteStudent(index) {
    students.splice(index, 1);
    displayStudents();
}


function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("grade").value = "";
}


function resetButtons() {
    document.getElementById("editButton").style.display = "none";
    document.querySelector("button[onclick='addStudent()']").style.display = "inline";
}
