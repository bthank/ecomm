import {mount as productsMount} from 'products/ProductsIndex'; // products/ProductsIndex is an alias to products -> src -> index.js
import {mount as cartMount} from 'cart/CartShow';   // cart/CartShow is an alias to cart -> src -> index.js

console.log('Container!');

//const el = document.querySelector('#my-products');
const productsElement = document.getElementById('my-products');
productsMount(productsElement);
const cartElement = document.getElementById('my-cart');
cartMount(cartElement);