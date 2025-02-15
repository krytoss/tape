type Props = {
	onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void,
	children: React.ReactNode,
	className?: string
}

const Form: React.FC<Props> = ({ onSubmit, children, className }) => {

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		if (onSubmit) {
			event.preventDefault()
			onSubmit(event)
		}
	}

	return (
		<form onSubmit={handleSubmit} className={className}>
			{ children }
		</form>
	)

}

export default Form