USE ecommerce_system;

-- Display a list of products and their stock quantities.
SELECT product_name, stock_quantity FROM Products;

-- Allow the user to search for products by their name.
SELECT ProductName, StockQuantity FROM Products WHERE ProductName LIKE '%search_term%'; 


-- Allow the user to place an order by selecting a customer and adding order items.
INSERT INTO Orders (CustomerID) VALUES (1); 
-- Obtener el ID del pedido recién creado
SET @OrderID = LAST_INSERT_ID();

-- Agregar productos al pedido
INSERT INTO OrderItems (OrderID, ProductID, Quantity) VALUES (@OrderID, 1, 2); 

