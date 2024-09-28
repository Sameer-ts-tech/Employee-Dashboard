import React from 'react';
import EmployeeList from './components/EmployeeList';

function App() {
    return (
        <div className="App" style={{ padding: '20px' }}>
            <h1>Employee Dashboard</h1>
            <EmployeeList />
        </div>
    );
}

export default App;
