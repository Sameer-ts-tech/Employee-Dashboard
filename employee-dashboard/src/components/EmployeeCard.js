import React from 'react';

const EmployeeCard = ({ employee, onEdit, onDelete }) => {
    return (
        <div className="employee-card" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
            <h3>{employee.name}</h3>
            <p>Email: {employee.email}</p>
            <p>Body: {employee.body}</p>
            <button onClick={() => onEdit(employee)}>Edit</button>
            <button onClick={() => onDelete(employee.id)}>Delete</button>
        </div>
    );
};

export default EmployeeCard;
