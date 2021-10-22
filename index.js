function createUser(userId, userName, experience, password) {
    return {id: parseInt(userId),
            name: userName,
            experience: parseInt(experience), 
            password};
}

const users = new Set([{id: 1, name: "Ashutosh", experience: 1, password:"password"},
                {id: 2, name: "Ashu", experience: 1, password: "password"}]);
let index = 0;

function addUser() {
    debugger;
    const params = new URLSearchParams(window.location.search)
    userId = params.get('Id');
    userName= params.get('Name');
    experience = params.get('Experience');
    password = params.get('password');
    users.add(createUser(userId, userName, experience, password));
    console.log(users);
}

function printUser() {
    debugger;
    for (let user of users) {
        console.log(user);
        document.getElementById("user").append(JSON.stringify(user));
    }
    // if (index < users.size){
    //     document.getElementById("user").innerHTML = JSON.stringify(users[index]);
    //     index += 1;
    // }
}

function login(){
    let userName = window.prompt("Enter you username: ");
    let password = window.prompt("Enter your password: ");
    for (let user of users){
        if (user.name == userName && user.password == password){
            alert(`${userName},You have successfully logged in.`);
            
        }
    }
}