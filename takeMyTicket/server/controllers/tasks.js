const Task = require('../models/tasks');

const getAllTickets = async(req,res)=>{
	try{
		const task = await Task.find({})
		res.status(200).json({task:task})
	}
	catch(error){
		res.status(500).json({msg:error})
	}
}

const createTicket = async (req,res)=>{
	try{
		const task = await Task.create(req.body)
		res.status(201).json({task});	
	}
	catch(error){
		res.status(500).json({msg:error})
	}	
}

const updateTicket = async(req,res)=>{
	try{
		const {id:taskID} = req.params;
		const task = await Task.findOneAndUpdate({_id:taskID},req.body,
		{new:true,runValidators:true,})
		if(!task){
			return res.status(404).json({msg:`no task with id ${taskID}`});
		}
	}
	catch(error){
		res.status(500).json({msg:error})
	}
}

const getArtistTickets = async(req,res)=>{
	const {_id:id}=req.params

	try{
		const task = await Task.findOne({_id:id});
		console.log(task)
		if(!task){
			return res.status(404).json({msg:`no task with id ${id}`});
		}
		res.status(200).json({task})
	}
	catch(error){
		res.status(500).json({msg:error})

	}
}

const deleteTicket = async(req,res)=>{
	try{
		const {id:taskID} = req.params
		const task = await Task.findOneAndDelete({_id:taskID});
		if(!task){
			return res.status(404).json({msg:`no task with id: ${taskID}`});
		}
		res.status(200).json({task:null,status:'success'})
	}
	catch(error){
		res.status(500).json({msg:error})
	}
}
module.exports = {
	getAllTickets,deleteTicket,createTicket,updateTicket,getArtistTickets
};