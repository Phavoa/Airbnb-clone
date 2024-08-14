const cors = require('cors')
const express = require('express');
const app = express();


app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'
}));

app.get('/test', (req, res) => {
    res.json({msg: 'test ok'})
});


app.listen(4000, () => {
    console.log('server is runing on port 4000...')
})