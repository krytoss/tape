const ArrowDown: React.FC = () => {
	return (
		<div className="w-6 h-6 absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
			<div
				className={`
					absolute rotate-45
					w-6 h-6
					border-b-2 border-r-2
					inline-block
				`}
			>
			</div>
		</div>
	)
}

export default ArrowDown