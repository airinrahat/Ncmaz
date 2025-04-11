import { NavItemType } from '@/components/Navigation/NavigationItem'
import { AuthContext } from '@/provider/AuthProvider'
import { Route } from '@/routers/types'
import _ from 'lodash'
import { useContext } from 'react'

const randomId = _.uniqueId

const OTHER_PAGE_CHILD: NavItemType[] = [
	// archive pages ----------------
	{
		id: randomId(),
		href: '/archive/demo-slug' as Route,
		name: 'Category pages',
		type: 'dropdown',
		children: [
			{
				id: randomId(),
				href: '/archive/demo-slug' as Route,
				name: 'Category page 1',
			},
			{
				id: randomId(),
				href: '/archive-2/demo-slug' as Route,
				name: 'Category page 2',
			},
			{
				id: randomId(),
				href: '/archive-3/demo-slug' as Route,
				name: 'Category page 3',
			},
		],
	},

	// single pages ----------------
	{
		id: randomId(),
		href: '/single/demo-slug' as Route,
		name: 'Single pages',
		type: 'dropdown',
		children: [
			{
				id: randomId(),
				href: '/single/demo-slug' as Route,
				name: 'Single 1',
			},
			{
				id: randomId(),
				href: '/single-2/demo-slug' as Route,
				name: 'Single 2',
			},
			{
				id: randomId(),
				href: '/single-3/demo-slug' as Route,
				name: 'Single 3',
			},
			{
				id: randomId(),
				href: '/single-4/demo-slug' as Route,
				name: 'Single 4',
			},
			{
				id: randomId(),
				href: '/single-5/demo-slug' as Route,
				name: 'Single 5',
			},
			{
				id: randomId(),
				href: '/single-audio/demo-slug' as Route,
				name: 'Single Audio',
			},
			{
				id: randomId(),
				href: '/single-video/demo-slug' as Route,
				name: 'Single Video',
			},
			{
				id: randomId(),
				href: '/single-gallery/demo-slug' as Route,
				name: 'Single Gallery',
			},
		],
	},

	// seach pages ----------------
	{
		id: randomId(),
		href: '/search',
		name: 'Search Page',
		type: 'dropdown',
		children: [
			{
				id: randomId(),
				href: '/search',
				name: 'Search page',
			},
			{
				id: randomId(),
				href: '/search-2',
				name: 'Search page 2',
			},
		],
	},

	// author pages ----------------
	{
		id: randomId(),
		href: '/author/demo-slug' as Route,
		name: 'Author page',
	},

	// dashboard pages ----------------
	{
		id: randomId(),
		href: '/dashboard',
		name: 'Dashboard Page',
		type: 'dropdown',
		children: [
			{
				id: randomId(),
				href: '/dashboard/edit-profile',
				name: 'Edit profile page',
			},
			{
				id: randomId(),
				href: '/dashboard/posts',
				name: 'Posts page',
			},
			{
				id: randomId(),
				href: '/dashboard/submit-post',
				name: 'Submit post page',
			},
			{
				id: randomId(),
				href: '/dashboard/subscription',
				name: 'Subscription',
			},
			{
				id: randomId(),
				href: '/dashboard/billing-address',
				name: 'Billing address',
			},
		],
	},
]

// export const NAVIGATION_DEMO_2: NavItemType[] = [
// 	{
// 		id: randomId(),
// 		href: '/',
// 		name: 'Homes',
// 	},

// 	{
// 		id: randomId(),
// 		href: '/archive/demo-slug' as Route,
// 		name: 'Beauty',
// 	},

// 	{
// 		id: randomId(),
// 		href: '/archive/demo-slug' as Route,
// 		name: 'Sport',
// 	},
// 	{ id: randomId(), href: '/login', name: 'Login' },
// 	{ id: randomId(), href: '/signup', name: 'Logout' },
// ]
