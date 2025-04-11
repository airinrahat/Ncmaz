'use client'
import React, { useContext } from 'react'
import facebookSvg from '@/images/Facebook.svg'
import twitterSvg from '@/images/Twitter.svg'
import googleSvg from '@/images/Google.svg'
import Input from '@/components/Input/Input'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import NcLink from '@/components/NcLink/NcLink'
import Heading2 from '@/components/Heading/Heading2'
import Image from 'next/image'
import { AuthContext } from '@/provider/AuthProvider'
import { useRouter } from 'next/navigation'
// import { createUserWithEmailAndPassword } from 'firebase/auth'
// import auth from '@/firebase/firebase'

const loginSocials = [
	{
		name: 'Continue with Facebook',
		href: '#',
		icon: facebookSvg,
	},
	{
		name: 'Continue with Twitter',
		href: '#',
		icon: twitterSvg,
	},
	{
		name: 'Continue with Google',
		href: '#',
		icon: googleSvg,
	},
]

const PageSignUp = ({}) => {
	const router = useRouter()

	const { createUser, setUser } = useContext(AuthContext)
	const handleRegister = (event) => {
		event.preventDefault()
		const form = new FormData(event.currentTarget)

		const name = form.get('name')

		const contact = form.get('contact')

		const email = form.get('email')
		const password = form.get('password')
		const confirm = form.get('confirm')
		console.log(name, contact, email, password, confirm)
		createUser(email, password)
			.then((result) => {
				const user = result.user
				setUser(user)
				console.log(user)
				router.push('/')
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
				console.log(errorCode, errorMessage)
			})
	}

	return (
		<>
			<header className="- mx-auto mb-14 max-w-2xl text-center sm:mb-16 lg:mb-20">
				<Heading2>Sign up</Heading2>
				<span className="mt-2 block text-sm text-neutral-700 dark:text-neutral-200 sm:text-base">
					Welcome to our blog magazine Community
				</span>
			</header>

			<div className="mx-auto max-w-md space-y-6">
				{/* FORM */}
				<form
					onSubmit={handleRegister}
					className="grid grid-cols-1 gap-6"
					action="#"
					method="post"
				>
					<label className="block">
						<span className="text-neutral-800 dark:text-neutral-200">
							Full Name
						</span>
						<Input
							type="name"
							name="name"
							placeholder="Full Name"
							className="mt-1"
						/>
					</label>
					<label className="block">
						<span className="text-neutral-800 dark:text-neutral-200">
							Email address
						</span>
						<Input
							name="email"
							type="email"
							placeholder="Email"
							className="mt-1"
						/>
					</label>
					<label className="block">
						<span className="text-neutral-800 dark:text-neutral-200">
							Contact
						</span>
						<Input
							name="contact"
							type="tel"
							placeholder="Contact"
							className="mt-1"
						/>
					</label>
					<label className="block">
						<span className="flex items-center justify-between text-neutral-800 dark:text-neutral-200">
							Password
						</span>
						<Input
							type="password"
							placeholder=" Password"
							name="password"
							className="mt-1"
						/>
					</label>
					<label className="block">
						<span className="flex items-center justify-between text-neutral-800 dark:text-neutral-200">
							Confirm Password
						</span>
						<Input
							type="password"
							name="confirm"
							placeholder="Confirm Password"
							className="mt-1"
						/>
					</label>
					<ButtonPrimary type="submit">Continue</ButtonPrimary>
				</form>

				{/* ==== */}
				<span className="block text-center text-neutral-700 dark:text-neutral-300">
					Already have an account? {` `}
					<NcLink href="/login">Sign in</NcLink>
				</span>
			</div>
		</>
	)
}

export default PageSignUp
