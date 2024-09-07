-- CREATE DATABASE ecommerce_system;
USE ecommerce_system;

CREATE TABLE Customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,  
    first_name VARCHAR(50) NOT NULL,             
    last_name VARCHAR(50) NOT NULL,              
    email VARCHAR(100) UNIQUE NOT NULL,          
    phone VARCHAR(15)                           
);

CREATE TABLE Products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,  
    product_name VARCHAR(100) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    stock_quantity INT NOT NULL 
);

CREATE TABLE Orders (
    order_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT, 
    order_date DATE NOT NULL, 
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id) 
);

CREATE TABLE OrderItems (
    order_item_id INT PRIMARY KEY AUTO_INCREMENT, 
    order_id INT,
    product_id INT, 
    quantity INT NOT NULL, 
    subtotal DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (order_id) REFERENCES Orders(order_id), 
    FOREIGN KEY (product_id) REFERENCES Products(product_id)
);




-- DROP DATABASE ecommerce_system;