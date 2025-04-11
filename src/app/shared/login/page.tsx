import React from 'react'
import facebookSvg from 'images/Facebook.svg'
import twitterSvg from 'images/Twitter.svg'
import googleSvg from 'images/Google.svg'
// import Input from "components/Input/Input";
// import ButtonPrimary from "components/Button/ButtonPrimary";
// import NcLink from "components/NcLink/NcLink";
// import Heading2 from "components/Heading/Heading2";
// import Image from "components/Image";
// import Layout from "../../layout";
import Input from '@/components/Input/Input'
import Layout from './layout'
import Heading2 from '@/components/Heading/Heading2'
import NcLink from '@/components/NcLink/NcLink'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import Image from 'next/image'
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

const page = () => {
	return (
		<div>
			<Layout>
				<header className="- mx-auto mb-14 max-w-2xl text-center sm:mb-16 lg:mb-20">
					<Heading2>Login</Heading2>
					<span className="mt-2 block text-sm text-neutral-700 dark:text-neutral-200 sm:text-base">
						Welcome to our blog magazine Community
					</span>
				</header>

				<div className="mx-auto max-w-md space-y-6">
					<div className="grid gap-3">
						{loginSocials.map((item, index) => (
							<a
								key={index}
								href={item.href}
								className="flex w-full transform rounded-lg bg-primary-50 px-4 py-3 transition-transform hover:translate-y-[-2px] dark:bg-neutral-800 sm:px-6"
							>
								<Image
									className="flex-shrink-0"
									src={item.icon}
									alt={item.name}
									height={50}
									width={50}
								/>

								<h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
									{item.name}
								</h3>
							</a>
						))}
					</div>
					{/* OR */}
					<div className="relative text-center">
						<span className="relative z-10 inline-block bg-white px-4 text-sm font-medium dark:bg-neutral-900 dark:text-neutral-400">
							OR
						</span>
						<div className="absolute left-0 top-1/2 w-full -translate-y-1/2 transform border border-neutral-100 dark:border-neutral-800"></div>
					</div>
					{/* FORM */}
					<form className="grid grid-cols-1 gap-6" action="#" method="post">
						<label className="block">
							<span className="text-neutral-800 dark:text-neutral-200">
								Email address
							</span>
							<Input
								type="email"
								placeholder="example@example.com"
								className="mt-1"
							/>
						</label>
						<label className="block">
							<span className="flex items-center justify-between text-neutral-800 dark:text-neutral-200">
								Password
								{/* <NcLink href="/forgot-pass" className="text-sm underline">
									Forgot password?
								</NcLink> */}
							</span>
							<Input type="password" className="mt-1" />
						</label>
						<ButtonPrimary type="submit">Continue</ButtonPrimary>
					</form>

					{/* ==== */}
					<span className="block text-center text-neutral-700 dark:text-neutral-300">
						New user? {` `}
						{/* <NcLink href="/signup">Create an account</NcLink>j */}
					</span>
				</div>
			</Layout>
		</div>
	)
}

export default page
