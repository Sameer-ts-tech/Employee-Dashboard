const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

let employees = [
    {
        postId: 1,
        id: 1,
        name: "id labore ex et quam laborum",
        email: "Eliseo@gardner.biz",
        body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
    },
    {
        postId: 1,
        id: 2,
        name: "quo vero reiciendis velit similique earum",
        email: "Jayne_Kuhic@sydney.com",
        body: "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
    },
    {
        postId: 1,
        id: 3,
        name: "odio adipisci rerum aut animi",
        email: "Nikita@garfield.biz",
        body: "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
    },
    {
        postId: 1,
        id: 4,
        name: "alias odio sit",
        email: "Lew@alysha.tv",
        body: "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
    },
    {
        postId: 1,
        id: 5,
        name: "vero eaque aliquid doloribus et culpa",
        email: "Hayden@althea.biz",
        body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
    }
];

app.get('/employees', (req, res) => {
    res.json(employees);
});


app.post('/employees', (req, res) => {
    const newEmployee = { ...req.body, id: employees.length + 1 };
    employees.push(newEmployee);
    res.status(201).json(newEmployee);
});


app.put('/employees/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, body } = req.body;

    const employeeIndex = employees.findIndex(emp => emp.id === parseInt(id));
    if (employeeIndex !== -1) {
        employees[employeeIndex] = { id: parseInt(id), name, email, body };
        res.status(200).json(employees[employeeIndex]);
    } else {
        res.status(404).send('Employee not found');
    }
});

app.delete('/employees/:id', (req, res) => {
    const { id } = req.params;
    const employeeIndex = employees.findIndex(emp => emp.id === parseInt(id));
    
    if (employeeIndex !== -1) {
        employees.splice(employeeIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Employee not found');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/employees`);
});
