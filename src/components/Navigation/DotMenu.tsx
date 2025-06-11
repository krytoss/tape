import { useActiveSection } from "../../hooks/useActiveSection";

const DotMenu: React.FC = () => {

	const menuLinks: Record<string, string> = {
		"home": "Home",
		"offers": "Ponuka",
		"about": "O nás",
		"team": "Team",
		/* "health": "Bezpečnosť v zdravotníctve",
		"entertainment": "Zábava",
		"business": "Biznis", */
		"contact": "Kontakt",
	}

	const scrollToId = (id: string) => {
		const el = document.getElementById(id);
		if (el) {
			el.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	const sectionIds = Object.keys(menuLinks);
	const activeSection = useActiveSection(sectionIds);

	return (
		<ul id="menu" className={`
			fixed right-0 top-1/2 transform -translate-y-1/2 z-50
		`}>
			{Object.keys(menuLinks).map((key: string, index: number) => (
				<li
					key={index}
					className={`
						text-slate-700 text-2xl text-right
						relative
						rounded-sm mr-0
						my-0
						whitespace-nowrap
					`}
				>
					<a
						onClick={() => scrollToId(key)}
						className={
							`block py-2 uppercase text-slate-700 text-right lg:mr-10 sm:mr-2 mr-1 inline-flex group relative cursor-pointer
							${activeSection === key ? "font-bold" : ""}`
						}
					>
						<span
							className={
								`absolute ${activeSection === key ? "" : "hidden"} group-hover:inline-block text-xs leading-5 right-10 top-1/2 transform -translate-y-1/2`
							}
						>
							{menuLinks[key]}
						</span>
						<div className={`
							w-5 h-5 inline-block
							rounded-full p-1
							border-2 border-transparent
							${activeSection === key ? "border-slate-700" : "group-hover:border-slate-700"}
							ml-3
						`}>
							<div className="w-full h-full block bg-slate-700 rounded-full" />
						</div>
					</a>
				</li>
			))}
		</ul>
	)
}

export default DotMenu;