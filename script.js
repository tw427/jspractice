let user = {
  name: "Tony",
  surname: "W",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
}

user.fullName = "Katie G.";
console.log(user.name);
console.log(user.surname);