// Won't work
// function makeCoffee() {
//     const coffee = getCoffee(); // async process menggunakan promise
//     console.log(coffee);
// }
 
// makeCoffee();

// promise
// function makeCoffee() {
//     getCoffee().then(coffee => {
//         console.log(coffee);
//     });
// }
 
// makeCoffee();

//callback
// function makeCoffee() {
//     getCoffee(function(coffee) {
//         console.log(coffee);
//     });
// }
 
// makeCoffee();

const getCoffee = () => {
    return new Promise((resolve, reject) => {
        const seeds = 100;
        setTimeout(() => {
            if (seeds >= 10) {
                resolve("Kopi didapatkan!");
            } else {
                reject("Biji kopi habis!");
            }
        }, 1000);
    })
}

// function makeCoffee() {
//     getCoffee().then(coffee => {
//         console.log(coffee);
//     });
// }
 
// makeCoffee();
 
/* output
Kopi didapatkan!
*/

// async like sync syntax
async function makeCoffee() {
    const coffee = await getCoffee();
    console.log(coffee);
}
 
makeCoffee();
 
/* output
Kopi didapatkan!
*/