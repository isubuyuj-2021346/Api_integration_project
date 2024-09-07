USE ecommerce_system;

INSERT INTO Customers (first_name, last_name, email, phone)
VALUES ('John', 'Doe', 'johndoe@gmail.com', '555-1234'),
       ('Jane', 'Smith', 'janesmith@yahoo.com', '555-5678'),
       ('Michael', 'Johnson', 'mjohnson@outlook.com', '555-9876'),
       ('Emily', 'Davis', 'edavis@hotmail.com', '555-2468'),
       ('Robert', 'Brown', 'rbrown@gmail.com', '555-1357'),
       ('Sarah', 'Taylor', 'staylor@yahoo.com', '555-3579'),
       ('David', 'Wilson', 'dwilson@outlook.com', '555-4682'),
       ('Laura', 'Anderson', 'landerson@gmail.com', '555-8642'),
       ('James', 'Thomas', 'jthomas@gmail.com', '555-4321'),
       ('Sophia', 'Moore', 'smoore@gmail.com', '555-9753');
SELECT * FROM Customers;

INSERT INTO Products (product_name, price, stock_quantity)
VALUES ('Laptop DELL', 4000.00, 30),
		('iPhone 14 Pro Max', 1200.00, 10),
		('Samsung Galaxy Watch5', 350.00, 20),
		('MacBook Pro', 3500.00, 25),
		('PlayStation 5', 499.99, 15),
		('Xbox Series X', 499.99, 10),
       ('Google Pixel 7', 799.99, 20),
       ('Sony WH-1000XM4', 349.99, 25),
       ('Apple iPad Pro', 1099.00, 18),
       ('AirPods Pro', 249.99, 50);
SELECT * FROM Products;

INSERT INTO Orders (customer_id, order_date)
VALUES (1, '2024-08-10'),
       (2, '2024-08-12'),
       (3, '2024-08-15'),
       (4, '2024-08-16'),
       (5, '2024-08-17'),
       (6, '2024-08-18'),
       (7, '2024-08-19'),
       (8, '2024-08-20'),
       (9, '2024-08-21'),
       (10, '2024-08-22');
SELECT * FROM Orders;

INSERT INTO OrderItems (order_id, product_id, quantity, subtotal)
VALUES (1, 1, 2, 8000.00),
       (1, 2, 1, 1200.00),
       (2, 3, 3, 1050.00),
       (3, 4, 1, 3500.00),
       (4, 5, 1, 499.99),
       (5, 6, 2, 999.98),
       (6, 7, 1, 799.99),
       (7, 8, 1, 349.99),
       (8, 9, 2, 1598.00),
       (9, 10, 3, 749.97);
SELECT * FROM OrderItems;

-- Question 1
INSERT INTO Products (product_name, price, stock_quantity)
VALUES ('Laptop', 1000.00, 50);

-- Question 2
UPDATE Products
SET stock_quantity = 75
WHERE product_id = 3;

-- Question 3
DELETE FROM OrderItems
WHERE order_id = 10;

DELETE FROM Orders
WHERE order_id = 10;

-- Question 4
SELECT Customers.first_name, Customers.last_name
FROM Orders
JOIN Customers ON Orders.customer_id = Customers.customer_id
WHERE Orders.order_id = 5;

-- Question 5
SELECT Products.product_name, SUM(OrderItems.subtotal) AS total_revenue
FROM OrderItems
JOIN Products ON OrderItems.product_id = Products.product_id
GROUP BY Products.product_name;









