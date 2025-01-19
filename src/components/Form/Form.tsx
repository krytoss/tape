type Props = {
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void,
	children: React.ReactNode,
}

const Form: React.FC<Props> = ({ onSubmit, children }) => {

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		if (onSubmit) {
			event.preventDefault()
			onSubmit(event)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			{ children }
		</form>
	)

}

export default Form