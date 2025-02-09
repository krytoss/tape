import { useLocation } from "react-router";
import Link from "./Link";

const TopMenu: React.FC = () => {

	const location = useLocation()

	const links = [
		{
			name: "Domov",
			to: "/"
		},
		{
			name: "Bezpečnosť v zdravotníctve",
			to: "/zdravotnictvo"
		},
		{
			name: "Biznis",
			to: "/business"
		},
		{
			name: "Zábava",
			to: "/zabava"
		},
	]

	return (
		<div className="fixed z-50 top-0 left-0 w-full h-16 text-white flex justify-center items-center h-20 bg-black/30 backdrop-blur-md">
			<img src="/logo.png" alt="Logo" className="h-24 absolute left-6 top-4" />
			<div className="text-right w-full px-4">
				<ul className="h-full">
					{
						links.map((link, index) => {
							const isActive = location.pathname === link.to;
							return (
								<li key={index} className="inline-block mx-4 h-full">
									<Link to={link.to} className={`
										h-full flex justify-center items-center text-xl border-b-2 border-transparent
										${isActive && "border-brand"}
									`}>
										{link.name}
									</Link>
								</li>
							)
						})
					}
				</ul>
			</div>
		</div>
	);
}

export default TopMenu;