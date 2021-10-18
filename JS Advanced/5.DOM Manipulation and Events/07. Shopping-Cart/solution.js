function solve() {
   document.getElementsByClassName('shopping-cart')[0].addEventListener('click', onClick);
   const output = document.getElementsByTagName('textarea')[0];


   let cart = [];

   function onClick(ev) {
      if (ev.target.tagName === "BUTTON" && ev.target.classList.contains('add-product')) {
         const product = ev.target.parentNode.parentNode;
         const nameOfProduct = product.querySelector('.product-title').textContent;
         const price = Number(product.querySelector('.product-line-price').textContent);


         cart.push({
            nameOfProduct,
            price
         });

         output.value += `Added ${nameOfProduct} for ${price.toFixed(2)} to the cart.\n`
      }
   }

   document.getElementsByClassName('checkout')[0].addEventListener('click', checkoutButton);

   function checkoutButton(){
      const products = new Set();
      let total = 0;

      for(let product of cart){
         products.add(product.nameOfProduct);
         total += Number(product.price);
      }
      output.value += `You bought ${[...products.keys()].join(', ')} for ${total.toFixed(2)}.`;
      document.getElementsByClassName('shopping-cart')[0].removeEventListener('click', onClick);
      document.getElementsByClassName('checkout')[0].removeEventListener('click', checkoutButton);
   }

}