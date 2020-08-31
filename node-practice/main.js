var mysql=require('mysql');
var connection=mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"",
	database:"node_info"
})
connection.connect(error=>{
	if (error) throw error;
	console.log("Connected successfully");
	
			connection.query("create table emp (name varchar(20),emailid varchar(20),mobile varchar(20))",(err1,res1)=>{
			if (err1) throw(err1);
			console.log("table created");
		})
	})
	
	