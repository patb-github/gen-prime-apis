import "dotenv/config";
import express from 'express';

const PORT = process.env.PORT;
const app = express();

app.get("/", (req, res) => {
    return res.json({message: "Hi"})
})

app.listen(PORT, () => {
    console.log('server running at port', PORT);
})