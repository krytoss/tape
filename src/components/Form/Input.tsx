type InputProps = {
	label: string,
	id: string,
	type: string,
	value: string,
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
	return (
		<div className="flex flex-col mb-4">
			<label htmlFor={props.id} className="text-sm text-gray-600">
				{label}
			</label>
			<input
				{...props}
				className={`
					px-4 py-2
					border border-gray-300
					rounded-md
					focus:outline-none focus:ring focus:ring-blue-500
				`}
			/>
		</div>
	)
}

export default Input