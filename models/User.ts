import mongoose from 'mongoose'

const UsersSchema = new mongoose.Schema({
	name: {
		type: String,
		default: 'Anonymous',
		minlength: 2,
		maxlength: 100,
	},
	email: {
		type: String,
		match: [
			/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
			'Please fill a valid email address',
		],
		minlength: 2,
		maxlength: 100,
	},
	title: {
		type: String,

		minlength: 2,
		maxlength: 200,
	},
	category: {
		type: String,

		minlength: 2,
		maxlength: 100,
	},
	url: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	description: {
		type: String,
		maxlength: 1000,
	},
})

const User = mongoose.models.User || mongoose.model('User', UsersSchema)

export default User
