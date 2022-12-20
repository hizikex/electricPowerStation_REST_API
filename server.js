import express from 'express';
import powerSupplyRouter from './powerRoute/powerRouter.js';
import './powerConfig/powerConfig.js';

//create a port
const PORT = 6565;

//app instance
const app = express()

app.use(express.json())

app.use('/api/v1', powerSupplyRouter)

app.listen(PORT, ()=>{
    console.log("App listening to PORT: " + PORT)
})