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

// Exportar las funciones si las necesitas en otros archivos
module.exports = { getAllEmployees, countHighEarningEmployees };

// Llamada para contar empleados con salario mayor a $300,000
countHighEarningEmployees();
