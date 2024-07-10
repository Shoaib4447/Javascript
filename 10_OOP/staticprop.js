// Static properties
// Static properties are properties that are shared across all instances of a class. They are defined using the static keyword.  Static properties are useful when you want to store data that is common to all instances of a class and you don't want to create a separate instance of the class for each piece of data.

class User {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username : ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const bhatti = new User('Bhatti')
console.log(bhatti.createId())

