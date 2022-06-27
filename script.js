let menu = {
    width: 200,
    height: 300,
    title: 'My Menu',
}

function multiplyNumeric(menu) {
    for (let key in menu) {
        if (typeof(menu[key]) == 'number') {
            // learned the importance that you must assign the value to the result of the equation
            // so we apply menu[key] = menu[key] * 2
            menu[key] *= 2;
        }
    }
}