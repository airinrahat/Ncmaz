'use server'

import connectMongo from '../../dbConnect/connectMongo'
import User from '../../models/User'
// import { revalidatePath } from "next/cache";

export const addUser = async (formData: FormData) => {
	const name = formData.get('fullname')
	const email = formData.get('email')
	const title = formData.get('title')
	console.log(title)
	const category = formData.get('category')
	const url = formData.get('url')
	const price = Number(formData.get('price'))
	const description = formData.get('description')

	const userData = {
		name,
		email,
		title,
		category,
		url,
		price,
		description,
	}

	try {
		await connectMongo()
		// insert into database
		await new User(userData).save()

		// revalidate users
		// revalidatePath("/myAccount");
	} catch (err) {
		console.log(err)
	}
}

export const getUsers = async () => {
	try {
		await connectMongo()

		// get users
		const users = await User.find()

		return users
	} catch (err) {
		console.log(err)
	}
}

export const deleteUser = async (id: string) => {
	try {
		await connectMongo()
		await User.findByIdAndDelete(id)
		console.log('User deleted successfully!')
	} catch (err) {
		console.error('Error deleting user:', err)
	}
}
