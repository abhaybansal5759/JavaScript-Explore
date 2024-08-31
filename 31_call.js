function SetUsername(username){
    // complex DB calls
    this.username = username
}

function createUser(username,email,password){
    SetUsername.call(this, username) 
    console.log("called"); 
    
    // this.username = username
    this.email = email
    this.password = password

}

const chai = new createUser("chai","chai@fb.com","!23")
console.log(chai);

