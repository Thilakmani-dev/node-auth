const express = require('express');
const PORT = 8000;
const app = express();

app.use('/',require('./routes'));

app.listen(PORT,function(err){
    if(err){
        console.log(err);
    }
    console.log('server is running');
});

