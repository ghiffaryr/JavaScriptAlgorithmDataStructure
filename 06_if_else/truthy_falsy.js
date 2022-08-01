/* Falsy
Number 0
BigInt 0n
String kosong seperti ""atau ''
null
undefined
NaN, atau Not a Number
*/

let name = "";

if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}

/* output:
Nama masih kosong
 */