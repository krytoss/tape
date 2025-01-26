type Props = {
	img?: string;
	className?: string;
	children: React.ReactNode;
}

const Header: React.FC<Props> = ({ img, children, className }) => {

	return (
		<header className={`w-screen relative ${className ?? ""}`}>
			{
				img && (
					<img src={img} alt="Header" className="w-full h-full object-cover" />
				)
			}
			{children}
		</header>
	);
}

export default Header;