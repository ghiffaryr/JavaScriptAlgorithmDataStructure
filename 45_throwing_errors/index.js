// let json = '{ "age": 22 }';
 
// try {
//     let user = JSON.parse(json);
 
//     if (!user.name) {
//         throw new SyntaxError("'name' is required.");
//     }
 
//     console.log(user.name); // undefined
//     console.log(user.age);  // 22
// } catch (error) {
//     console.log(`JSON Error: ${error.message}`);
// }

let json = '{ "name": "Ghiffary", "age": 22 }';

try {
    let user = JSON.parse(json);
 
    if (!user.name) {
        throw new SyntaxError("'name' is required.");
    }
 
    errorCode;
 
    console.log(user.name); // Ghiffary
    console.log(user.age);  // 22
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log(`JSON Error: ${error.message}`);
    } else if (error instanceof ReferenceError) {
        console.log(error.message);
    } else {
        console.log(error.stack);
    }
}


