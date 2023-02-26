const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
	Event:{
		type:String,
		required:[true,'must provide eventName'],
		trim:true,
		maxlength:[40,'eventName cannot be more than 40 characters']
	}, 
	Artist:{
		type:String,
		required:[true,'must provide artistName'],
		maxlength:[20]		
	},
	City:{
		type:String,
		required:[true,'must provide City'],
		maxlength:[20]		
	},
	EventDate:{
		type:Date,
		required:[true,'must provide eventDate'],
	},
	CreationDate:{
		type:Date,
		required:[true,'must provide creationDate'],
	},
	Status:{
		type:String,
		required:[true,'must provide Status'],
	}
});

module.exports = mongoose.model('Ticket',TaskSchema);


