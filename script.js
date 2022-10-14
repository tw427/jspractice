function User(name, birthday) {
  this.name = name,
  this.birthday = birthday,

  Object.defineProperty(this, "age", {
    get() {
      let currentYear = new Date().getFullYear();
      return currentYear - this.birthday.getFullYear();
    }
  })
}

let tony = new User("Tony", new Date(1998, 1, 26));