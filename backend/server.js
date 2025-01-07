const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "facultylogin"
})

app.post('/login', req, res) => {
    const sql = "SELECT * FROM login WHERE 'loginID' = ? AND 'password' = ? ";
    db.query(sql, [req.body.loginID, req.body.password], (err, data) => {
        if(err) {
            return res.json("Error")
        }
        if(data.length > 0) {
            return res.json("Success")
        }
        return res.json("False")
    } )
}

app.listen(3306, () => {
    console.log("Listening")
})