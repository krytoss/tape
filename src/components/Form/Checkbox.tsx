type Props = {
	id?: string,
	label: string,
	checked: boolean,
	onChange: (checked: boolean) => void,
	required?: boolean,
}

const Checkbox: React.FC<Props> = ({ id, label, checked, onChange, required }) => {
	
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.checked)
	}

	return (
		<div className="flex items-center mb-4">
			<input
				id={id}
				type="checkbox"
				className="h-4 w-4 text-blue-600 focus:ring focus:ring-blue-500"
				checked={checked}
				onChange={handleChange}
				required={required}
			/>
			<label htmlFor={id} className="ml-2 text-sm text-gray-600">{label}</label>
		</div>
	)
}

export default Checkbox