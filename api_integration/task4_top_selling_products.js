
function getTopSellingProducts(orders, N) {
  const salesMap = {};

  orders.forEach(order => {
    const { product_id, quantity } = order;

    if (salesMap[product_id]) {
      salesMap[product_id] += quantity;
    } else {
      salesMap[product_id] = quantity;
    }
  });

  const salesArray = Object.entries(salesMap).map(([product_id, total_quantity]) => ({
    product_id,
    total_quantity
  }));

  salesArray.sort((a, b) => b.total_quantity - a.total_quantity);
    return salesArray.slice(0, N);
}

const stock = [
  { product_id: 'P1', name: 'Laptop HP', price: 8000 },
  { product_id: 'P2', name: 'Iphone X', price: 6000 },
  { product_id: 'P3', name: 'Tablet 12GB', price: 2500 },
  { product_id: 'P4', name: 'Headphones-BG', price: 250 },
  { product_id: 'P5', name: 'Smartwatch Watch 3', price: 400 },
  { product_id: 'P6', name: 'Keyboard Mecanico 60%', price: 150 },
  { product_id: 'P7', name: 'Mouse Inalambrico', price: 100 }
];

// Implementación de multiples carritos
const cart1 = [
  { product_id: 'P1', quantity: 1 },  
  { product_id: 'P3', quantity: 2 },  
  { product_id: 'P5', quantity: 1 }  
];

const cart2 = [
  { product_id: 'P1', quantity: 1 },
  { product_id: 'P4', quantity: 4 },  
  { product_id: 'P6', quantity: 2 }  
];

const cart3 = [
  { product_id: 'P2', quantity: 1 },
  { product_id: 'P6', quantity: 3 },  
  { product_id: 'P7', quantity: 5 }  
];

const combinedOrders = [...cart1, ...cart2, ...cart3];

const topSelling = getTopSellingProducts(combinedOrders, 3);

console.log("Top 3 productos más vendidos:");
topSelling.forEach((product, index) => {
  const stockProduct = stock.find(item => item.product_id === product.product_id);
  console.log(`${index + 1}. Producto: ${stockProduct.name}, Vendido: ${product.total_quantity} unidades`);
});

