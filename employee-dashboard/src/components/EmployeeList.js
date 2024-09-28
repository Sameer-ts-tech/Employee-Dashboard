import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EmployeeCard from './EmployeeCard';
import EditEmployee from './EditEmployee';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const fetchEmployees = async () => {
            const response = await axios.get('http://localhost:5000/employees');
            setEmployees(response.data);
        };
        fetchEmployees();
    }, [refresh]);

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/employees/${id}`);
        setRefresh(!refresh); // Refresh the employee list
    };

    const handleRefresh = () => {
        setRefresh(!refresh);
    };

    return (
        <div>
            {employees.map(employee => (
                <EmployeeCard key={employee.id} employee={employee} onEdit={handleEdit} onDelete={handleDelete} />
            ))}
            {selectedEmployee && (
                <EditEmployee employee={selectedEmployee} onClose={() => setSelectedEmployee(null)} onRefresh={handleRefresh} />
            )}
        </div>
    );
};

export default EmployeeList;
