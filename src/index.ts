import express, {Express, Request, Response} from "express";
import dotenv from 'dotenv'
import {router as UseRoutes } from "./routes/routes"



dotenv.config();

const app : Express = express();
const port = process.env.PORT;

app.use("/users", UseRoutes)

app.get('/', (req : Request,res : Response) => {
    res.send('Express + Typescript Server')
})

app.listen(port, ()=>{
    console.log(`[server]: Server is running at http://localhost:${port}`)
})

export default app;