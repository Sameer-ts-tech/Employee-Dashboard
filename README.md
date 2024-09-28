Project Structure
1. employee-backend
A basic Node.js server using Express to manage employee data.

index.js:
-REST API endpoints to fetch, create, update, and delete employee data.
-Server runs on port 5000.
-Sample employee data is hardcoded.

API Endpoints:
-GET /employees: Fetch all employees.
-POST /employees: Add a new employee.
-PUT /employees/:id: Edit employee data.
-DELETE /employees/:id: Delete an employee.

2. employee-dashboard
The frontend of the app built using React and styled with CSS.

Main Features:
-Displays a list of employees.
-Allows editing and deleting employee records.

Key Files:
App.js:
Main entry point that renders the EmployeeList component and displays a header.

EmployeeList.js:
Fetches and displays employee data, handles edit and delete actions.

EmployeeCard.js:
Displays individual employee details and provides buttons for edit and delete.

EditEmployee.js:
A modal form for editing employee details with input fields for name, email, and body.

App.css:
Contains global styles including the layout, card design, button hover effects, and the modal form.


How to Run
-Backend (employee-backend)
-Navigate to the employee-backend folder.

Install dependencies:

    npm install

Start the server:

    node index.js

Server runs on http://localhost:5000.


Frontend (employee-dashboard)

-Navigate to the employee-dashboard folder.

Install dependencies:

    npm install

Start the React application:

    npm start

The app runs on http://localhost:3000.
