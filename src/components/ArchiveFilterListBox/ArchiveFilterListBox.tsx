'use client'

import React, { FC } from 'react'
import { Fragment, useState } from 'react'
import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
	Transition,
} from '@headlessui/react'
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import Button from '../Button/Button'

export interface ArchiveFilterListBoxProps {
	className?: string
	lists: { name: string }[]
}

const ArchiveFilterListBox: FC<ArchiveFilterListBoxProps> = ({
	className = '',
	lists,
}) => {
	const [selected, setSelected] = useState(lists[0])
	return (
		<div className={`nc-ArchiveFilterListBox flex-shrink-0 ${className}`}>
			<Listbox value={selected} onChange={setSelected}>
				<div className="relative">
					<ListboxButton as={'div'}>
						<Button pattern="third" fontSize="text-sm font-medium">
							{selected.name}
							<ChevronDownIcon
								className="-me-1 ms-2 h-4 w-4"
								aria-hidden="true"
							/>
						</Button>
					</ListboxButton>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<ListboxOptions className="absolute right-0 z-50 mt-2 max-h-60 w-52 overflow-auto rounded-xl bg-white py-1 text-sm text-neutral-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-900 dark:text-neutral-200 dark:ring-neutral-700">
							{lists.map((item, index: number) => (
								<ListboxOption
									key={index}
									className={({ focus: active }) =>
										`${
											active
												? 'bg-primary-50 text-primary-700 dark:bg-neutral-700 dark:text-neutral-200'
												: ''
										} relative cursor-default select-none py-2 pe-4 ps-10`
									}
									value={item}
								>
									{({ selected }) => (
										<>
											<span
												className={`${
													selected ? 'font-medium' : 'font-normal'
												} block truncate`}
											>
												{item.name}
											</span>
											{selected ? (
												<span className="absolute inset-y-0 start-0 flex items-center ps-3 text-primary-700 dark:text-neutral-200">
													<CheckIcon className="h-5 w-5" aria-hidden="true" />
												</span>
											) : null}
										</>
									)}
								</ListboxOption>
							))}
						</ListboxOptions>
					</Transition>
				</div>
			</Listbox>
		</div>
	)
}

export default ArchiveFilterListBox
