type Props = {
	img: string,
	name: string,
	position: string,
	move?: boolean
}

const PersonCard: React.FC<Props> = ({ img, name, position, move }) => {

	return (
		<div
			className={
				`person-card bg-white/50 h-auto pt-10 px-10 shadow-xl relative h-full hover:-top-1 hover:animate-pulse} w-full`
			}
		>
			<div className="w-40 h-40 bg-blue-500 overflow-hidden relative text-center m-auto rounded-full">
				<img src={img} alt={name} className={`h-auto w-full object-cover absolute top-0 left-1/2 transform -translate-x-1/2 ${move ? "scale-[1.1] translate-y-[15px]" : ""}`} />
			</div>
			<div className="p-4 text-center">
				<h3 className="text-xl font-semibold">{name}</h3>
				<p className="text-lg">{position}</p>
			</div>
		</div>
	)
}

export default PersonCard