// API URL base
const API_URL = 'http://dummy.restapiexample.com/api/v1';

// Función para obtener todos los empleados
async function getAllEmployees() {
    try {
        const response = await fetch(`${API_URL}/employees`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        return data.data; // Asumiendo que los datos vienen en un campo "data"
    } catch (error) {
        console.error('Error fetching employees:', error);
        return [];
    }
}

// Función para contar empleados que ganan más de $300,000
async function countHighEarningEmployees() {
    const employees = await getAllEmployees();

    if (!employees.length) {
        console.log('No employees found.');
        return;
    }

    // Filtrar empleados con salario > 300,000
    const highEarners = employees.filter(employee => {
        // Asegúrate de que el salario esté en número
        const salary = Number(employee.employee_salary);
        return salary > 300000;
    });

    console.log(`Total de empleados que ganan más de $300,000: ${highEarners.length}`);
    return highEarners.length;
}

// Exportar las funciones si se necesita en otros archivos
module.exports = { getAllEmployees, countHighEarningEmployees };

// Llamada para contar empleados con salario mayor a $300,000
countHighEarningEmployees();

// Create a record with your name. You can use fake data for the other attributes.

// API URL base
const API_URL2 = 'http://dummy.restapiexample.com/api/v1';

// Función para crear un nuevo empleado
async function createEmployee() {
    const employeeData = {
        name: 'Isai Alejandro Subuyuj García', // Tu nombre
        salary: '50000', // Datos ficticios
        age: '19', // Edad ficticia
    };

    try {
        const response = await fetch(`${API_URL2}/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(employeeData),
        });

        const data = await response.json();

        if (data.status === 'success') {
            console.log('Empleado creado con éxito:', data.data);
        } else {
            console.log('Error al crear empleado:', data.message);
        }
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
}

// Exportar la función si la necesitas en otros archivos
module.exports = { createEmployee };

// Llamada para crear un nuevo empleado
createEmployee();


// What’s your user id?
const API_URL3 = 'http://dummy.restapiexample.com/api/v1';

// Función para obtener el ID del usuario
async function getUserId() {
    try {
        const response = await fetch(`${API_URL3}/employees`, {
            method: 'GET',
        });

        const textResponse = await response.text(); // Obtén la respuesta en formato texto para ver qué está devolviendo el servidor
        console.log('Raw Response:', textResponse); // Imprime la respuesta en bruto

        const data = JSON.parse(textResponse); // Intenta convertir el texto en JSON

        if (data.status === 'success') {
            const employee = data.data.find(emp => emp.employee_name === 'Isai Alejandro Subuyuj García');
            if (employee) {
                console.log('Tu ID de usuario es:', employee.id);
            } else {
                console.log('No employees found.');
            }
        } else {
            console.log('Error fetching employees:', data.message);
        }
    } catch (error) {
        console.error('Error fetching employees:', error);
    }
}
// Llamar a la función para obtener el ID del usuario
getUserId();

// Error 429 Too Many Requests: limite de solicitudes API alcanzado.