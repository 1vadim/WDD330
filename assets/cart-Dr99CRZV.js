import{g as e,s as n}from"./utils-BAMlyj1Q.js";function c(){const a=(e("so-cart")||[]).map(r=>l(r));document.querySelector(".product-list").innerHTML=a.join(""),d()}function l(t){return`<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${t.Image}"
      alt="${t.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${t.Name}</h2>
  </a>
  <p class="cart-card__color">${t.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${t.FinalPrice}</p>
  
  <span  data-id="${t.Id}" class="removeFromCart btn-close">X</span>
</li>`}c();async function m(t){const a=t.target.dataset.id,s=(e("so-cart")||[]).filter(o=>o.Id!==a);n("so-cart",s),c()}function d(){document.querySelectorAll(".removeFromCart").forEach(a=>{a.addEventListener("click",m)})}
