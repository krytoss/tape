import Subpage from "../components/subpages/Subpage";

const products = [
  {
    category: "Puzdrá tvrdé",
    items: [
      {
        title: "Klasické puzdro na kartu (najpredávanejšie)",
        description: [
          "Vonkajší rozmer: 91x56mm",
          "Vnútorný rozmer: 85x54mm",
          "Farba: číra",
          "Orientácia: horizontálna, vertikálna",
          "Materiál: polypropylén"
        ],
        image: [
			"/pages/entertainment/puzdra/klasicke1.png",
			"/pages/entertainment/puzdra/klasicke2.png",
		]
      },
      {
        title: "Pevné puzdro na 1-2 karty",
        description: [
          "Vonkajší rozmer: 92x62mm",
          "Vnútorný rozmer: 86x54mm",
          "Farba: priehľadná",
          "Puzdro vhodné na 1 alebo 2 karty",
          "Materiál: polykarbonát"
        ],
        image: [
			"/pages/entertainment/puzdra/pevne1.png",
			"/pages/entertainment/puzdra/pevne2.png",
		]
      },
      {
        title: "Otvorené puzdro na kartu",
        description: [
          "Vonkajší rozmer: 90x68mm",
          "Vnútorný rozmer: 86x54mm",
          "Farby: biela, čierna, modrá, zelená, červená, žltá",
          "S koľajničkami pre bezpečné uchytenie karty",
          "Materiál: ABS"
        ],
        image: [
			"/pages/entertainment/puzdra/otvorene1.png",
			"/pages/entertainment/puzdra/otvorene2.png",
			"/pages/entertainment/puzdra/otvorene3.png",
			"/pages/entertainment/puzdra/otvorene4.png",
		]
      },
      {
        title: "Premiové puzdro s otvorom",
        description: [
          "Conkajší rozmer: 90x58mm",
          "Vnútorný rozmer: 86x54mm",
          "Puzdro na jednu kartu",
          "Farba: matná, čierna",
          "Otvor na palec",
		  "Materiál: polykarbonát"
        ],
        image: "/pages/entertainment/puzdra/puzdro_premium.png"
      },
      {
        title: "Pevné puzdro na 1-5 kariet",
        description: [
          "Vonkajší rozmer: 90x68mm",
          "Vnútorný rozmer: 86x54mm",
          "Farby: biela, čierna, modrá, zelená, červená, žltá",
          "S koľajničkami pre bezpečné uchytenie karty",
          "Materiál: ABS"
        ],
        image: "/pages/entertainment/puzdra/pevne_1-5.png"
      }
    ]
  },
  {
    category: "Puzdrá mäkké",
    items: [
      {
        title: "Vinylové puzdro farebné",
        description: [
          "Vnútorný rozmer: 59x86mm, 89x57mm, 99x68mm, 116x93mm",
          "4 veľkosti v ponuke, 3x horizontálne, 1x vertikálne",
          "Farby: priehľadná, čierna, modrá, zelená, oranžová, červená, biela, žltá",
          "Materiál: vinyl"
        ],
        image: [
			"/pages/entertainment/puzdra/vinyl_farebne1.png",
			"/pages/entertainment/puzdra/vinyl_farebne2.png",
			"/pages/entertainment/puzdra/vinyl_farebne3.png",
			"/pages/entertainment/puzdra/vinyl_farebne4.png",
		]
      },
      {
        title: "Vinylové puzdro A6",
        description: [
          "Vonkajší rozmer: 112x172mm",
          "Vnútorný rozmer: 107x152mm",
          "Vhodné pre formát A6",
          "Orientácia: vertikálna s 3 otvormi na zavesenie",
          "Materiál: vinyl"
        ],
        image: [
			"/pages/entertainment/puzdra/vinyl_a6_1.png",
			"/pages/entertainment/puzdra/vinyl_a6_2.png"
		]
      },
      {
        title: "Vinylové puzdro s uzatvárateľným ZIP systémom",
        description: [
          "Vonkajší rozmer: 76x126mm",
          "Vnútorný rozmer: 66x99mm",
          "Chráni pred nečistotami a vlhkosťou",
          "Ideálne pre použitie vo vonkajšom alebo priemyselnom prostredí",
		  "Farba: priehľadná",
          "Materiál: vinyl"
        ],
        image: [
			"/pages/entertainment/puzdra/vinyl_zip.png",
			"/pages/entertainment/puzdra/vinyl_zip2.png"
		]
      }
    ]
  },
  {
    category: "Rolery",
    items: [
      {
        title: "Roler KLASIK",
        description: [
          "Roler s priehľadným vinylovým remienkom a nylonovým lankom",
          "So sponou na uchytenie",
          "Farby: čierna, tmavá šedá, oranžová, červená, modrá, biela"
        ],
        image: "/pages/entertainment/puzdra/roler_klasik.png"
      },
      {
        title: "Roler s otočným štipcom",
        description: [
          "Jednofarebný s priehľadným remienkom",
          "Štipec na uchytenie otočný o 360°",
          "Jednoduchšie uchytenie kdekoľvek na oblečení",
          "Farby: čierna, modrá, červená, biela, priehľadná"
        ],
        image: "/pages/entertainment/puzdra/roler_otocny.png"
      },
	  {
        title: "Roler PREMIUM",
        description: [
          "Roler s karabínou a chrómovým vonkajším rámom",
          "Priehľadný vinylový remienok",
          "Farby: priehľadná, čierna, priehľadná modrá, priehľadná červená, priehľadná žltá",
          "Kvalitné a pevné prevedenie",
          "Roler bez magnetizujúcich prvkov",
          "Vhodný aj pre použitie v špecifických podmienkach"
        ],
        image: "/pages/entertainment/puzdra/roler_premium.png"
      },
      {
        title: "Roler s 2 úchytmi",
        description: [
          "Roler s chrómovou karabínou a so sponou na zadnej strane",
          "Zabezpečuje fixovanie polohy ID karty",
          "Obsahuje háčik na zavesenie",
          "Háčikový systém pre aretáciu polohy - vaše ID zostane otočené dopredu",
          "Farby: červená, čierna, priehľadná modrá, priehľadná červená"
        ],
        image: [
			"/pages/entertainment/puzdra/roler_2_uchyty.png",
			"/pages/entertainment/puzdra/roler_2_uchyty_2.png"
		]
      },
      {
        title: "Štýlový roler na kľúče",
        description: [
          "Odolný s predným plastovým krytom a zadným chrómovým puzdrom",
          "Návin je z odolnej retiazky a obsahuje krúžok na kľúče",
          "Na zadnej strane je robustná spona na uchytenie",
          "Farba: čierna"
        ],
        image: "/pages/entertainment/puzdra/roler_na_kluce.png"
      }
    ]
  },
  {
    category: "Menovky",
    items: [
      {
        title: "Menovka/Visačka s klipom",
        description: [
          "Vnútorný rozmer: 90x57mm",
          "Farba: priehľadná",
          "Orientácia: horizontálna",
          "Na zadnej strane s otvorom na palec",
          "Materiál: pružný PVC"
        ],
        image: [
			"/pages/entertainment/puzdra/visacka1.png",
			"/pages/entertainment/puzdra/visacka2.png",
		]
      }
    ]
  }
];

const Cases: React.FC = () => {

  return (
	<Subpage
		description="V ponuke nájdete široký výber puzdier, rolerov a menoviek. Ak potrebujete kompletný katalóg, kontaktujte nás cez formulár"
		products={products}
		withCategories={true}
	/>
  );
};

export default Cases;