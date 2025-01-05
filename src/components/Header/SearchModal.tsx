'use client'

import { FC, Fragment, ReactNode, useState } from 'react'
import {
	Combobox,
	ComboboxInput,
	ComboboxOption,
	ComboboxOptions,
	Dialog,
	DialogPanel,
	Transition,
	TransitionChild,
} from '@headlessui/react'
import {
	ExclamationTriangleIcon,
	HashtagIcon,
	LifebuoyIcon,
	ClockIcon,
	MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { DEMO_AUTHORS } from '@/data/authors'
import { DEMO_CATEGORIES } from '@/data/taxonomies'
import { DEMO_POSTS } from '@/data/posts'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const categories = DEMO_CATEGORIES.filter((_, i) => i < 9)
const posts = DEMO_POSTS.filter((_, i) => i < 5)
const authors = DEMO_AUTHORS.filter((_, i) => i < 9)

function classNames(...classes: any) {
	return classes.filter(Boolean).join(' ')
}

interface Props {
	renderTrigger?: () => ReactNode
}

const SearchModal: FC<Props> = ({ renderTrigger }) => {
	const [open, setOpen] = useState(false)
	const [rawQuery, setRawQuery] = useState('a')

	const router = useRouter()

	const query = rawQuery.toLowerCase().replace(/^[#>]/, '')

	const filteredPosts =
		rawQuery === '#'
			? posts
			: query === '' || rawQuery.startsWith('>')
				? []
				: posts.filter((project) => project.title.toLowerCase().includes(query))

	const filteredProjects =
		rawQuery === '#'
			? categories
			: query === '' || rawQuery.startsWith('>')
				? []
				: categories.filter((project) =>
						project.name.toLowerCase().includes(query),
					)

	const filteredUsers =
		rawQuery === '>'
			? authors
			: query === '' || rawQuery.startsWith('#')
				? []
				: authors.filter((user) =>
						user.displayName.toLowerCase().includes(query),
					)

	return (
		<>
			<div onClick={() => setOpen(true)} className="cursor-pointer">
				{renderTrigger ? (
					renderTrigger()
				) : (
					<button className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 hover:bg-slate-100 focus:outline-none dark:text-slate-300 dark:hover:bg-slate-800 sm:h-12 sm:w-12">
						<svg
							width={22}
							height={22}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M22 22L20 20"
								stroke="currentColor"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</button>
				)}
			</div>

			<Transition
				show={open}
				as={Fragment}
				afterLeave={() => setRawQuery('a')}
				appear
			>
				<Dialog
					as="div"
					className="relative z-[99]"
					onClose={() => setOpen(false)}
				>
					<TransitionChild
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black/40 transition-opacity" />
					</TransitionChild>

					<div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
						<TransitionChild
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-100"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-100"
						>
							<DialogPanel
								className="mx-auto block max-w-2xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
								as="form"
								onSubmit={(e) => {
									e.preventDefault()
									router.push('/search')
									setOpen(false)
								}}
							>
								<Combobox
									onChange={(item: any) => {
										router.push(item?.href || '/')
										setOpen(false)
									}}
									name="searchpallet"
								>
									<div className="relative">
										<MagnifyingGlassIcon
											className="pointer-events-none absolute left-4 top-3.5 h-5 w-5 text-gray-400"
											aria-hidden="true"
										/>
										<ComboboxInput
											className="h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
											placeholder="Search..."
											onChange={(event) => setRawQuery(event.target.value)}
										/>
									</div>

									{(filteredProjects.length > 0 ||
										filteredUsers.length > 0 ||
										filteredPosts.length > 0) && (
										<ComboboxOptions
											static
											className="max-h-80 scroll-py-10 scroll-pb-2 space-y-4 overflow-y-auto p-4 pb-2"
										>
											{filteredPosts.length > 0 && (
												<div>
													<h2 className="text-xs font-semibold text-gray-900">
														Posts
													</h2>
													<ul className="-mx-4 mt-2 text-sm text-gray-700">
														{filteredPosts.map((post) => (
															<ComboboxOption
																key={post.id}
																value={post}
																className={({ focus: active }) =>
																	classNames(
																		'flex select-none items-center px-4 py-2',
																		active && 'bg-indigo-600 text-white',
																	)
																}
															>
																{({ focus: active }) => (
																	<>
																		<ClockIcon
																			className={classNames(
																				'h-6 w-6 flex-none',
																				active ? 'text-white' : 'text-gray-400',
																			)}
																			aria-hidden="true"
																		/>
																		<span className="ms-3 flex-auto truncate">
																			{post.title}
																		</span>
																	</>
																)}
															</ComboboxOption>
														))}
													</ul>
												</div>
											)}

											{filteredProjects.length > 0 && (
												<div>
													<h2 className="text-xs font-semibold text-gray-900">
														Categories
													</h2>
													<ul className="-mx-4 mt-2 text-sm text-gray-700">
														{filteredProjects.map((project) => (
															<ComboboxOption
																key={project.id}
																value={project}
																className={({ focus: active }) =>
																	classNames(
																		'flex select-none items-center px-4 py-2',
																		active && 'bg-indigo-600 text-white',
																	)
																}
															>
																{({ focus: active }) => (
																	<>
																		<HashtagIcon
																			className={classNames(
																				'h-6 w-6 flex-none',
																				active ? 'text-white' : 'text-gray-400',
																			)}
																			aria-hidden="true"
																		/>
																		<span className="ms-3 flex-auto truncate">
																			{project.name}
																		</span>
																	</>
																)}
															</ComboboxOption>
														))}
													</ul>
												</div>
											)}

											{filteredUsers.length > 0 && (
												<div>
													<h2 className="text-xs font-semibold text-gray-900">
														Authors
													</h2>
													<ul className="-mx-4 mt-2 text-sm text-gray-700">
														{filteredUsers.map((user) => (
															<ComboboxOption
																key={user.id}
																value={user}
																className={({ focus: active }) =>
																	classNames(
																		'flex select-none items-center px-4 py-2',
																		active && 'bg-indigo-600 text-white',
																	)
																}
															>
																<Image
																	src={user.avatar}
																	alt="author"
																	className="h-6 w-6 flex-none rounded-full"
																	sizes="30px"
																/>
																<span className="ms-3 flex-auto truncate">
																	{user.displayName}
																</span>
															</ComboboxOption>
														))}
													</ul>
												</div>
											)}
										</ComboboxOptions>
									)}

									{rawQuery === '?' && (
										<div className="px-6 py-14 text-center text-sm sm:px-14">
											<LifebuoyIcon
												className="mx-auto h-6 w-6 text-gray-400"
												aria-hidden="true"
											/>
											<p className="mt-4 font-semibold text-gray-900">
												Help with searching
											</p>
											<p className="mt-2 text-gray-500">
												Use this tool to quickly search for users and projects
												across our entire platform. You can also use the search
												modifiers found in the footer below to limit the results
												to just users or projects.
											</p>
										</div>
									)}

									{query !== '' &&
										rawQuery !== '?' &&
										filteredProjects.length === 0 &&
										filteredUsers.length === 0 && (
											<div className="px-6 py-14 text-center text-sm sm:px-14">
												<ExclamationTriangleIcon
													className="mx-auto h-6 w-6 text-gray-400"
													aria-hidden="true"
												/>
												<p className="mt-4 font-semibold text-gray-900">
													No results found
												</p>
												<p className="mt-2 text-gray-500">
													We couldn’t find anything with that term. Please try
													again.
												</p>
											</div>
										)}

									<div className="flex flex-wrap items-center bg-gray-50 px-4 py-2.5 text-xs text-gray-700">
										Type{' '}
										<kbd
											className={classNames(
												'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
												rawQuery.startsWith('#')
													? 'border-indigo-600 text-indigo-600'
													: 'border-gray-400 text-gray-900',
											)}
										>
											#
										</kbd>{' '}
										<span className="sm:hidden">for projects,</span>
										<span className="hidden sm:inline">
											to access projects,
										</span>
										<kbd
											className={classNames(
												'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
												rawQuery.startsWith('>')
													? 'border-indigo-600 text-indigo-600'
													: 'border-gray-400 text-gray-900',
											)}
										>
											&gt;
										</kbd>{' '}
										for users,{' '}
										<kbd
											className={classNames(
												'mx-1 flex h-5 w-5 items-center justify-center rounded border bg-white font-semibold sm:mx-2',
												rawQuery === '?'
													? 'border-indigo-600 text-indigo-600'
													: 'border-gray-400 text-gray-900',
											)}
										>
											?
										</kbd>{' '}
										for help, or{' '}
										<Link
											href={'/search'}
											className="mx-1 flex h-5 items-center justify-center rounded border border-primary-6000 bg-white px-1.5 text-neutral-900 sm:mx-2"
											onClick={() => setOpen(false)}
										>
											Go to search page
										</Link>{' '}
									</div>
								</Combobox>
							</DialogPanel>
						</TransitionChild>
					</div>
				</Dialog>
			</Transition>
		</>
	)
}

export default SearchModal
