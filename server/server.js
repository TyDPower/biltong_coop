const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootPassword",
    database: "biltong_coop"
});

app.use(cors());
app.use(express.json());

db.connect( e => {
    if (e) {
        throw e;
    }
    console.log('Database connected...')
});

app.get('/', (req, res)=> {
    res.send("Hello")
});

app.get('/api/suppliers/list', (req, res) => {
    const sql = "SELECT * FROM suppliers";
    db.query(sql, (e, r) => {
        if (e) {
            throw err
        }
        res.send(r)
    })
});

app.get('/api/legal', (req, res) => {
    const sql = "SELECT * FROM legal";
    db.query(sql, (e, r) => {
        if (e) {
            throw err
        }
        res.send(r)
    })
});

app.listen( PORT || 5000, (e)=> {
    if (e) {
        console.log("Error thrown...")
        console.log(e)
    } else {
        console.log("Server running...")
    }
});