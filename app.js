const express = require('express');
const path = require('path');
const cors = require('cors')

const app = express();

const port = process.env.PORT || 5000;

if (process.env.NODE_ENV === 'production') {
    app.use(cors())
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'build', 'index.html'))
    });
}


app.listen(port, (err) => {
    if (err) console.warn(err);
    console.log(`App listen on post: ${port}`);
})
