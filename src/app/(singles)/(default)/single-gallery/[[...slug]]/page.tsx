'use client'

import React from 'react'
import NcImage from '@/components/NcImage/NcImage'
import { StaticImageData } from 'next/image'
import ListingImageGallery from '@/components/listing-image-gallery/ListingImageGallery'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import SingleHeader from '@/app/(singles)/SingleHeader'
import { imgHigtQualitys } from '@/contains/fakeData'
import { Route } from 'next'
import { Suspense } from 'react'

const IMAGES_GALLERY: (string | StaticImageData)[] = imgHigtQualitys

const PageSg = ({}) => {
	//
	//
	const router = useRouter()
	const thisPathname = usePathname()
	const searchParams = useSearchParams()
	const modal = searchParams?.get('modal')
	//

	const handleCloseModalImageGallery = () => {
		let params = new URLSearchParams(document.location.search)
		params.delete('modal')
		router.push(`${thisPathname}/?${params.toString()}` as Route)
	}
	const handleOpenModalImageGallery = () => {
		router.push(`${thisPathname}/?modal=PHOTO_TOUR_SCROLLABLE` as Route)
	}

	return (
		<>
			<div className={`pt-8 lg:pt-16`}>
				{/* SINGLE HEADER */}
				<header className="container rounded-xl">
					<SingleHeader hiddenDesc />
					<div className="relative my-10 grid grid-cols-3 gap-2 sm:grid-cols-4">
						<div
							className="relative z-0 col-span-2 row-span-2 cursor-pointer overflow-hidden rounded-xl"
							onClick={handleOpenModalImageGallery}
						>
							<NcImage
								alt="single"
								containerClassName="absolute inset-0"
								className="h-full w-full rounded-xl object-cover"
								fill
								src={IMAGES_GALLERY[0]}
							/>
							<div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity hover:opacity-100"></div>
						</div>
						{IMAGES_GALLERY.filter((_, i) => i >= 1 && i < 5).map(
							(item, index) => (
								<div
									key={index}
									className={`relative z-0 overflow-hidden rounded-xl ${
										index >= 2 ? 'hidden sm:block' : ''
									}`}
								>
									<NcImage
										alt="single"
										fill
										containerClassName="aspect-w-6 aspect-h-5"
										className="h-full w-full rounded-xl object-cover"
										src={item || ''}
									/>

									{/* OVERLAY */}
									<div
										className="absolute inset-0 cursor-pointer bg-neutral-900 bg-opacity-20 opacity-0 transition-opacity hover:opacity-100"
										onClick={handleOpenModalImageGallery}
									/>
								</div>
							),
						)}

						<div
							className="absolute bottom-3 right-3 z-10 hidden cursor-pointer rounded-full bg-neutral-100 px-4 py-2 text-neutral-500 hover:bg-neutral-200 md:flex md:items-center md:justify-center"
							onClick={handleOpenModalImageGallery}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
								/>
							</svg>
							<span className="ms-2 text-sm font-medium text-neutral-800">
								Show all photos
							</span>
						</div>
					</div>
				</header>

				<ListingImageGallery
					isShowModal={modal === 'PHOTO_TOUR_SCROLLABLE'}
					onClose={handleCloseModalImageGallery}
					images={IMAGES_GALLERY.map((item, index) => {
						return {
							id: index,
							url: item,
						}
					})}
				/>
			</div>
		</>
	)
}

const PageSingleGallery = () => (
	<Suspense fallback={<div />}>
		<PageSg />
	</Suspense>
)

export default PageSingleGallery
