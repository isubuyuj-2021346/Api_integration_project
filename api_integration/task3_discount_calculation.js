
function calculateAndPrintCartSummary(cart) {
  // Inicializamos las variables para acumular los totales
  let totalWithoutDiscount = 0;
  let totalDiscountAmount = 0;
  let totalAfterDiscount = 0;

  // Iteramos sobre cada producto en el carrito
  cart.forEach(item => {
    // Calculamos el descuento aplicado al precio del producto
    const discountAmount = (item.price * item.discount_percentage) / 100;
    
    // Calculamos el precio después de aplicar el descuento
    const finalPrice = item.price - discountAmount;
    
    // Acumulamos los totales
    totalWithoutDiscount += item.price;
    totalDiscountAmount += discountAmount;
    totalAfterDiscount += finalPrice;
  });

  // Imprimimos los resultados
  console.log("Valor total productos: $" + totalWithoutDiscount.toFixed(2));
  console.log("Descuento: $" + totalDiscountAmount.toFixed(2));
  console.log("Precio final: $" + totalAfterDiscount.toFixed(2));

  return {
    totalWithoutDiscount: totalWithoutDiscount.toFixed(2),
    totalDiscountAmount: totalDiscountAmount.toFixed(2),
    totalAfterDiscount: totalAfterDiscount.toFixed(2)
  };
}

const cart = [
  { price: 150, discount_percentage: 12 },
  { price: 280, discount_percentage: 60 },
  { price: 800, discount_percentage: 40 }
];

const summary = calculateAndPrintCartSummary(cart);
