import Grid from "../Layout/Grid";
import Link from "./Link";

const TopMenu: React.FC = () => {

	const links = [
		{
			name: "Domov",
			to: "home"
		},
		{
			name: "Bezpečnosť v zdravotníctve",
			to: "zdravotnictvo"
		},
		{
			name: "Biznis",
			to: "business"
		},
		{
			name: "Zábava",
			to: "zabava"
		},
	]

	return (
		<div className="fixed z-50 top-0 left-0 w-full h-16 text-white flex justify-center items-center h-20 bg-black/30 backdrop-blur-md">
			<Grid cols={2} className="h-full">
				<div className="text-left w-full px-4">
					<img src="./logo.png" alt="Logo" className="h-12 absolute top-1/2 transform -translate-y-1/2" />
				</div>
				<div className="text-right w-full px-4">
					<ul className="h-full">
						{
							links.map((link, index) => (
								<li key={index} className="inline-block mx-4 h-full">
									<Link to={link.to} className="h-full flex justify-center items-center text-xl">
										{link.name}
									</Link>
								</li>
							))
						}
					</ul>
				</div>
			</Grid>
		</div>
	);
}

export default TopMenu;