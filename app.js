import express from "express";
import cors from "cors";
import mysql from 'mysql'
import routes from "./routes/routes.js";
import routesInvoices from './routes/routesInvoices.js';
import routesUsers from './routes/routesUsers.js' 
import db from "./database/db.js";


const app = express();


app.use(cors()); 
app.use(express.json());
app.use('/students', routes);
app.use('/invoices', routesInvoices);
app.use('/usuarios', routesUsers);

const corsOptions = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": true,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE, PATCH, OPTIONS',
    "Access-Control-Allow-Headers": 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
  };
  
app.use(cors(corsOptions));
  

const credentials = {
    host: 'bgvrspqkhbebqtwjz6xe-mysql.services.clever-cloud.com',
    user: 'u2zpuhjtoirav8rn',
    password: 'nvmLjlKyBkOBgw2DbDH9',
    database: 'bgvrspqkhbebqtwjz6xe'
};


try{
    await db.authenticate()
    console.log('conexion exitosa a la DB')
} catch (error) {
    console.log(`El error de conexion es:${error}`)
}

app.listen(8000, () => {
    /* console.log("Server UP running in http://localhost:8000/") */
    console.log('server run in clevercloud')
});





app.post('/logins', (req, res) => {
    const {username, password} = req.body
    const values = [username, password]
    var connection = mysql.createConnection(credentials)
    connection.query('SELECT * FROM logins WHERE username = ? AND password = ?', values, (err, result)=> {
        if(err){
            res.status(500).send(err)
        }else{
            if(result.length>0){
                res.status(200).send(result[0])
            }else{
                res.status(400).send('usuario no existe')
            }
        }
    })
    connection.end()
})