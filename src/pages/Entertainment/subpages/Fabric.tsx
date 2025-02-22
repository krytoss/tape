import { useEffect, useRef } from "react";
import Section from "../../../components/Layout/Section"
import ProductsNav from "../components/ProductsNav"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Grid from "../../../components/Layout/Grid";
import Product from "../components/subpages/Product";

gsap.registerPlugin(ScrollTrigger);

const products = [
	{
		title: "Vyšívané náramky",
		description: [
			"Štandardný rozmer 15mm x 350mm",
			"Možnosť použiť 7 farieb nití",
			"Jednorazové alebo opakované použitie"
		],
		image: "/pages/entertainment/latkove_naramky/vysivany.jpg"
	},
	{
		title: "Saténové náramky",
		description: [
			"Štandardný rozmer 15mm x 350mm",
			"Dve prevedenia materiálu (tenší a hrubší satén)",
			"Jednostranná aj obojstranná potlač"
		],
		image: "/pages/entertainment/latkove_naramky/saten.jpg"
	},
	{
		title: "RFID náramky s čipom",
		description: [
			"Čip/tag vhodný na všetky prevedenia látkových náramkov",
			"Viac typov čipov",
			"Rôzne materiály a veľkosti",
			"Viac informácií v kategórii RFID (preklik na podstránku RFID)"
		],
		image: "/pages/entertainment/latkove_naramky/rfid.jpg"
	},
	{
		title: "Látkové náramky s QR kódom",
		description: [
			"Možnosť potlače QR kódu priamo na náramok alebo na plastový tag",
			"Čip/tag s potlačou QR kódu vhodný na všetky prevedenia látkových náramkov",
			"Rôzne prevedenia QR a čiarových kódov",
			"Viac informácií v kategórii Čiarový/QR kód (preklik na podstránku Čiarový/QR kód)"
		],
		image: "/pages/entertainment/latkove_naramky/qr.jpg"
	},
	{
		title: "Ekologické náramky",
		description: [
			"Štandardný rozmer 15mm x 350mm",
			"Jednorazové alebo opakované použitie",
			"Viac informácií v kategórii EKO PRODUKTY (preklik na podstránku EKO PRODUKTY)"
		],
		image: "/pages/entertainment/latkove_naramky/eko.jpg"
	}
];

const Fabric: React.FC = () => {

	const sectionsRef = useRef<HTMLDivElement[]>([]);
  
	useEffect(() => {
		sectionsRef.current.forEach((section, index) => {
		  gsap.fromTo(
			section,
			{ opacity: 0, x: index % 2 === 0 ? -200 : 200 },
			{
			  opacity: 1,
			  x: 0,
			  y: 0,
			  duration: 1,
			  ease: "power2.out",
			  scrollTrigger: {
				trigger: section,
				start: "top 90%",
				toggleActions: "play none none reverse"
			  }
			}
		  );
		});
	  }, []);


	return (
		<>
			<ProductsNav />
			<div className="relative w-full lg:w-4/5 m-auto h-full py-10 flex-1">
				<p className="text-xl font-semibold p-10 text-center block">
					V ponuke silikóny fosforeskujúce, segmentované, silikónová kľúčenka, silikónové hodinky, náramok s potlačou QR kódu, náramok s číslovaním, atypický náramok, náramok s viacfarebnou potlačou.
				</p>
				<Grid cols={1} colsMd={2} colsLg={3} className="gap-10 px-6 flex-1">
					{products.map((product, index) => (
						<Product title={product.title} description={product.description} image={product.image} />
					))}
				</Grid>
			</div>
		</>
	)
}

export default Fabric