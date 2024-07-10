// ES6


// As the new keyword is used 
class User {
  constructor(name, email, password) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  encryptPassword(){
    return `${this.password}abc123`
  }

  changeUsername(){
    return `${this.name.toUpperCase()}`
  }
}

const chai = new User('Bhatti','bhatti@gmail.com',3079493196)
console.log(chai.encryptPassword())
console.log(chai.changeUsername())


// Behind the scene
function User1(name, email, password){
  this.name = name;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function(){
  return `${this.password}abc123`
}

User1.prototype.changeUsername = function(){
  return `${this.name.toUpperCase()}`
}

const tea = new User1('tea','tea@gmail.com',12345)
console.log(tea.encryptPassword())
console.log(tea.changeUsername())