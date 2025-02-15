type Props = {
	id: string,
	label: string,
	options: { value: string, label: string }[]
}

const Selectbox: React.FC<Props> = ({ id, label, options }) => {
	return (
		<div className="mb-4">
			<label htmlFor={id} className="block text-sm font-medium text-gray-700">
				{label}
			</label>
			<select id={id} className="p-2 border border-gray-300 rounded-md bg-white w-full">
				{options.map((option, index) => (
					<option key={index} value={option.value}>{option.label}</option>
				))}
			</select>
		</div>
	)
}

export default Selectbox