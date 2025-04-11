'use client'

import React, { useContext } from 'react'
import { useRouter } from 'next/navigation'
import facebookSvg from '@/images/Facebook.svg'
import googleSvg from '@/images/Google.svg'
import Input from '@/components/Input/Input'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import NcLink from '@/components/NcLink/NcLink'
import Heading2 from '@/components/Heading/Heading2'
import Image from 'next/image'
import { AuthContext } from '@/provider/AuthProvider'

const PageLogin = () => {
	const router = useRouter()
	const { signIn, setUser } = useContext(AuthContext)

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		const form = new FormData(e.currentTarget)
		const email = form.get('email') as string
		const password = form.get('password') as string

		signIn(email, password)
			.then((result) => {
				const user = result.user
				setUser(user)

				router.push('/')
			})
			.catch((error) => {
				alert(error.code)
			})
	}

	return (
		<>
			<header className="mx-auto mb-14 max-w-2xl text-center sm:mb-16 lg:mb-20">
				<Heading2>Login</Heading2>
				<span className="mt-2 block text-sm text-neutral-700 dark:text-neutral-200 sm:text-base">
					Welcome to our blog magazine Community
				</span>
			</header>
			<div className="mx-auto max-w-md space-y-6">
				{/* Social Login Buttons */}
				<div className="grid gap-3">
					<button className="flex w-full items-center justify-center gap-3 rounded-lg bg-primary-50 px-4 py-3 text-neutral-700 transition hover:-translate-y-1 hover:bg-primary-100 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700">
						<Image src={googleSvg} alt="Google" width={24} height={24} />
						<span className="text-sm font-medium sm:text-base">
							Continue with Google
						</span>
					</button>
					<button className="flex w-full items-center justify-center gap-3 rounded-lg bg-primary-50 px-4 py-3 text-neutral-700 transition hover:-translate-y-1 hover:bg-primary-100 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700">
						<Image src={facebookSvg} alt="Facebook" width={24} height={24} />
						<span className="text-sm font-medium sm:text-base">
							Continue with Facebook
						</span>
					</button>
				</div>

				{/* OR Divider */}
				<div className="relative text-center">
					<span className="relative z-10 inline-block bg-white px-4 text-sm font-medium dark:bg-neutral-900 dark:text-neutral-400">
						OR
					</span>
					<div className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform border border-neutral-100 dark:border-neutral-800"></div>
				</div>

				{/* FORM */}
				<form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
					<label className="block">
						<span className="text-neutral-800 dark:text-neutral-200">
							Email address
						</span>
						<Input
							name="email"
							type="email"
							placeholder="example@example.com"
							className="mt-1"
						/>
					</label>
					<label className="block">
						<span className="flex items-center justify-between text-neutral-800 dark:text-neutral-200">
							Password
							<NcLink href="/forgot-pass" className="text-sm underline">
								Forgot password?
							</NcLink>
						</span>
						<Input name="password" type="password" className="mt-1" />
					</label>
					<ButtonPrimary type="submit">Login</ButtonPrimary>
				</form>

				{/* Sign Up Link */}
				<span className="block text-center text-neutral-700 dark:text-neutral-300">
					New user? {` `}
					<NcLink href="/signup">Create an account</NcLink>
				</span>
			</div>
		</>
	)
}

export default PageLogin
