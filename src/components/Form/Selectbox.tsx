type Props = {
	id: string,
	label: string,
	options: { value: string | undefined, label: string, selected?: boolean, disabled?: boolean }[],
	required?: boolean,
	onChange: (value: string) => void
}

const Selectbox: React.FC<Props> = ({ label, options, onChange, ...props }) => {

	const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		onChange(event.target.value)
	}

	return (
		<div className="mb-4">
			<label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
				{label}
				{props.required && <span className="-ml-0.5 align-middle text-red-500 text-xl font-bold leading-[1]"> *</span>}
			</label>
			<select
				{...props}
				className="p-2 border border-gray-300 rounded-md bg-white w-full"
				onChange={handleChange}
			>
				{options.map((option, index) => (
					<option key={index} value={option.value} selected={option.selected} disabled={option.disabled}>{option.label}</option>
				))}
			</select>
		</div>
	)
}

export default Selectbox