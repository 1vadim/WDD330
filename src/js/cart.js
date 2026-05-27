import { loadHeaderFooter } from "./utils.mjs";
import ShoppingCart from "./ShoppingCart.mjs";

loadHeaderFooter();

const cartListElement = document.querySelector(".product-list");

const cart = new ShoppingCart("so-cart", cartListElement);

cart.init();
