'use client'

import React, { useState } from 'react'
import { DEMO_POSTS } from '@/data/posts'
import { PostDataType } from '@/data/types'
import { DEMO_AUTHORS } from '@/data/authors'
import { DEMO_CATEGORIES } from '@/data/taxonomies'
import Pagination from '@/components/Pagination/Pagination'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import Nav from '@/components/Nav/Nav'
import NavItem from '@/components/NavItem/NavItem'
import ArchiveFilterListBox from '@/components/ArchiveFilterListBox/ArchiveFilterListBox'
import Input from '@/components/Input/Input'
import SectionSubscribe2 from '@/components/SectionSubscribe2/SectionSubscribe2'
import NcImage from '@/components/NcImage/NcImage'
import NcLink from '@/components/NcLink/NcLink'
import SectionSliderNewAuthors from '@/components/SectionSliderNewAthors/SectionSliderNewAuthors'
import ButtonSecondary from '@/components/Button/ButtonSecondary'
import SectionGridCategoryBox from '@/components/SectionGridCategoryBox/SectionGridCategoryBox'
import BackgroundSection from '@/components/BackgroundSection/BackgroundSection'
import Card11 from '@/components/Card11/Card11'
import ButtonCircle from '@/components/Button/ButtonCircle'
import CardCategory2 from '@/components/CardCategory2/CardCategory2'
import Tag from '@/components/Tag/Tag'
import CardAuthorBox2 from '@/components/CardAuthorBox2/CardAuthorBox2'
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const posts: PostDataType[] = DEMO_POSTS.filter((_, i) => i < 12)
const cats = DEMO_CATEGORIES.filter((_, i) => i < 15)
const tags = DEMO_CATEGORIES.filter((_, i) => i < 32)
const authors = DEMO_AUTHORS.filter((_, i) => i < 12)

const FILTERS = [
	{ name: 'Most Recent' },
	{ name: 'Curated by Admin' },
	{ name: 'Most Appreciated' },
	{ name: 'Most Discussed' },
	{ name: 'Most Viewed' },
]

const TABS = ['Articles', 'Categories', 'Tags', 'Authors']

const PageSearch = ({}) => {
	let s = 'Technology'

	const [tabActive, setTabActive] = useState(TABS[0])

	const handleClickTab = (item: string) => {
		if (item === tabActive) {
			return
		}
		setTabActive(item)
	}

	return (
		<div className={`nc-PageSearch`}>
			{/* HEADER */}
			<div className="mx-auto w-screen px-2 xl:max-w-screen-2xl">
				<div className="aspect-h-9 aspect-w-16 relative z-0 overflow-hidden rounded-3xl lg:aspect-h-5 md:rounded-[40px]">
					<NcImage
						alt="search"
						fill
						containerClassName="absolute inset-0"
						src="https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						className="h-full w-full object-cover"
						sizes="(max-width: 1280px) 100vw, 1536px"
					/>
				</div>
				{/* CONTENT */}
				<div className="container relative -mt-20 lg:-mt-48">
					<div className="flex items-center rounded-[40px] bg-white p-5 shadow-2xl dark:border dark:border-neutral-700 dark:bg-neutral-900 lg:p-16">
						<header className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
							<h2 className="text-2xl font-semibold sm:text-4xl">{s}</h2>
							<span className="mt-4 block text-xs text-neutral-500 dark:text-neutral-300 sm:text-sm">
								We found{' '}
								<strong className="font-medium text-neutral-800 dark:text-neutral-100">
									1135
								</strong>{' '}
								results for{' '}
								<strong className="font-medium text-neutral-800 dark:text-neutral-100">
									{s}
								</strong>
							</span>
							<form
								className="relative mt-8 w-full text-left sm:mt-11"
								method="post"
							>
								<label
									htmlFor="search-input"
									className="text-neutral-500 dark:text-neutral-300"
								>
									<span className="sr-only">Search all icons</span>
									<Input
										id="search-input"
										type="search"
										placeholder="Type and press enter"
										sizeClass="pl-14 py-5 pe-5 md:ps-16"
										defaultValue={s}
									/>
									<ButtonCircle
										className="absolute end-2.5 top-1/2 -translate-y-1/2 transform"
										size=" w-11 h-11"
										type="submit"
									>
										<ArrowRightIcon className="h-5 w-5 rtl:rotate-180" />
									</ButtonCircle>
									<span className="absolute start-5 top-1/2 -translate-y-1/2 transform text-2xl md:start-6">
										<svg width="24" height="24" fill="none" viewBox="0 0 24 24">
											<path
												stroke="currentColor"
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="1.5"
												d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
											></path>
										</svg>
									</span>
								</label>
							</form>
							<div className="mt-4 w-full text-start text-sm text-neutral-500 dark:text-neutral-300">
								<div className="inline-block space-x-1.5 sm:space-x-2.5 rtl:space-x-reverse">
									<span className="">Related:</span>
									<NcLink className="inline-block font-normal" href="/search">
										Design
									</NcLink>
									<NcLink className="inline-block font-normal" href="/search">
										Photo
									</NcLink>
									<NcLink className="inline-block font-normal" href="/search">
										Vector
									</NcLink>
									<NcLink className="inline-block font-normal" href="/search">
										Frontend
									</NcLink>
								</div>
							</div>
						</header>
					</div>
				</div>
			</div>
			{/* ====================== END HEADER ====================== */}

			<div className="container space-y-16 py-16 lg:space-y-28 lg:pb-28 lg:pt-20">
				<main>
					{/* TABS FILTER */}
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
						<Nav
							containerClassName="w-full overflow-x-auto hiddenScrollbar"
							className="sm:space-x-2 rtl:space-x-reverse"
						>
							{TABS.map((item, index) => (
								<NavItem
									isActive={item === tabActive}
									key={index}
									onClick={() => handleClickTab(item)}
								>
									{item}
								</NavItem>
							))}
						</Nav>
						<div className="my-4 block w-full border-b border-neutral-300 dark:border-neutral-500 sm:hidden"></div>
						<div className="flex justify-end">
							<ArchiveFilterListBox lists={FILTERS} />
						</div>
					</div>

					{/* LOOP ITEMS */}
					{/* LOOP ITEMS POSTS */}
					{tabActive === 'Articles' && (
						<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-8 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4">
							{posts.map((post) => (
								<Card11 key={post.id} post={post} />
							))}
						</div>
					)}
					{/* LOOP ITEMS CATEGORIES */}
					{tabActive === 'Categories' && (
						<div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-8 lg:mt-10 lg:grid-cols-4 xl:grid-cols-5">
							{cats.map((cat) => (
								<CardCategory2 key={cat.id} taxonomy={cat} />
							))}
						</div>
					)}
					{/* LOOP ITEMS TAGS */}
					{tabActive === 'Tags' && (
						<div className="mt-12 flex flex-wrap">
							{tags.map((tag) => (
								<Tag className="mb-3 mr-3" key={tag.id} tag={tag} />
							))}
						</div>
					)}
					{/* LOOP ITEMS POSTS */}
					{tabActive === 'Authors' && (
						<div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:gap-8 lg:mt-10 lg:grid-cols-4 xl:grid-cols-5">
							{authors.map((author) => (
								<CardAuthorBox2 key={author.id} author={author} />
							))}
						</div>
					)}

					{/* PAGINATION */}
					<div className="mt-12 flex flex-col space-y-5 sm:flex-row sm:items-center sm:justify-between sm:space-x-3 sm:space-y-0 lg:mt-16">
						<Pagination />
						<ButtonPrimary>Show me more</ButtonPrimary>
					</div>
				</main>

				{/* MORE SECTIONS */}
				{/* === SECTION 5 === */}
				<div className="relative py-16">
					<BackgroundSection />
					<SectionGridCategoryBox
						categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
					/>
					<div className="mx-auto mt-10 text-center md:mt-16">
						<ButtonSecondary>Show me more</ButtonSecondary>
					</div>
				</div>

				{/* === SECTION 5 === */}
				<SectionSliderNewAuthors
					heading="Top elite authors"
					subHeading="Discover our elite writers"
					authors={DEMO_AUTHORS.filter((_, i) => i < 10)}
				/>

				{/* SUBCRIBES */}
				<SectionSubscribe2 />
			</div>
		</div>
	)
}

export default PageSearch
