import React, { useState } from 'react';
import axios from 'axios';

const EditEmployee = ({ employee, onClose, onRefresh }) => {
    const [formData, setFormData] = useState({ ...employee });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:5000/employees/${employee.id}`, formData);
        onRefresh();
        onClose();
    };

    return (
        <div className="edit-employee" style={{ padding: '20px', border: '1px solid #ccc', margin: '10px', borderRadius: '5px' }}>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <label>Email:</label>
                <input type="text" name="email" value={formData.email} onChange={handleChange} />
                <label>Body:</label>
                <textarea name="body" value={formData.body} onChange={handleChange} />
                <button type="submit">Save</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </form>
        </div>
    );
};

export default EditEmployee;
