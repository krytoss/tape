type Props = {
	img: string,
	name: string,
	position: string
}

const PersonCard: React.FC<Props> = ({ img, name, position}) => {


	return (
		<div className="person-card bg-white/50 h-auto pt-20 px-10 shadow-xl relative hover:-top-1 hover:animate-pulse">
			<div className="w-full h-40 bg-blue-500 overflow-visible relative text-center">
				<img src={img} className="w-4/5 object-cover absolute bottom-0 left-1/2 transform -translate-x-1/2" />
			</div>
			<div className="p-4 text-center">
				<h3 className="text-xl font-semibold">{name}</h3>
				<p className="text-lg">{position}</p>
			</div>
		</div>
	)
}

export default PersonCard