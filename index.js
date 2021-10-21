function createUser(userId, userName, experience, password) {
    return {id: parseInt(userId),
            name: userName,
            experience: parseInt(experience), 
            password};
}

const users = [{id: 1, name: "Ashutosh", experience: 1, password:"password"},
                {id: 2, name: "Ashu", experience: 1, password: "password"}];
let index = 0;

function addUser() {
    debugger;
    const params = new URLSearchParams(window.location.search)
    // for (const param of params) {
    // console.log(param)
    // }
    userId = params.get('Id');
    userName= params.get('Name');
    experience = params.get('Experience');
    password = params.get('password');
    users.push(createUser(userId, userName, experience, password));
    console.log(users);
}

function printUser() {
    if (index < users.length){
        document.getElementById("user").innerHTML = JSON.stringify(users[index]);
        index += 1;
    }
}

function login(){
    let userName = window.prompt("Enter you username: ");
    let password = window.prompt("Enter your password: ");
    for (let user in users){
        if (users[user].name == userName && users[user].password == password){
            alert(`${userName},You have successfully logged in.`);
            
        }
    }
}