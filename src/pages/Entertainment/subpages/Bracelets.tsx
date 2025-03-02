import Subpage from "../components/subpages/Subpage";

const products = [
    {
        title: "Tyvek náramky",
        description: [
            "vodoodolné samolepiace náramky na jednorazové použitie",
            "dostupné v dvoch šírkach: 19mm a 25mm",
            "možnosť jednofarebnej alebo plnofarebnej potlače",
            "rozmer potlače Tyvek 19: 1,4cm x 12cm",
            "rozmer potlače Tyvek 25: 1,9cm x 12cm",
            "vhodné na 1-2 dni",
            "viac ako 20 farieb v ponuke",
            "minimálny odber z farby je od 1000ks"
        ],
        image: [
			"/pages/entertainment/naramky/tyvek1.png",
			"/pages/entertainment/naramky/tyvek2.png"
		]
    },
    {
        title: "Plastové náramky",
        description: [
            "vodoodolné náramky s plastovým uzáverom na jednorazové použitie",
            "v ponuke 460 Superband (šírka 1,3cm) a 470 Superband (šírka 2,5cm)",
            "možnosť jednofarebnej alebo plnofarebnej potlače",
            "rozmer potlače: 470 Superband: 5,7cm x 1,9cm",
            "rozmer potlače: 460 Superband: 7 cm x 0,8 cm",
            "vhodné na viac dní",
            "24 farieb v ponuke",
            "minimálny odber z farby je od 500ks"
        ],
        image: [
			"/pages/entertainment/naramky/plastovy_naramok1.png",
			"/pages/entertainment/naramky/plastovy_naramok2.jpg",
			"/pages/entertainment/naramky/plastovy_naramok3.jpg",
			"/pages/entertainment/naramky/plastovy_naramok4.jpg",
			"/pages/entertainment/naramky/plastovy_naramok5.png",
			"/pages/entertainment/naramky/plastovy_naramok_sb1.jpg",
			"/pages/entertainment/naramky/plastovy_naramok_sb2.jpg",
			"/pages/entertainment/naramky/plastovy_naramok_sb3.jpg",
			"/pages/entertainment/naramky/plastovy_naramok_sb4.jpg",
			"/pages/entertainment/naramky/plastovy_naramok_sb5.png",
		]
    },
    {
        title: "Vinylové náramky",
        description: [
            "vodoodolné náramky s plastovým uzáverom na jednorazové použitie",
            "v ponuke náramky 430 Vinyl (šírka 1,3cm) a 420 Vinyl (šírka 2,5cm)",
            "možnosť jednofarebnej alebo plnofarebnej potlače",
            "rozmer potlače pri type 420 Vinyl: 6,3cm x 1,9cm",
            "rozmer potlače pri type 430 Vinyl: 9 cm x 0,8 cm",
            "vhodné na viac dní",
            "21 farieb v ponuke",
            "minimálny odber z farby je od 500ks"
        ],
        image: [
			"/pages/entertainment/naramky/vinylovy_naramok1.png",
			"/pages/entertainment/naramky/vinylovy_naramok2.jpg",
			"/pages/entertainment/naramky/vinylovy_naramok3.jpg",
			"/pages/entertainment/naramky/vinylovy_naramok4.jpg",
			"/pages/entertainment/naramky/vinylovy_naramok5.jpg",
		]
    },
    {
        title: "Trblietavé náramky",
        description: [
            "trblietavé vodoodolné náramky s plastovým uzáverom na jednorazové použitie",
            "šírka náramku 1,9cm",
            "možnosť jednofarebnej potlače",
            "rozmer potlače: 8,2cm x 1,3cm",
            "rôzne motívy: stars, rain, liquid glitter",
            "rôzne farby: strieborná, čierna, červená, žltá, ružová, zelená, modrá, zlatá, vínová, fialová, oranžová, tyrkysová",
            "minimálny odber z farby je od 500ks"
        ],
        image: [
			"/pages/entertainment/naramky/trblietavy_naramok1.jpg",
			"/pages/entertainment/naramky/trblietavy_naramok2.jpg",
			"/pages/entertainment/naramky/trblietavy_naramok3.jpg",
			"/pages/entertainment/naramky/trblietavy_naramok4.jpg",
			"/pages/entertainment/naramky/trblietavy_naramok5.png",
			"/pages/entertainment/naramky/trblietavy_naramok6.jpg",
			"/pages/entertainment/naramky/trblietavy_naramok7.jpg",
			"/pages/entertainment/naramky/trblietavy_naramok8.png",
		]
    },
    {
        title: "Kupónové náramky",
        description: [
            "vinylové náramky s plastovým uzáverom na jednorazové použitie, vodoodolné",
            "šírka náramku 1,9cm (bez kupónu)",
            "prevedenie s 3-kupónmi alebo 5-kupónmi",
            "možnosť jednofarebnej potlače na náramok aj kupón",
            "rozmer potlače na náramok: 8cm x 1,2cm",
            "rozmer potlače na 3-kupón: 2,2cm x 1,5cm; 5-kupón: 1,2cm x 1,2cm",
            "farby v ponuke: modrá, zelená, žltá, červená, oranžová, ružová",
            "minimálny odber z farby je od 500ks",
            "termín dodania: 3-kupónové (2-3 týždne), 5-kupónové (6-8 týždňov)"
        ],
        image: [
			"/pages/entertainment/naramky/kuponovy_naramok1.png",
			"/pages/entertainment/naramky/kuponovy_naramok2.jpg",
		]
    }
];

const Bracelets: React.FC = () => {

	return (
		<Subpage
			description={
				<>
					Jednorazové samolepiace Tyvek náramky sú najpredávanejšie a najpoužívanejšie náramky na ruku, ideálne na potlač. Najčastejšie sa využívajú v zábavnom priemysle, na festivaloch a rôznych akciách pre označenie účastníkov, personálu alebo VIP hostí. Vďaka vodoodolnosti sú vhodné aj na kúpaliská a do aquaparkov.
					<p className="mt-6">
						Ak hľadáte pevnejšie náramky na viac dní, plastové alebo vinylové náramky sú ideálnou voľbou. Ponúkame rôzne prevedenia, motívy, rozmery a farby.
					</p>
				</>
			}
			products={products}
		/>
	)
}

export default Bracelets