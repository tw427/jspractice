let user = {
  get name() {
    return this._name;
  },

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short, need at least 4 characters");
      return;
    }
    this._name = value;
  }
};

user.name = "Tony";
alert(user.name) // Tony | The input meets the requirements!

user.name = "Kat";
// alert(user.name) will meet our if condition and alert the user that the name is too short.