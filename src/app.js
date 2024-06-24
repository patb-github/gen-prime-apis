import express from 'express';

const app = express();

app.listen(8000, () => {
    console.log('server running at port', 8000);
})