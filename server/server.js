const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');
const mysql = require('mysql');
const {
    v1: uuidv1,
    v4: uuidv4
} = require('uuid');
const nodemailer = require('nodemailer');

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
    let id = uuidv4().replace(/-/g, "");
    res.send(id)
});

app.get('/api/suppliers/list', (req, res) => {
    const sql = "SELECT * FROM suppliers";
    db.query(sql, (e, r) => {
        if (e) {
            throw e
        }
        res.send(r)
    })
});

app.get('/api/suppliers/:id', (req, res) => {
    const sql = `SELECT * FROM suppliers WHERE supplier_id = ?`;
    db.query(sql, [req.params.id], (e, r) => {
        if (e) {
            throw e
        }
        res.send(r)
    })
});

app.get('/api/suppliers/stock/:id', (req, res) => {
    const sql = `SELECT * FROM ??`;
    db.query(sql, [req.params.id], (e, r) => {
        if (e) {
            throw e
        }
        res.send(r)
    })
});

app.get('/api/suppliers/reviews/:id', (req, res) => {
    const sql = `SELECT * FROM ??`;
    db.query(sql, [req.params.id], (e, r) => {
        if (e) {
            throw e
        }
        res.send(r)
    })
});


//app.get('/api/legal', (req, res) => {
//    const sql = "SELECT * FROM legal";
//    db.query(sql, (e, r) => {
//        if (e) {
//            throw err
//        }
//        res.send(r)
//    })
//});


const contactEmail = nodemailer.createTransport({
    host: "smtp.ionos.co.uk",
    port: 587,
    secure: false, // upgrade later with STARTTLS
    auth: {
      user: "webmailer@typower.info",
      pass: "Y_4_ML8Uw4YZ8XX",
    },
});
  
contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send Email...");
    }
});


app.post("/contact", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;
    const supplierEmail = req.body.supplierEmail; 
    const mail = {
      from: name,
      to: supplierEmail,
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        res.json({ status: "ERROR" });
      } else {
        res.json({ status: "Message Sent" });
      }
    });
});

app.listen( PORT || 5000, (e)=> {
    if (e) {
        console.log("Error thrown...")
        console.log(e)
    } else {
        console.log("Server running...")
    }
});