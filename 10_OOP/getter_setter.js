// Getter and Setter functions
// Getter and Setter functions are used to get and set the value of a property. 
// 1. Getter function is used to get the value of a property.
// 2. Setter function is used to set the value of a property.

class User {
  constructor(email, passward) {
    this.email = email;
    this.passward = passward;
  }


  get email(){
    return `${this._email.toUpperCase()}something`
  }

  set email(mail){
    this._email = mail
  }

  get passward(){
    return this._passward.toUpperCase()
  }

  set passward(value){
    this._passward =  value
  }
}

const Bhatti = new User("bhatti@gmail.com", 'abc');
console.log(Bhatti.email);
console.log(Bhatti.passward);
