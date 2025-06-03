import express from 'express';

const app = express()
const port = 3000;


app.get('/', (req, res) => {
    
    return res.json({ message: `Hello World! ${process.pid}` });
});     

app.listen(port, () => {
    console.log(`CLUSTER APPLICATION LISTEN ON ${port}`);
    console.log(`PROCESS ID IS:  ${process.pid}`);
});




