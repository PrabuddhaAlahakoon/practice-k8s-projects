import express from "express";
import os from 'os';

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    const helloMessage = `VER: 2.0: Hello from the ${os.hostname}`;
    console.log(helloMessage);
    res.send(helloMessage)
});

app.listen(PORT, () => {
    console.log(`WEb server is listening at port ${PORT}`);
})