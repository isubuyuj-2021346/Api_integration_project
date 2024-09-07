USE ecommerce_system;

DELIMITER //

CREATE PROCEDURE GetTotalRevenueByCustomer(IN customerID INT, OUT totalRevenue DECIMAL(10, 2))
BEGIN
    -- Variable para almacenar el total de ingresos
    DECLARE total DECIMAL(10, 2) DEFAULT 0;

    -- Sumar el subtotal de todas las órdenes asociadas al cliente
    SELECT SUM(subtotal) INTO total
    FROM OrderItems oi
    JOIN Orders o ON oi.order_id = o.order_id
    WHERE o.customer_id = customerID;

    -- Devolver el total
    SET totalRevenue = total;
END //

DELIMITER ;

-- Variable para almacenar el total de ingresos
SET @totalRevenue = 0;

-- Llamar al procedimiento para el cliente con ID 
CALL GetTotalRevenueByCustomer(7, @totalRevenue);

-- Ver el total de ingresos
SELECT @totalRevenue AS TotalRevenue;
SHOW PROCEDURE STATUS WHERE Db = 'ecommerce_system';






