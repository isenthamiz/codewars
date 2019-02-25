const express = require('express');
const path = require('path')
const cors = require('cors');

const PORT = process.env.PORT || 3009;
const publicPath = path.join(__dirname,'..','public');

const app = express();

app.use(cors());

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath,'index.html'));
})

app.listen(PORT, ()=> {
    console.log('Codewars App is running on PORT: ',PORT);
})