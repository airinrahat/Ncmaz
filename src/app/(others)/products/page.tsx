import { getUsers } from '@/action/user'
import Image from 'next/image'
import { FaTrashAlt } from 'react-icons/fa'
import { FaEdit } from 'react-icons/fa'

const ProductList = async () => {
	const users = await getUsers()

	return (
		<div className="px-5 py-10">
			<div className="flex flex-col items-center justify-center space-y-3 pb-10">
				<p className="text-xl text-gray-600">
					---{' '}
					<span className="font-semibold text-primary-700">
						All Products Information
					</span>{' '}
					---
				</p>
				<h2 className="text-4xl font-bold uppercase text-gray-800">
					Product List
				</h2>
			</div>

			<div className="overflow-x-auto rounded-2xl bg-white shadow-lg">
				<table className="min-w-full divide-y divide-gray-200 text-sm">
					<thead className="bg-primary-700 text-white">
						<tr>
							{[
								'SL',
								'Image',
								'Name',
								'Email',
								'Product Title',
								'Category',
								'Price',
								'Edit',
								'Delete',
							].map((title, i) => (
								<th
									key={i}
									className="px-6 py-4 text-left font-semibold uppercase tracking-wide"
								>
									{title}
								</th>
							))}
						</tr>
					</thead>

					<tbody className="divide-y divide-gray-100 bg-white text-gray-700">
						{users.map((user, index) => (
							<tr
								key={user._id}
								className="transition-all duration-200 hover:bg-gray-50"
							>
								<td className="px-6 py-4 font-medium text-gray-600">
									{index + 1}
								</td>

								<td className="px-6 py-4">
									<Image
										src={user.imageUrl || '/default-image.jpg'}
										alt="Product"
										className="rounded-full border border-gray-300 shadow-sm"
										width={50}
										height={50}
									/>
								</td>

								<td className="px-6 py-4">{user.name}</td>
								<td className="px-6 py-4">{user.email}</td>
								<td className="px-6 py-4">{user.title}</td>
								<td className="px-6 py-4">{user.category}</td>
								<td className="px-6 py-4">${user.price}</td>

								<td className="px-6 py-4">
									<button
										title="Edit"
										className="rounded-full p-2 transition-colors hover:bg-blue-100"
									>
										<FaEdit className="text-lg text-blue-600" />
									</button>
								</td>

								<td className="px-6 py-4">
									<button
										title="Delete"
										className="rounded-full p-2 transition-colors hover:bg-red-100"
									>
										<FaTrashAlt className="text-lg text-red-600" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default ProductList
