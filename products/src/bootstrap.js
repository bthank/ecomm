import faker from 'faker'; // the faker library is used to generate fake data



const mount = (element) => {
    let products = '';

    for (let i=0; i < 5; i++){
        const name = faker.commerce.productName(); // create a fake product name using faker library
    
        products += `<div>${name}</div>`;
    
    }   
    
    element.innerHTML = products;
};


// Context/Situation #1
// We are running this file in development in isolation 
// We are using our local index.html file which definitely has an element
// with an id of 'dev-products'
// We want to immediately render our app into that element
if (process.env.NODE_ENV === 'development'){
    // 2nd check is to check whether we are running products in isolation
    const element = document.querySelector('#dev-products');

    // Assuming the container doesn't have an element with an id of 'dev-products'
    // and products does.
    if (element) {
        // if true, then we are probably running this component in isolation
        mount(element);
    }
}

// Context/Situation #2
// We are running this file in development or production
// through the container app.
// NO GUARANTEE that an element with an id of 'dev-products' exists in the container app.
// WE DO NOT WANT to try to immediately render the app.
export { mount };