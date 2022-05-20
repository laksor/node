const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [
    {id: 1, name: 'shabana', email: 'shaban@sha.com', phone: '017888888' },
    {id: 1, name: 'shabnur', email: 'shabnur@a.com', phone: '01788558' },
    {id: 1, name: 'alia', email: 'alia@h.com', phone: '017888855' },
    {id: 1, name: 'kerela', email: 'kerela@sa.com', phone: '017888877' },
    {id: 1, name: 'kamazo', email: 'kamazo@ha.com', phone: '017888899' },
    {id: 1, name: 'shuchorita', email: 'shuhorita@kb.com', phone: '017888833' },
    {id: 1, name: 'lali', email: 'slali@sha.com', phone: '0178888666' },
]

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user)
})

app.get('/', (req, res) => {
    res.send('server side');
})

app.listen(port, () => {
    console.log('Listening to port', port);
})