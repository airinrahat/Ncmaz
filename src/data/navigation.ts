import { NavItemType } from '@/components/Navigation/NavigationItem'
import { Route } from '@/routers/types'
import _ from 'lodash'

const randomId = _.uniqueId

export const MEGAMENU_TEMPLATES: NavItemType[] = [
	// home pages ---------
	{
		id: randomId(),
		href: '/#',
		name: 'Home Page',
	},
]

const OTHER_PAGE_CHILD: NavItemType[] = []

export const NAVIGATION_DEMO_2: NavItemType[] = [
	{
		id: randomId(),
		href: '/',
		name: 'Home',
	},

	// single pages ----------------

	//
	{
		id: randomId(),
		href: '/archive/demo-slug' as Route,
		name: 'Beauty',
	},

	{
		id: randomId(),
		href: '/archive/demo-slug' as Route,
		name: 'Sport',
	},
]
