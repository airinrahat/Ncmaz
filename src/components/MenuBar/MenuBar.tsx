'use client'
import React, { useState, Fragment, useEffect } from 'react'
import { Transition, TransitionChild } from '@headlessui/react'
import NavMobile from '@/components/Navigation/NavMobile'
import { usePathname } from 'next/navigation'
import { Bars3Icon } from '@heroicons/react/24/solid'

export interface MenuBarProps {}
const MenuBar: React.FC<MenuBarProps> = () => {
	const [isVisable, setIsVisable] = useState(false)
	const pathname = usePathname()

	useEffect(() => {
		setIsVisable(false)
	}, [pathname])

	const handleOpenMenu = () => setIsVisable(true)
	const handleCloseMenu = () => setIsVisable(false)

	const renderContent = () => {
		return (
			<Transition show={isVisable} as={Fragment}>
				<div className="relative z-50">
					<TransitionChild
						as={Fragment}
						enter=" duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave=" duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div
							className="fixed inset-0 bg-neutral-900 bg-opacity-50"
							onClick={handleCloseMenu}
						/>
					</TransitionChild>

					<TransitionChild
						as={Fragment}
						enter="transition duration-100 transform"
						enterFrom="opacity-0 -translate-x-14 rtl:translate-x-14"
						enterTo="opacity-100 translate-x-0"
						leave="transition duration-150 transform"
						leaveFrom="opacity-100 translate-x-0"
						leaveTo="opacity-0 -translate-x-14 rtl:translate-x-14"
					>
						<div className="fixed inset-y-0 start-0 z-50 w-screen max-w-sm overflow-y-auto">
							<div className="flex min-h-full">
								<div className="w-full max-w-sm overflow-hidden transition-all">
									<NavMobile onClickClose={handleCloseMenu} />
								</div>
							</div>
						</div>
					</TransitionChild>
				</div>
			</Transition>
		)
	}

	return (
		<div>
			<button
				onClick={() => {
					setIsVisable(!isVisable)
				}}
				className="flex items-center justify-center rounded-lg p-2.5 text-neutral-700 focus:outline-none dark:text-neutral-300"
			>
				<Bars3Icon className="h-6 w-6" />
			</button>

			{renderContent()}
		</div>
	)
}

export default MenuBar
