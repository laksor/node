const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const users = [
    {id: 1, name: 'shabana', email: 'shaban@sha.com', phone: '017888888' },
    {id: 2, name: 'shabnur', email: 'shabnur@a.com', phone: '01788558' },
    {id: 3, name: 'alia', email: 'alia@h.com', phone: '017888855' },
    {id: 4, name: 'kerela', email: 'kerela@sa.com', phone: '017888877' },
    {id: 5, name: 'kamazo', email: 'kamazo@ha.com', phone: '017888899' },
    {id: 6, name: 'shuchorita', email: 'shuhorita@kb.com', phone: '017888833' },
    {id: 7, name: 'lali', email: 'slali@sha.com', phone: '0178888666' },
]

app.get('/users', (req, res) => {
    if(req.query.name){
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else{
        res.send(users);
    }
})

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.post('/user', (req, res) =>{
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})

app.get('/fruits', (req, res) =>{
    res.send(['mango', 'apple', 'oranges']);
})

app.get('/fruits/mango/fazle', (req, res) =>{
    res.send(['sour', 'sour', 'mita']);
})

app.get('/', (req, res) => {
    res.send('server side');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})