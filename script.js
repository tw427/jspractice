let string = "racecar!";

const palindroms = function(str) {
    let chars = str.split('');
  
    let reverse = chars.reduce( 
        (acc, item) => { return (item == '!' || item == ',' || item == '.' || item == ' ') ? acc : item + acc; }
    )

    let original = chars.reduce(
        (acc, item) => { return (item == '!' || item == ',' || item == '.' || item == ' ') ? acc : acc + item }
    )

    console.log(reverse);
    console.log(original);
}
