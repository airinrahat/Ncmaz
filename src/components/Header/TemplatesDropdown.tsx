'use client'

import {
	Popover,
	PopoverButton,
	PopoverPanel,
	Transition,
} from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { Fragment } from 'react'
import { MEGAMENU_TEMPLATES } from '@/data/navigation'
import { NavItemType } from '@/components/Navigation/NavigationItem'
import Link from 'next/link'
import NcImage from '../NcImage/NcImage'
import { Route } from '@/routers/types'

const recentPosts = [
	{
		id: 1,
		title: 'Boost your conversion rate',
		href: '/single-gallery/demo-slug',
		date: 'Mar 16, 2023',
		datetime: '2023-03-16',
		category: { title: 'Marketing', href: '/archive/demo-slug' },
		imageUrl:
			'https://images.unsplash.com/photo-1678720175173-f57e293022e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		description:
			'Et et dolore officia quis nostrud esse aute cillum irure do esse. Eiusmod ad deserunt cupidatat est magna Lorem.',
	},
	{
		id: 2,
		title: 'How to use search engine optimization to drive sales',
		href: '/single-gallery/demo-slug',
		date: 'Mar 10, 2023',
		datetime: '2023-03-10',
		category: { title: 'Sales', href: '/archive/demo-slug' },
		imageUrl:
			'https://images.unsplash.com/photo-1678846912726-667eda5a850f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyODh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
		description:
			'Optio cum necessitatibus dolor voluptatum provident commodi et.',
	},
]

export default function TemplatesDropdown() {
	const renderMegaMenuNavlink = (item: NavItemType) => {
		return (
			<li key={item.id} className={`${item.isNew ? 'menuIsNew' : ''}`}>
				<Link
					className="font-normal text-slate-600 hover:text-black dark:text-slate-400 dark:hover:text-white"
					href={{
						pathname: item.href || undefined,
					}}
				>
					{item.name}
				</Link>
			</li>
		)
	}

	return (
		<div className="TemplatesDropdown hidden lg:block">
			<Popover className="">
				{({ open, close }) => (
					<>
						<PopoverButton
							className={` ${open ? '' : 'text-opacity-80'} group inline-flex h-10 items-center px-3 py-1.5 text-sm font-medium text-gray-800 hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:text-slate-300 sm:h-12`}
						>
							<span className="">Templates</span>
							<ChevronDownIcon
								className={`${open ? '-rotate-180' : ''} ms-1 h-4 w-4 transition duration-150 ease-in-out`}
								aria-hidden="true"
							/>
						</PopoverButton>
						<Transition
							as={Fragment}
							enter="transition ease-out duration-200"
							enterFrom="opacity-0 translate-y-1"
							enterTo="opacity-100 translate-y-0"
							leave="transition ease-in duration-150"
							leaveFrom="opacity-100 translate-y-0"
							leaveTo="opacity-0 translate-y-1"
						>
							<PopoverPanel className="absolute inset-x-0 z-20 mt-3.5 w-full">
								<div className="bg-white shadow-lg dark:bg-neutral-900">
									<div className="container">
										<div className="flex border-t border-slate-200 py-14 text-sm dark:border-slate-700">
											<div className="grid flex-1 grid-cols-4 gap-6 pr-6 xl:pr-8">
												{MEGAMENU_TEMPLATES.map((item, index) => (
													<div key={index}>
														<p className="font-medium text-slate-900 dark:text-neutral-200">
															{item.name}
														</p>
														<ul className="mt-4 grid space-y-4">
															{item.children?.map(renderMegaMenuNavlink)}
														</ul>
													</div>
												))}
											</div>
											<div className="w-[40%]">
												<div className="grid grid-cols-1 gap-10 sm:gap-8 lg:grid-cols-2">
													<h3 className="sr-only">Recent posts</h3>
													{recentPosts.map((post) => (
														<article
															key={post.id}
															className="relative isolate flex max-w-2xl flex-col gap-x-8 gap-y-6 sm:flex-row sm:items-start lg:flex-col lg:items-stretch"
														>
															<div className="relative flex-none">
																<NcImage
																	containerClassName="aspect-[2/1] w-full rounded-lg bg-gray-100 sm:aspect-[16/9] sm:h-32 lg:h-auto z-0"
																	fill
																	className="rounded-lg object-cover"
																	src={post.imageUrl}
																	sizes="300px"
																	alt=""
																/>
																<div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-gray-900/10" />
															</div>
															<div>
																<div className="flex items-center gap-x-4">
																	<time
																		dateTime={post.datetime}
																		className="text-sm leading-6 text-gray-600"
																	>
																		{post.date}
																	</time>
																	<a
																		href={post.category.href as Route}
																		className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-600 hover:bg-gray-100"
																	>
																		{post.category.title}
																	</a>
																</div>
																<h4 className="mt-2 text-sm font-semibold leading-6 text-gray-900">
																	<Link href={post.href as Route}>
																		<span className="absolute inset-0" />
																		{post.title}
																	</Link>
																</h4>
																<p className="mt-2 text-sm leading-6 text-gray-600">
																	{post.description}
																</p>
															</div>
														</article>
													))}
												</div>
											</div>
										</div>
									</div>
								</div>
							</PopoverPanel>
						</Transition>
					</>
				)}
			</Popover>
		</div>
	)
}
