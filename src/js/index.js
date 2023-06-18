'use-strict';

import express from 'express';
const port = process.env.port || 5000;
const app = express();


app.get('/', (req, res) => {
    res.send('<h1>Hello First Repo GitHub</h1>')
});

app.listen(port, () => {
    console.log(`Server Running on ${port}`);
});