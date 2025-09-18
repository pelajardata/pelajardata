import express, { response } from 'express';
import {Client} from "pg";
import cors from "cors"
//input few variables to access the database
const conn = new Client({
    host: "localhost",
    port: "5432",
    user: "postgres",
    password: "12345",
    database: "PelajarData"
})
//connect to database
conn.connect()
const app = express()

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

// path to the hellow world
app.get('/', (req, res) => {
    // response with 'hello world'
    res.send('hello world')
})
// access data 
app.get('/viewdata', (req, res) =>{
        //fetch the data
    conn.query('SELECT * FROM public."Blog"', (err, result)=>{
            if (err)
                res.send(err)
            else{
                res.send(result.rows)
            }
        })
    })

app.get('/blog/:id', (req, res)=>{
    try{ 
        //get the id
        const {id} = req.params
        //get the data
        conn.query('SELECT * FROM public."Blog" WHERE id = $1', [id] , (err, result)=>{
            //if not failed
            if (err) return res.status(500).json({error: "Database Query Failed"})
            else{
                //if fail
                return res.status(200).json(result.rows[0])
            }
        })
    }catch(error){
        // if fail but the program catch it
        console.log("Unexpected error:", error)
        if (!res.headersSent){
            res.status(500).json({error: "Internal server error"})
        }
    }
   
})

// set port to 3000
app.listen(3000, () => {
    console.log("Server is running")
    console.log("\n Open link: http://localhost:3000/")
})