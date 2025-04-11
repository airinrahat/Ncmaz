'use client'

import FollowButton from '@/components/FollowButton'
import SocialsList from '@/components/SocialsList/SocialsList'
import Image from 'next/image'
import { avatarImgs } from '@/contains/fakeData'
import VerifyIcon from '@/components/VerifyIcon'
import { GlobeAltIcon, ShareIcon } from '@heroicons/react/24/outline'
import NcImage from '@/components/NcImage/NcImage'
import NcDropDown, { NcDropDownItem } from '@/components/NcDropDown/NcDropDown'
import { SOCIALS_DATA } from '@/components/SocialsShare/SocialsShare'
import ButtonPrimary from '@/components/Button/ButtonPrimary'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import AddProduct from '@/components/AddProduct/AddProduct'
import { PlusIcon } from '@heroicons/react/24/solid'

const Page = () => {
	const [isOpen, setIsOpen] = useState(false)

	function closeModal() {
		setIsOpen(false)
	}

	function openModal() {
		setIsOpen(true)
	}

	return (
		<div>
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

						{/* Content Section */}
						<div className="flex-grow pt-5 md:pt-1 lg:ml-6 xl:ml-12">
							<div className="max-w-screen-sm space-y-3.5">
								<h2 className="inline-flex items-center text-2xl font-semibold sm:text-3xl lg:text-4xl">
									<span> Don Herrera</span>
									<VerifyIcon
										className="ml-2"
										iconClass="w-6 h-6 sm:w-7 sm:h-7 xl:w-8 xl:h-8"
									/>
								</h2>
								<span className="block text-sm text-neutral-500 dark:text-neutral-400">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
									quidem!.
								</span>

								{/* <ButtonPrimary className="w-25 h-2" onClick={openModal}>
									<span>Update</span>
								</ButtonPrimary> */}

								<SocialsList itemClass="block w-7 h-7" />
								<Transition appear show={isOpen} as={Fragment}>
									<Dialog
										as="div"
										className="relative z-10"
										onClose={closeModal}
									>
										<Transition.Child
											as={Fragment}
											enter="ease-out duration-300"
											enterFrom="opacity-0"
											enterTo="opacity-100"
											leave="ease-in duration-200"
											leaveFrom="opacity-100"
											leaveTo="opacity-0"
										>
											<div className="fixed inset-0 bg-black/25" />
										</Transition.Child>

										<div className="fixed inset-0 flex items-center justify-center p-4">
											<Transition.Child
												as={Fragment}
												enter="ease-out duration-300"
												enterFrom="opacity-0 scale-95"
												enterTo="opacity-100 scale-100"
												leave="ease-in duration-200"
												leaveFrom="opacity-100 scale-100"
												leaveTo="opacity-0 scale-95"
											>
												<Dialog.Panel className="relative w-full max-w-lg rounded-lg bg-white p-6 shadow-xl">
													{/* Close Button */}
													<button
														onClick={closeModal}
														className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
													>
														<XMarkIcon className="h-6 w-6" />
													</button>

													{/* Modal Title */}
													<Dialog.Title className="text-lg font-semibold text-gray-900">
														Add Note & Upload Files
													</Dialog.Title>

													{/* Note Input */}
													<div className="mt-4">
														<label className="block text-sm font-medium text-gray-700">
															Write your note:
														</label>
														{/* <textarea
															className="mt-1 w-full rounded-md border p-2 focus:ring focus:ring-blue-300"
															rows="3"
															placeholder="Write something..."
														></textarea> */}
													</div>

													{/* File Inputs */}
													<div className="mt-4">
														<label className="block text-sm font-medium text-gray-700">
															Upload File 1:
														</label>
														<input
															type="file"
															className="mt-1 w-full rounded-md border p-1"
														/>
													</div>

													<div className="mt-4">
														<label className="block text-sm font-medium text-gray-700">
															Upload File 2:
														</label>
														<input
															type="file"
															className="mt-1 w-full rounded-md border p-1"
														/>
													</div>

													{/* Submit Button */}
													<div className="mt-6 flex justify-end">
														<button
															onClick={closeModal}
															className="rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
														>
															Submit
														</button>
													</div>
												</Dialog.Panel>
											</Transition.Child>
										</div>
									</Dialog>
								</Transition>
							</div>
						</div>

						{/* Right-side Actions */}
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
						</div>
					</div>
				</div>
			</div>
			<AddProduct />
		</div>
	)
}

export default Page
