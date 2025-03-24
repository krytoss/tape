import { Link } from "react-router";
import Cover from "../../../components/Layout/Cover";

type Props = {
	className?: string;
	title: string;
	description: string;
	image: string;
	link?: string;
}

const ProductCard: React.FC<Props> = ({ className, title, description, image, link }) => {
	return (
		/*
		<div className={`w-full grid grid-cols-10 shadow-2xl rounded-xl overflow-hidden relative transform hover:-translate-x-2 transition-transform ${className ?? ""}`}>
			<div className={`col-span-2 ${invert ? "order-2" : ""}`}>
				<img src={image} alt={title} className="w-full h-auto object-cover object-center"/>
			</div>
			<div className={`col-span-8 pl-10 flex flex-col justify-center ${invert ? "order-1" : ""}`}>
				<h3 className="text-xl font-semibold mb-2">{title}</h3>
				<p>{description}</p>
			</div>
		</div>
		*/
		<div className={`card relative group h-full overflow-hidden ${className ?? ""}`}>
			{
				link && (
					<Link to={link} className="absolute z-50 top-0 left-0 right-0 bottom-0" />
				)
			}
			<Cover className="h-full opacity-0 group-hover:opacity-90 z-40 transition-all duration-[900ms]" />
			<div className="card-image">
				<img src={image} alt={title} className="w-full h-full object-cover transform opacity-80 group-hover:opacity-100 group-hover:scale-125 duration-[900ms]"/>
			</div>
			<div className={`
				card-content
				text-center p-4
				bg-brand text-white shadow-md
				absolute z-40
				left-1 right-1 xl:bottom-1
				bottom-0
				transition-all duration-300
				group-hover:block
			`}>
				<h3 className="text-xl font-semibold">{title}</h3>
				<p className="transition-all duration-[700ms] h-0 overflow-hidden group-hover:h-40 xl:group-hover:h-60 text-xs xl:text-sm flex flex-col justify-center items-center align-middle">{description}</p>
			</div>
		</div>
	)
}

export default ProductCard