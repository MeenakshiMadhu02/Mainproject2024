var mysql = require('mysql');

var con =  mysql.createConnection({
    host: "localhost",
    user: "root",
    database:"ferry"
})
con.connect(function (err){
    if(err){
        console.log(err)
    }else{
        console.log("db conncted")
    }
})  