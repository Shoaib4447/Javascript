// Object getter and setter
const User = {
  _name: "John",
  _surname: "Doe",
  get name() {
    return this._name.toUpperCase();
  },
  set name(value) {
    this._name = value;
  },
};

// Make instance
const user = Object.create(User);
console.log(user.name)
