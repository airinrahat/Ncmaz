import Avatar from '@/components/Avatar/Avatar'
import { DEMO_AUTHORS } from '@/data/authors'
import { PostAuthorType } from '@/data/types'
import Link from 'next/link'
import React, { FC } from 'react'

export interface SingleAuthorProps {
	author?: PostAuthorType
}

const SingleAuthor: FC<SingleAuthorProps> = ({ author = DEMO_AUTHORS[1] }) => {
	return (
		<div className="nc-SingleAuthor flex">
			<Link href={author.href}>
				<Avatar
					imgUrl={author.avatar}
					userName={author.displayName}
					sizeClass="h-12 w-12 text-lg sm:text-xl sm:h-24 sm:w-24"
				/>
			</Link>
			<div className="ml-3 flex max-w-lg flex-col sm:ml-5">
				<span className="text-xs uppercase tracking-wider text-neutral-400">
					WRITTEN BY
				</span>
				<h2 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
					<Link href={author.href}>{author.displayName}</Link>
				</h2>
				<span className="mt-1 block text-sm text-neutral-500 dark:text-neutral-300 sm:text-base">
					{author.desc}
					<Link
						className="ml-1 font-medium text-primary-6000"
						href={author.href}
					>
						Read more
					</Link>
				</span>
			</div>
		</div>
	)
}

export default SingleAuthor
