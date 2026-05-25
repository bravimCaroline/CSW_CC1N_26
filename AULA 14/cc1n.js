var issoeumastring = 'Isso e uma string';
let issoeumnumero = 4;
let issotambemeumnumero = 5;
const issoeumbooleano = true;
let issotambemeumastring = '4';

console.log(issoeumastring == issoeumnumero);
console.log(issoeumnumero == issotambemeumastring);
console.log(issoeumnumero === issotambemeumastring);
console.log(issoeumnumero === issotambemeumnumero);

console.log(typeof issoeumastring )

console.log(issoeumnumero + issotambemeumastring);

// numeros pares 0 a 10

for (let i = 0; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// numeros impares 0 a 10

let j = 0;
while (j <= 10) {
    if (j % 2 !== 0) {
        console.log(j);
    }
    j++
}
