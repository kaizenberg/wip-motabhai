const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();

app.use(compression());

function handlerRender(req, res) {    
    res.sendFile('index.html', {root: path.join(__dirname, 'assets')});
}

app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.get('*', handlerRender);
app.listen(process.env.PORT || 5000);