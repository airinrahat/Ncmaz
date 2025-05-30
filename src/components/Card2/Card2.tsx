import React, { FC } from 'react'
import PostCardSaveAction from '@/components/PostCardSaveAction/PostCardSaveAction'
import { PostDataType } from '@/data/types'
import PostCardLikeAndComment from '@/components/PostCardLikeAndComment/PostCardLikeAndComment'
import CategoryBadgeList from '@/components/CategoryBadgeList/CategoryBadgeList'
import PostTypeFeaturedIcon from '@/components/PostTypeFeaturedIcon/PostTypeFeaturedIcon'
import Link from 'next/link'
import Image from 'next/image'
import PostCardMeta from '../PostCardMeta/PostCardMeta'

export interface Card2Props {
	className?: string
	post: PostDataType
	size?: 'normal' | 'large'
}

const Card2: FC<Card2Props> = ({
	className = 'h-full',
	size = 'normal',
	post,
}) => {
	const {
		title,
		href,
		readingTime,
		featuredImage,
		desc,
		categories,
		postType,
	} = post

	return (
		<div className={`nc-Card2 group relative flex flex-col ${className}`}>
			<div className="relative z-0 block h-0 w-full flex-shrink-0 flex-grow pt-[75%] sm:pt-[55%]">
				<Image
					fill
					sizes="(max-width: 600px) 480px, 800px"
					className="rounded-3xl object-cover"
					src={featuredImage}
					alt={title}
				/>
				<PostTypeFeaturedIcon
					className="absolute bottom-2 left-2"
					postType={postType}
					wrapSize="w-8 h-8"
					iconSize="w-4 h-4"
				/>
				<CategoryBadgeList
					className="absolute left-3 top-3 flex flex-wrap space-x-2"
					itemClass="relative"
					categories={categories}
				/>
			</div>

			<Link href={href} className="absolute inset-0" />

			<div className="mt-5 flex flex-col px-4">
				<div className="space-y-3">
					<PostCardMeta
						className="relative text-sm"
						avatarSize="h-8 w-8 text-sm"
						meta={post}
					/>

					<h2
						className={`nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 ${
							size === 'large' ? 'text-base sm:text-lg md:text-xl' : 'text-base'
						}`}
					>
						<Link href={href} className="line-clamp-2" title={title}>
							{title}
						</Link>
					</h2>
					<span className="block text-[15px] leading-6 text-neutral-500 dark:text-neutral-400">
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
						beatae quasi et, reprehenderit alias veritatis nostrum iste sed
						laboriosam eveniet possimus.
					</span>
				</div>
				<div className="my-5 border-t border-neutral-200 dark:border-neutral-700"></div>
				<div className="flex items-center justify-between">
					<PostCardLikeAndComment className="relative" />
					<PostCardSaveAction className="relative" readingTime={readingTime} />
				</div>
			</div>
		</div>
	)
}

export default Card2
