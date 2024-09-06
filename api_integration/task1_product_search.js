// Lista de productos
const products = [
    { product_id: 1, product_name: 'Laptop', price: 4000 },
    { product_id: 2, product_name: 'USB', price: 150 },
    { product_id: 3, product_name: 'Adaptador HDMI', price: 100 },
    { product_id: 4, product_name: 'Cámara instantánea', price: 1800 }
  ];
  
  // Función para buscar un producto por su nombre
  function searchProductByName(productName) {
    // Hay que convertir el nombre a minusculas para hacer una búsqueda no sensible a mayúsculas
    const foundProduct = products.find(product => 
      product.product_name.toLowerCase() === productName.toLowerCase()
    );
    
    if (foundProduct) {
      return foundProduct;
    } else {
      return `Product with name "${productName}" not found.`;
    }
  }
  
  const searchResult = searchProductByName('Adaptador HDMI');
  console.log(searchResult);
  
  