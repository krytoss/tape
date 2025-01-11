type Props = {
	children: React.ReactNode
}

const Title: React.FC<Props> = ({ children }) => {
	return (
		<h3 className="text-8xl uppercase text-white font-semibold">
			{ children }
		</h3>
	)
}

export default Title