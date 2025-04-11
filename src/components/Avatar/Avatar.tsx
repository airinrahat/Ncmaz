'use client'

import { avatarColors } from '@/contains/contants'
// import { _getAvatarRd } from "@/contains/fakeData";
import Image, { StaticImageData } from 'next/image'
import React, { FC, useEffect, useState } from 'react'

export interface AvatarProps {
	containerClassName?: string
	sizeClass?: string
	radius?: string
	imgUrl?: string | StaticImageData
	userName?: string
}

const _setBgColor = (name: string) => {
	const backgroundIndex = Math.floor(name.charCodeAt(0) % avatarColors.length)
	return avatarColors[backgroundIndex]
}

const Avatar: FC<AvatarProps> = ({
	containerClassName = 'ring-1 ring-white dark:ring-neutral-900',
	sizeClass = 'h-6 w-6 text-sm',
	radius = 'rounded-full',
	imgUrl,
	userName,
}) => {
	const name = userName || 'John Doe'

	const [url, setUrl] = useState(imgUrl)

	// useEffect(() => {
	//   if (!url) {
	//     setUrl(_getAvatarRd());
	//   }
	// }, []);

	return (
		<div
			className={`wil-avatar relative inline-flex flex-shrink-0 items-center justify-center overflow-hidden font-semibold uppercase text-neutral-100 shadow-inner ${radius} ${sizeClass} ${containerClassName}`}
			style={{ backgroundColor: url ? undefined : _setBgColor(name) }}
		>
			{url && (
				<Image
					fill
					sizes="100px"
					className="absolute inset-0 h-full w-full object-cover"
					src={url}
					alt={name}
				/>
			)}
			<span className="wil-avatar__name">{name[0]}</span>
		</div>
	)
}

export default Avatar
