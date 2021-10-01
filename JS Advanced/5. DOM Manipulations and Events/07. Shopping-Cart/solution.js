function solve() {

   let cart = {};

   document.getElementsByClassName("shopping-cart")[0].addEventListener("click", onClick);

   function onClick(ev) {
      if (ev.target.className == "add-product" && ev.target.tagName == "BUTTON") {
         const name = ev.target.parentNode.parentNode.getElementsByClassName("product-title")[0].textContent;
         const price = Number(ev.target.parentNode.parentNode.getElementsByClassName("product-line-price")[0].textContent);
         //console.log(name, price);
         const area = document.getElementsByTagName("textarea")[0];
         area.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`
         if (!cart.hasOwnProperty(name)) {
            cart[name] = price;
         } else {
            cart[name] += price;
         }
      }
   }
   document.getElementsByClassName("checkout")[0].addEventListener("click", checkOut);

   function checkOut() {
      const products = Object.keys(cart);
      const totalPrice = Object.values(cart).reduce((a, b) => a + b, 0);
      const area = document.getElementsByTagName("textarea")[0];
      area.textContent += `You bought ${products.join(", ")} for ${totalPrice.toFixed(2)}.`
      document.getElementsByClassName("shopping-cart")[0].removeEventListener("click", onClick);
      document.getElementsByClassName("checkout")[0].removeEventListener("click", checkOut);

   }
}
