import Grid from "../Layout/Grid";

const TopMenu: React.FC = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-16 bg-gray-800 text-white flex justify-center items-center">
			<Grid cols={2} className="h-full">
				<div className="text-left w-full">
					<img src="./logo.png" alt="Logo" className="h-12" />
				</div>
				<div className="text-right w-full">

				</div>
			</Grid>
		</div>
	);
}

export default TopMenu;