// Inheritance is a way to create a new class from an existing class. The new class is called the derived class, and the existing class is called the base class. The derive class inherits the properties and methods of the base class.

class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, subject){
        super(username);
        this.subject = subject;
    }

    addCourse(){
        console.log(`Teacher ${this.username} is teaching ${this.subject}`)
    }
}

const Ustad = new Teacher('Bhatti','Web Development' )
Ustad.logMe();
Ustad.addCourse();


console.log(Ustad instanceof User);
console.log(Ustad instanceof Teacher);