import React, { FC } from 'react'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import CommentCard from '@/components/CommentCard/CommentCard'

export interface SingleCommentListsProps {}

const SingleCommentLists: FC<SingleCommentListsProps> = ({}) => {
	return (
		<ul className="nc-SingleCommentLists space-y-5">
			<CommentCard />
			<CommentCard />
			<CommentCard />
			<CommentCard />

			<ButtonPrimary className="w-full dark:bg-primary-700">
				View full comments (+117 comments)
			</ButtonPrimary>
		</ul>
	)
}

export default SingleCommentLists
