// Lista de productos
const products = [
    { product_id: 1, product_name: "Laptop Dell", price: 7000 },
    { product_id: 2, product_name: "IPhone XS", price: 2800 },
    { product_id: 3, product_name: "Audifonos Gamer", price: 160 }
];

// carrito de compras:
const cart = [
    { product_id: 1, quantity: 2 }, 
    { product_id: 2, quantity: 1 }, 
    { product_id: 3, quantity: 3 }  
];

// funcion para calcular el precio de los productos del carrito
function calculateCartTotal(cart, products) {
    let total = 0;

    cart.forEach(item => {
        const product = products.find(p => p.product_id === item.product_id);

        if (product) {
            total += product.price * item.quantity;
        } else {
            console.log(`Product with ID ${item.product_id} not found.`);
        }
    });

    return total;
}

// Llamar a la función e imprimir el total 
const total = calculateCartTotal(cart, products);
console.log("Total price of items in cart:", total);
