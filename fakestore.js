async function calculateTotal() {
  const quantities = {1: 3, 4: 4, 3: 5};
  let total = 0;

  for (let id in quantities) {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const product = await response.json();
    total += product.price * quantities[id];
  }

  return total;
}

calculateTotal().then(total => console.log(total));
