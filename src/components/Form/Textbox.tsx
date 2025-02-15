type Props = {
	label?: string,
	value: string,
	onChange: (value: string) => void
}

const Textbox: React.FC<Props> = ({ label, value, onChange }) => {
	
	const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		onChange(event.target.value)
	}

	return (
		<div className="flex flex-col mb-4">
			{
				label && (
					<label className="text-sm text-gray-600">
						{label}
					</label>
				)
			}
			<textarea
				className={`
					px-4 py-2
					border border-gray-300
					rounded-md
					focus:outline-none focus:ring focus:ring-blue-500
					bg-white
					w-full
				`}
				value={value}
				onChange={handleChange}
				rows={5}
			/>
		</div>
	)
}

export default Textbox