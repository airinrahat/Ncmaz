import SectionSubscribe2 from '@/components/SectionSubscribe2/SectionSubscribe2'
import React, { ReactNode } from 'react'

const Layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className={`nc-LayoutPage relative`}>
			<div
				className={`absolute left-0 right-0 top-0 h-[400px] w-full bg-primary-100 bg-opacity-25 dark:bg-neutral-800 dark:bg-opacity-40`}
			/>
			<div className="container relative pb-16 pt-6 sm:pt-10 lg:pb-28 lg:pt-20">
				{/* CONTENT */}
				<div className="mx-auto rounded-xl bg-white p-5 shadow-lg dark:bg-neutral-900 sm:rounded-3xl sm:p-10 lg:rounded-[40px] lg:p-16">
					{children}
				</div>
			</div>

			<div className="container pb-16 lg:pb-28">
				<SectionSubscribe2 />
			</div>
		</div>
	)
}

export default Layout
