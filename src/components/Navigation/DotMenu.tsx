const DotMenu: React.FC = () => {

	const menuLinks: Record<string, string> = {
		"home": "Home",
		"about": "O nás",
		"team": "Team",
		"health": "Bezpečnosť v zdravotníctve",
		"entertainment": "Zábava",
		"business": "Biznis",
		"contact": "Kontakt",
	}

	return (
		<ul id="menu" className={`
			fixed right-0 top-1/2 transform -translate-y-1/2
		`}>

			{/* Object.keys(menuLinks).map((key: string, index: number) => (
				<li
					key={index}
					className={`
						text-white text-2xl text-right
						relative
						bg-gradient-to-r from-white/0 to-white/5 hover:to-white/20
						rounded-sm mr-0
						w-[20vw]
						my-2
					`}
				>
					<a href="#" className="block py-2 text-white uppercase text-right pr-10 hover:pr-16">
						<span>
							{menuLinks[key]}
						</span>
					</a>
				</li>
			)) */}
			{Object.keys(menuLinks).map((key: string, index: number) => (
				<li
					key={index}
					className={`
						text-white text-2xl text-right
						relative
						rounded-sm mr-0
						my-0
						whitespace-nowrap
					`}
				>
					<a href="#" className="block py-2 text-white uppercase text-right mr-10 inline-flex group relative">
						<span className="absolute hidden group-hover:inline-block text-xs leading-5 right-10 top-1/2 transform -translate-y-1/2">
							{menuLinks[key]}
						</span>
						<div className={`
							w-5 h-5 inline-block
							rounded-full p-1
							border-2 border-transparent group-hover:border-white
							ml-3
						`}>
							<div className="w-full h-full block bg-white rounded-full" />
						</div>
					</a>
				</li>
			))}
		</ul>
	)
}

export default DotMenu;