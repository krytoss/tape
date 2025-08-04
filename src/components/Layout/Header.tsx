import Breadcrumbs from "../Navigation/Breadcrumbs";

type Props = {
	img?: string;
	className?: string;
	children: React.ReactNode;
	hideBreadcrumbs?: boolean;
}

const Header: React.FC<Props> = ({ img, children, className, hideBreadcrumbs }) => {

	return (
		<>
			<header className={`w-screen relative ${className ?? ""}`}>
				{
					img && (
						<img src={img} alt="Header" className="w-full h-full object-cover" />
					)
				}
				{children}
			</header>
			{!hideBreadcrumbs && <Breadcrumbs />}
		</>
	);
}

export default Header;