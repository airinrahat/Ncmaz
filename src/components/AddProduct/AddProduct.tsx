import { addUser } from '@/action/user'

const AddProduct = () => {
	// }ncmaz EvWbf2TRBwOI6S2w
	return (
		<div>
			<div>
				{' '}
				<div className="bg-gray-100 px-5 py-5 pt-24 lg:px-0 xl:py-10">
					<div className="pb-5">
						<h1 className="text-center text-2xl font-bold text-gray-500">
							Add Product
						</h1>
					</div>
					<form
						action={addUser}
						className="mx-auto rounded bg-white p-5 py-5 text-gray-500 lg:w-3/4 lg:p-10"
					>
						<div className="mb-4 justify-center gap-5 lg:flex">
							<div className="form-control w-full text-gray-500 lg:w-1/2">
								<label className="label">
									<span className="label-text font-bold">Full Name</span>
								</label>
								<label className="input-group">
									<input
										type="text"
										name="fullname"
										placeholder="Your Full Name"
										className="input input-bordered w-full focus:outline-none"
										required
									/>
								</label>
							</div>
							<div className="form-control w-full lg:w-1/2">
								<label className="label">
									<span className="label-text font-bold">Email </span>
								</label>
								<label className="input-group">
									<input
										type="text"
										name="email"
										placeholder="Your Email"
										className="input input-bordered w-full focus:outline-none"
										required
									/>
								</label>
							</div>
						</div>
						<div className="mb-4 justify-center gap-5 lg:flex">
							<div className="form-control w-full lg:w-1/2">
								<label className="label">
									<span className="label-text font-bold">Product Title</span>
								</label>
								<label className="input-group">
									<input
										type="text"
										name="title"
										placeholder="Product Title"
										className="input input-bordered w-full focus:outline-none"
										required
									/>
								</label>
							</div>
							<div className="form-control w-full lg:w-1/2">
								<label className="label">
									<span className="label-text font-bold">Product Category</span>
								</label>
								<label className="input-group">
									<input
										type="text"
										name="category"
										placeholder="Product Category"
										className="input input-bordered w-full focus:outline-none"
										required
									/>
								</label>
							</div>
						</div>
						<div className="mb-4 justify-center gap-5 lg:flex">
							<div className="form-control w-full lg:w-1/2">
								<label className="label">
									<span className="label-text font-bold">Photo URL</span>
								</label>
								<label className="input-group">
									<input
										type="text"
										name="url"
										placeholder="Photo URL"
										className="input input-bordered w-full focus:outline-none"
										required
									/>
								</label>
							</div>
							<div className="form-control w-full lg:w-1/2">
								<label className="label">
									<span className="label-text font-bold">Product Price</span>
								</label>
								<label className="input-group">
									<input
										type="text"
										name="price"
										placeholder="Product Price"
										className="input input-bordered w-full focus:outline-none"
										required
									/>
								</label>
							</div>
						</div>
						<div className="mb-4">
							<div className="form-control w-full">
								<label className="label">
									<span className="label-text font-bold">Description</span>
								</label>
								<textarea
									className="textarea textarea-bordered h-20 w-full focus:outline-none"
									name="description"
									placeholder="Description"
								></textarea>
							</div>
						</div>

						<div>
							<button
								type="submit"
								className="w-full rounded bg-primary-700 py-3 font-bold text-white"
							>
								Add Product
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default AddProduct
