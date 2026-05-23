import{r}from"./utils-BAMlyj1Q.js";import{P as n}from"./ProductData-DGyi1ufb.js";function o(t){const a=t.SuggestedRetailPrice||t.ListPrice,e=a-t.FinalPrice;let s=`<p class="product-card__price">$${t.FinalPrice}</p>`,i="";if(e>0){const c=Math.round(e/a*100);s=`
            <div class="price-container">
                <span class="product-card__old-price">$${a.toFixed(2)}</span>
                <span class="product-card__price">$${t.FinalPrice}</span>
            </div>
        `,i=`<span class="discount-badge">-${c}%</span>`}return`
    <li class="product-card">
    <a href="/product_pages/?product=${t.Id}">
      <div class="product-card__image-wrapper">
        <img src="${t.Image}" alt="Image of ${t.Name}">
        ${i} 
      </div>
      <h3 class="card__brand">${t.Brand.Name}</h3>
      <h2 class="card__name">${t.NameWithoutBrand}</h2>
      ${s} 
    </a>
  </li>`}class d{constructor(a,e,s){this.category=a,this.dataSource=e,this.listElement=s}async init(){const a=await this.dataSource.getData();this.renderList(a),console.log(a)}renderList(a){r(o,this.listElement,a)}}const l=document.querySelector(".product-list"),p=new n("tents"),m=new d("tents",p,l);m.init();
