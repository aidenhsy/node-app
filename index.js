const express = require('express');
const app = express();

app.get('/api', (req, res)=>{res.send('hello world')});
app.listen(5000, ()=>{console.log('listening on 5000')});
