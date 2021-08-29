import faker from 'faker'; // the faker library is used to generate fake data

let products = '';

for (let i=0; i < 3; i++){
    const name = faker.commerce.productName(); // create a fake product name using faker library

    product += `<div>${name}</div>`;

}

console.log(products);