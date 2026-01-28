import Breadcrumbs from "../Navigation/Breadcrumbs";

type Props = {
	img?: string;
	className?: string;
	children: React.ReactNode;
	hideBreadcrumbs?: boolean;
  customClasses?: string;
}

const Header: React.FC<Props> = ({ img, children, className, hideBreadcrumbs, customClasses }) => {

	return (
		<>
			<header className={`w-screen relative bg-white ${className ?? ""}`}>
				{
					img && (
						<img src={img} alt="Header" className={`h-full object-cover mx-auto ${customClasses ? customClasses : "w-full"}`} />
					)
				}
				{children}
			</header>
			{!hideBreadcrumbs && <Breadcrumbs />}
		</>
	);
}

export default Header;