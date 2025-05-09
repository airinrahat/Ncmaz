import React from 'react'
import Logo from '@/components/Logo/Logo'
import SocialsList1 from '@/components/SocialsList1/SocialsList1'
import { CustomLink } from '@/data/types'
import MusicPlayer from '../MusicPlayer/MusicPlayer'

export interface WidgetFooterMenu {
	id: string
	title: string
	menus: CustomLink[]
}

const widgetMenus: WidgetFooterMenu[] = [
	{
		id: '5',
		title: 'Getting started',
		menus: [
			{ href: '/', label: 'Installation' },
			{ href: '/', label: 'Release Notes' },
		],
	},
	{
		id: '1',
		title: 'Explore',
		menus: [
			{ href: '/', label: 'Design features' },
			{ href: '/', label: 'Prototyping' },
		],
	},
	{
		id: '2',
		title: 'Resources',
		menus: [
			{ href: '/', label: 'Best practices' },
			{ href: '/', label: 'Support' },
		],
	},
	{
		id: '4',
		title: 'Community',
		menus: [
			{ href: '/', label: 'Discussion Forums' },
			{ href: '/', label: 'Code of Conduct' },
		],
	},
]

const Footer: React.FC = () => {
	const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
		return (
			<div key={index} className="text-sm">
				<h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
					{menu.title}
				</h2>
				<ul className="mt-5 space-y-4">
					{menu.menus.map((item, index) => (
						<li key={index}>
							<a
								key={index}
								className="text-neutral-6000 hover:text-black dark:text-neutral-300 dark:hover:text-white"
								href={item.href}
							>
								{item.label}
							</a>
						</li>
					))}
				</ul>
			</div>
		)
	}

	return (
		<>
			{/* music player */}
			<MusicPlayer />

			{/* footer */}
			<div className="nc-Footer relative border-t border-neutral-200 py-16 dark:border-neutral-700 lg:py-28">
				<div className="container grid grid-cols-2 gap-x-5 gap-y-10 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10">
					<div className="col-span-2 grid grid-cols-4 gap-5 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col">
						<div className="col-span-2 md:col-span-1">
							<Logo />
						</div>
						<div className="col-span-2 flex items-center md:col-span-3">
							<SocialsList1 className="flex items-center space-x-3 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-2.5 rtl:space-x-reverse" />
						</div>
					</div>
					{widgetMenus.map(renderWidgetMenuItem)}
				</div>
			</div>
		</>
	)
}

export default Footer
