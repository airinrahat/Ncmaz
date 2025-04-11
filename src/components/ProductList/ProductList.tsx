import React from 'react'

import Image from 'next/image'
import { getUsers } from '@/action/user'

const ProductList = () => {
	// const users = await getUsers()

	return (
		<div>
			<div className="px-5 py-8">
				<div className="flex flex-col items-center justify-center space-y-2 py-12">
					<p className="text-xl">
						--- <span className="text-blue-600">All Products Information</span>{' '}
						---
					</p>
					<h2 className="text-4xl font-semibold uppercase">Product List</h2>
				</div>

				<div className="overflow-x-auto rounded shadow-lg">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-primary-700 text-white">
							<tr>
								<th className="px-6 py-3 text-left text-sm font-bold uppercase">
									Image
								</th>
								<th className="px-6 py-3 text-left text-sm font-bold uppercase">
									Name
								</th>
								<th className="px-6 py-3 text-left text-sm font-bold uppercase">
									Email
								</th>
								<th className="px-6 py-3 text-left text-sm font-bold uppercase">
									Product Title
								</th>
								<th className="px-6 py-3 text-left text-sm font-bold uppercase">
									Category
								</th>

								<th className="px-6 py-3 text-left text-sm font-bold uppercase">
									Price
								</th>
								<th className="px-6 py-3 text-left text-sm font-bold uppercase">
									Edit
								</th>
								<th className="px-6 py-3 text-left text-sm font-bold uppercase">
									Delete
								</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-100 bg-white text-gray-700">
							<tr>
								<td className="px-6 py-4">
									<Image
										src=""
										alt="Product"
										className="h-12 w-12 rounded object-cover"
									/>
								</td>
								<td className="px-6 py-4">Airin Rahat</td>
								<td className="px-6 py-4">airin@email.com</td>
								<td className="px-6 py-4">Modern Chair</td>
								<td className="px-6 py-4">Furniture</td>

								<td className="px-6 py-4">$120</td>
								<td className="px-6 py-4">
									<button className="rounded bg-primary-700 px-4 py-1 text-white">
										edit
									</button>
								</td>
								<td className="px-6 py-4">
									<button className="rounded bg-primary-700 px-4 py-1 text-white">
										Delete
									</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default ProductList
