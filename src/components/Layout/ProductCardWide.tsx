import { Link } from "react-router";

type Props = {
	className?: string;
	title: string;
	description: string | string[];
	image: string;
	link: string;
	invert?: boolean;
}

const ProductCardWide: React.FC<Props> = ({ className, title, description, image, link, invert = false }) => {
	return (
		<Link to={link} className="">
			<div className={`w-full grid grid-cols-1 sm:grid-cols-10 shadow-2xl rounded-xl overflow-hidden relative transform hover:-translate-x-2 transition-transform ${className ?? ""} bg-white`}>
				<div className={`sm:col-span-3 ${invert ? "sm:order-2" : ""}`}>
					<img src={image} alt={title} className="w-full h-full object-cover object-center"/>
				</div>
				<div className={`sm:col-span-7 py-2 px-10 flex flex-col justify-center ${invert ? "order-1" : ""}`}>
					<h3 className="text-xl font-semibold mb-2">{title}</h3>
					<p>
						{
							Array.isArray(description) ?
								description.map((desc, index) => (
									<span key={index} className="block text-gray-600 mb-2">{desc}</span>
								)) :
								<span className="block text-gray-600">{description}</span>
						}
					</p>
				</div>
			</div>
		</Link>
	)
}

export default ProductCardWide