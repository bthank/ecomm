import faker from 'faker'; // faker creates dummy data

const mount = (element) => {
    const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;

    element.innerHTML = cartText;
}

// Put checks to determine if we are running this component in development and
// in isolation and handle appropriately
if (process.env.NODE_ENV === 'development') {
    const element = document.querySelector('#cart-dev');

    // if the element does exist in cart's HTML, then mount the element
    if (element) {
        mount(element);
    }
}
// export mount function so that it can be used by the container application
export {mount};
