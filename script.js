let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

// function printList(list) {
//     while (list) {
//         console.log(list);
//         list = list["next"];
//     }
//     return;
// }

function printList(list) {

    console.log(list);

    if (list.next) {
        printList(list.next);
    }
}