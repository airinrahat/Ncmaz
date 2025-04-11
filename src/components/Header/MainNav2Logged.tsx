'use client'

import React, { FC, useContext } from 'react'
import Logo from '@/components/Logo/Logo'
import MenuBar from '@/components/MenuBar/MenuBar'
import Navigation from '@/components/Navigation/Navigation'
import SearchModal from './SearchModal'
import SwitchDarkMode from '../SwitchDarkMode/SwitchDarkMode'
import { AuthContext } from '@/provider/AuthProvider'
import AvatarDropdown from './AvatarDropdown'

export interface MainNav2LoggedProps {}

const MainNav2Logged: FC<MainNav2LoggedProps> = () => {
	const renderContent = () => {
		const authContext = useContext(AuthContext)

		const { user } = authContext
		return (
			<div className="flex h-20 justify-between">
				<div className="flex flex-1 items-center lg:hidden">
					<MenuBar />
				</div>

				<div className="flex items-center lg:flex-1">
					<Logo />
				</div>

				<div className="mx-4 hidden flex-[2] justify-center lg:flex">
					<Navigation />
				</div>

				<div className="flex flex-1 items-center justify-end text-slate-700 dark:text-slate-100">
					<SwitchDarkMode />
					<SearchModal />
					{user ? user.name : 'Guest'}
					{/* {user ? user.email : 'Guest'} */}
					<AvatarDropdown />
				</div>
			</div>
		)
	}

	return (
		<div className="nc-MainNav2Logged relative z-10 border-b border-slate-100 bg-white dark:border-slate-700 dark:bg-neutral-900">
			<div className="container">{renderContent()}</div>
		</div>
	)
}

export default MainNav2Logged
