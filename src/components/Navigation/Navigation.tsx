// import React, { FC } from "react";
// import NavigationItem from "./NavigationItem";
// import { NAVIGATION_DEMO_2 } from "@/data/navigation";

// interface Props {
//   className?: string;
// }

// const Navigation: FC<Props> = ({ className = "flex" }) => {
//   return (
//     <ul className={`nc-Navigation items-center ${className}`}>
//       {NAVIGATION_DEMO_2.map((item) => (
//         <NavigationItem key={item.id} menuItem={item} />
//       ))}
//     </ul>
//   );
// };

// export default Navigation;

'use client'

import React, { FC, useContext } from 'react'
import NavigationItem from './NavigationItem'
import { AuthContext } from '@/provider/AuthProvider'
import { NavItemType } from '@/components/Navigation/NavigationItem'
import { Route } from '@/routers/types'
import _ from 'lodash'

const randomId = _.uniqueId

interface Props {
	className?: string
}

const Navigation: FC<Props> = ({ className = 'flex' }) => {
	const { user, logOut } = useContext(AuthContext)

	const NAVIGATION_DEMO_2: NavItemType[] = [
		{ id: randomId(), href: '/', name: 'Home' },
		{ id: randomId(), href: '/archive/demo-slug' as Route, name: 'Beauty' },
		{ id: randomId(), href: '/archive/demo-slug' as Route, name: 'Sport' },
	]

	return (
		<ul className={`nc-Navigation items-center ${className}`}>
			{NAVIGATION_DEMO_2.map((item) => (
				<NavigationItem key={item.id} menuItem={item} />
			))}
			{!user && (
				<>
					<NavigationItem
						key={randomId()}
						menuItem={{ id: randomId(), href: '/login', name: 'Login' }}
					/>
				</>
			)}

			{user && (
				<li>
					<button onClick={logOut} className="btn btn-sm">
						Logout
					</button>
				</li>
			)}
		</ul>
	)
}

export default Navigation
