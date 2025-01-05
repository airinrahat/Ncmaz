'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import Tag from '@/components/Tag/Tag'
import SingleAuthor from './SingleAuthor'
import SingleCommentForm from './SingleCommentForm'
import SingleCommentLists from './SingleCommentLists'
import SingleContentDemo from './SingleContentDemo'
import { DEMO_TAGS } from '@/data/taxonomies'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import PostCardLikeAction from '@/components/PostCardLikeAction/PostCardLikeAction'
import PostCardCommentBtn from '@/components/PostCardCommentBtn/PostCardCommentBtn'
import { ArrowUpIcon } from '@heroicons/react/24/solid'

const demoTags = DEMO_TAGS.filter((_, i) => i < 9)

export interface SingleContentProps {}

const SingleContent: FC<SingleContentProps> = ({}) => {
	const endedAnchorRef = useRef<HTMLDivElement>(null)
	const contentRef = useRef<HTMLDivElement>(null)
	const progressRef = useRef<HTMLButtonElement>(null)
	//
	const [isShowScrollToTop, setIsShowScrollToTop] = useState<boolean>(false)
	//

	const endedAnchorEntry = useIntersectionObserver(endedAnchorRef, {
		threshold: 0,
		root: null,
		rootMargin: '0%',
		freezeOnceVisible: false,
	})

	useEffect(() => {
		const handleProgressIndicator = () => {
			const entryContent = contentRef.current
			const progressBarContent = progressRef.current

			if (!entryContent || !progressBarContent) {
				return
			}

			const totalEntryH = entryContent.offsetTop + entryContent.offsetHeight
			let winScroll =
				document.body.scrollTop || document.documentElement.scrollTop
			let scrolled = (winScroll / totalEntryH) * 100

			progressBarContent.innerText = scrolled.toFixed(0) + '%'

			if (scrolled >= 100) {
				setIsShowScrollToTop(true)
			} else {
				setIsShowScrollToTop(false)
			}
		}

		const handleProgressIndicatorHeadeEvent = () => {
			window?.requestAnimationFrame(handleProgressIndicator)
		}
		handleProgressIndicator()
		window?.addEventListener('scroll', handleProgressIndicatorHeadeEvent)
		return () => {
			window?.removeEventListener('scroll', handleProgressIndicatorHeadeEvent)
		}
	}, [])

	const showLikeAndCommentSticky =
		!endedAnchorEntry?.intersectionRatio &&
		(endedAnchorEntry?.boundingClientRect.top || 0) > 0

	return (
		<div className="relative">
			<div className="nc-SingleContent space-y-10">
				{/* ENTRY CONTENT */}
				<div
					id="single-entry-content"
					className="prose mx-auto !max-w-screen-md dark:prose-invert lg:prose-lg"
					ref={contentRef}
				>
					<SingleContentDemo />
				</div>

				{/* TAGS */}
				<div className="mx-auto flex max-w-screen-md flex-wrap">
					{demoTags.map((item) => (
						<Tag hideCount key={item.id} tag={item} className="mb-2 me-2" />
					))}
				</div>

				{/* AUTHOR */}
				<div className="mx-auto max-w-screen-md border-b border-t border-neutral-100 dark:border-neutral-700"></div>
				<div className="mx-auto max-w-screen-md">
					<SingleAuthor />
				</div>

				{/* COMMENT FORM */}
				<div
					id="comments"
					className="mx-auto max-w-screen-md scroll-mt-20 pt-5"
				>
					<h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200">
						Responses (10)
					</h3>
					<SingleCommentForm />
				</div>

				{/* COMMENTS LIST */}
				<div className="mx-auto max-w-screen-md">
					<SingleCommentLists />
					<div ref={endedAnchorRef}></div>
				</div>
			</div>
			<div
				className={`sticky bottom-8 z-30 mt-8 justify-center ${
					showLikeAndCommentSticky ? 'flex' : 'hidden'
				}`}
			>
				<div className="flex items-center justify-center space-x-2 rounded-full bg-white p-1.5 text-xs shadow-lg ring-1 ring-neutral-900/5 ring-offset-1 dark:bg-neutral-800 rtl:space-x-reverse">
					<PostCardLikeAction className="h-9 px-3 text-xs" />
					<div className="h-4 border-s border-neutral-200 dark:border-neutral-700"></div>
					<PostCardCommentBtn
						isATagOnSingle
						className={`flex h-9 px-3 text-xs`}
					/>
					<div className="h-4 border-s border-neutral-200 dark:border-neutral-700"></div>

					<button
						className={`h-9 w-9 items-center justify-center rounded-full bg-neutral-50 hover:bg-neutral-100 dark:bg-neutral-800 ${
							isShowScrollToTop ? 'flex' : 'hidden'
						}`}
						onClick={() => {
							window.scrollTo({ top: 0, behavior: 'smooth' })
						}}
					>
						<ArrowUpIcon className="h-4 w-4" />
					</button>

					<button
						ref={progressRef}
						className={`h-9 w-9 items-center justify-center ${
							isShowScrollToTop ? 'hidden' : 'flex'
						}`}
						title="Go to top"
					>
						%
					</button>
				</div>
			</div>
		</div>
	)
}

export default SingleContent
