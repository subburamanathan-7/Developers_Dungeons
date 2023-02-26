console.log('Ticket Management System');
const express = require('express');
const app = express();
const cors = require('cors');
const tickets = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();


// Middleware
app.use(cors())
app.use(express.static('./public'))
app.use(express.json())

// Routes
app.use('/tickets',tickets)

const start = async() => {
	try{
		await connectDB(process.env.URI,{ useNewUrlParser: true, useUnifiedTopology: true})
		app.listen(process.env.PORT ,console.log(`App running on port ${process.env.PORT}`));
	}
	catch(error){
		console.log(error);
	}
}
start()