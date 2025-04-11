'use client'

import React, { useState } from 'react'
import { DEMO_POSTS } from '@/data/posts'
import { PostDataType } from '@/data/types'
import Pagination from '@/components/Pagination/Pagination'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import { DEMO_AUTHORS } from '@/data/authors'
import { DEMO_CATEGORIES } from '@/data/taxonomies'
import Nav from '@/components/Nav/Nav'
import NavItem from '@/components/NavItem/NavItem'
import SocialsList from '@/components/SocialsList/SocialsList'
import ArchiveFilterListBox from '@/components/ArchiveFilterListBox/ArchiveFilterListBox'
import SectionSubscribe2 from '@/components/SectionSubscribe2/SectionSubscribe2'
import Card11 from '@/components/Card11/Card11'
import BackgroundSection from '@/components/BackgroundSection/BackgroundSection'
import SectionGridCategoryBox from '@/components/SectionGridCategoryBox/SectionGridCategoryBox'
import ButtonSecondary from '@/components/Button/ButtonSecondary'
import SectionSliderNewAuthors from '@/components/SectionSliderNewAthors/SectionSliderNewAuthors'
import NcImage from '@/components/NcImage/NcImage'
import { GlobeAltIcon, ShareIcon } from '@heroicons/react/24/outline'
import { avatarImgs } from '@/contains/fakeData'
import VerifyIcon from '@/components/VerifyIcon'
import FollowButton from '@/components/FollowButton'
import NcDropDown from '@/components/NcDropDown/NcDropDown'
import { SOCIALS_DATA } from '@/components/SocialsShare/SocialsShare'
// import AccountActionDropdown from "@/components/AccountActionDropdown/AccountActionDropdown";
import Image from 'next/image'

const posts: PostDataType[] = DEMO_POSTS.filter((_, i) => i < 12)
const FILTERS = [
	{ name: 'Most Recent' },
	{ name: 'Curated by Admin' },
	{ name: 'Most Appreciated' },
	{ name: 'Most Discussed' },
	{ name: 'Most Viewed' },
]
const TABS = ['Articles', 'Favorites', 'Saved']

const PageAuthor = ({}) => {
	const [tabActive, setTabActive] = useState<string>(TABS[0])

	const handleClickTab = (item: string) => {
		if (item === tabActive) {
			return
		}
		setTabActive(item)
	}

	return (
		<div className={`nc-PageAuthor`}>
			{/* HEADER */}
			<div className="w-full">
				<div className="relative h-40 w-full md:h-60 2xl:h-72">
					<NcImage
						alt=""
						containerClassName="absolute inset-0"
						sizes="(max-width: 1280px) 100vw, 1536px"
						src="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
						className="h-full w-full object-cover"
						fill
						priority
					/>
				</div>
				<div className="container -mt-10 lg:-mt-16">
					<div className="relative flex flex-col rounded-3xl bg-white p-5 shadow-xl dark:border dark:border-neutral-700 dark:bg-neutral-900 md:flex-row md:rounded-[40px] lg:p-8">
						<div className="mt-12 w-32 flex-shrink-0 sm:mt-0 lg:w-40">
							<div className="wil-avatar relative z-0 inline-flex h-20 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-full text-xl font-semibold uppercase text-neutral-100 shadow-2xl ring-4 ring-white dark:ring-0 lg:h-36 lg:w-36 lg:text-2xl">
								<Image
									alt="Avatar"
									src={avatarImgs[3]}
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>

						{/*  */}
						<div className="flex-grow pt-5 md:pt-1 lg:ml-6 xl:ml-12">
							<div className="max-w-screen-sm space-y-3.5">
								<h2 className="inline-flex items-center text-2xl font-semibold sm:text-3xl lg:text-4xl">
									<span>Dony Herrera</span>
									<VerifyIcon
										className="ml-2"
										iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
									/>
								</h2>
								<span className="block text-sm text-neutral-500 dark:text-neutral-400">
									Lorem, ipsum dolor sit amet consectetur adipisicing elit.
									Porro autem totam iure quibusdam asperiores numquam quae animi
									assumenda necessitatibus consectetur.
								</span>
								<a
									href="#"
									className="flex cursor-pointer items-center space-x-2.5 truncate text-xs font-medium text-neutral-500 dark:text-neutral-400 rtl:space-x-reverse"
								>
									<GlobeAltIcon className="h-4 w-4 flex-shrink-0" />
									<span className="truncate text-neutral-700 dark:text-neutral-300">
										https://example.com/me
									</span>
								</a>
								<SocialsList itemClass="block w-7 h-7" />
							</div>
						</div>

						{/*  */}
						<div className="absolute end-5 start-5 top-4 flex justify-end sm:end-5 sm:start-auto sm:top-5 md:static">
							<FollowButton
								isFollowing={false}
								fontSize="text-sm md:text-base font-medium"
								sizeClass="px-4 py-1 md:py-2.5 h-8 md:!h-10 sm:px-6 lg:px-8"
							/>

							<div className="mx-2">
								<NcDropDown
									className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 focus:outline-none dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700"
									renderTrigger={() => <ShareIcon className="h-5 w-5" />}
									onClick={() => {}}
									data={SOCIALS_DATA}
								/>
							</div>

							{/* <AccountActionDropdown containerClassName="h-10 w-10 bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-800 dark:hover:bg-neutral-700" /> */}
						</div>
					</div>
				</div>
			</div>
			{/* ====================== END HEADER ====================== */}

			<div className="container space-y-16 py-16 lg:space-y-28 lg:pb-28 lg:pt-20">
				<main>
					{/* TABS FILTER */}
					<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
						<Nav className="sm:space-x-2 rtl:space-x-reverse">
							{TABS.map((item, index) => (
								<NavItem
									key={index}
									isActive={tabActive === item}
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
					<div className="mt-8 grid gap-6 sm:grid-cols-2 md:gap-8 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4">
						{posts.map((post) => (
							<Card11 key={post.id} post={post} />
						))}
					</div>

					{/* PAGINATION */}
					<div className="mt-12 flex flex-col space-y-5 sm:flex-row sm:items-center sm:justify-between sm:space-x-3 sm:space-y-0 lg:mt-16">
						<Pagination />
						<ButtonPrimary>Show me more</ButtonPrimary>
					</div>
				</main>

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

export default PageAuthor
