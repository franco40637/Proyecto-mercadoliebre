const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/home.html'));
});

app.get('/register.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'register.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
});
app.post('/', (req, res) => {
    res.redirect('/');
});
const port= process.env.PORT || 3003
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
