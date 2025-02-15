import { Dispatch, SetStateAction } from "react"

type InputProps = {
	label?: string,
	id: string,
	type: string,
	value: string,
	name: string,
	placeholder?: string,
	onChange: Dispatch<SetStateAction<string>>,
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.onChange(event.target.value)
	}

	return (
		<div className="flex flex-col mb-4">
			{
				label && (
					<label htmlFor={props.id} className="text-sm text-gray-600">
						{label}
					</label>
				)
			}
			<input
				{...props}
				className={`
					px-4 py-2
					border border-gray-300
					rounded-md
					focus:outline-none focus:ring focus:ring-blue-500
					bg-white
					w-full
				`}
				onChange={handleChange}
			/>
		</div>
	)
}

export default Input