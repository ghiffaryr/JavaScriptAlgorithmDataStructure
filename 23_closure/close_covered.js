function init() {
    var name = 'Obi Wan';

    function greet() {
        console.log(`Halo, ${name}`);
    }

    return greet;
}

let myFunction = init();
myFunction();

/* output
Halo, Obi Wan
 */