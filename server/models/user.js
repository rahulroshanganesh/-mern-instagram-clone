const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true
	},
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	pic:{
		type:String,
		default:"https://cdn-icons-png.flaticon.com/512/17/17004.png"
	},
	followers: [{type:mongoose.Schema.Types.ObjectID, ref:"User"}],
	following: [{type:mongoose.Schema.Types.ObjectID, ref:"User"}]
})

mongoose.model("User", userSchema)