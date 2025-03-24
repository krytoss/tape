import { Link } from "react-router";

type Props = {
	className?: string;
	title: string;
	description: string;
	image: string;
	link: string;
	invert?: boolean;
}

const ProductCardWide: React.FC<Props> = ({ className, title, description, image, link, invert = false }) => {
	return (
		<Link to={link} className="">
			<div className={`w-full grid grid-cols-10 shadow-2xl rounded-xl overflow-hidden relative transform hover:-translate-x-2 transition-transform ${className ?? ""} bg-white`}>
				<div className={`col-span-3 ${invert ? "order-2" : ""}`}>
					<img src={image} alt={title} className="w-full h-auto object-cover object-center"/>
				</div>
				<div className={`col-span-7 px-10 flex flex-col justify-center ${invert ? "order-1" : ""}`}>
					<h3 className="text-xl font-semibold mb-2">{title}</h3>
					<p>{description}</p>
				</div>
			</div>
		</Link>
	)
}

export default ProductCardWide