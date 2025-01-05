import { TaxonomyType } from '@/data/types'
import Link from 'next/link'
import React, { FC } from 'react'

export interface TagProps {
	className?: string
	tag: TaxonomyType
	hideCount?: boolean
}

const Tag: FC<TagProps> = ({ className = '', tag, hideCount = false }) => {
	return (
		<Link
			className={`nc-Tag inline-block rounded-lg border border-neutral-100 bg-white px-3 py-2 text-sm text-neutral-600 hover:bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300 md:px-4 md:py-2.5 ${className}`}
			href={tag.href}
		>
			{`${tag.name}`}
			{!hideCount && (
				<span className="text-xs font-normal"> ({tag.count})</span>
			)}
		</Link>
	)
}

export default Tag
