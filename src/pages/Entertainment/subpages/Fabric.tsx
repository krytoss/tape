import { useEffect, useRef } from "react";
import Section from "../../../components/Layout/Section"
import ProductsNav from "../components/ProductsNav"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
			<Section fullHeight={true} className="overflow-visible">
				<ProductsNav />
				<div className="relative w-full bg-gray-100 py-10">
					<p className="text-xl font-semibold p-10 text-center block">
						V ponuke silikóny fosforeskujúce, segmentované, silikónová kľúčenka, silikónové hodinky, náramok s potlačou QR kódu, náramok s číslovaním, atypický náramok, náramok s viacfarebnou potlačou.
					</p>
					{products.map((product, index) => (
						<section
						key={index}
						ref={(el) => (sectionsRef.current[index] = el!)}
						className={`w-full flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-20 gap-10
							${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
						>
						{/* Obrázok */}
						<div className="w-full md:w-1/2">
							<img
							src={product.image}
							alt={product.title}
							className="w-full h-auto rounded-lg shadow-lg"
							/>
						</div>

						{/* Obsah */}
						<div className="w-full md:w-1/2">
							<h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
							<ul className="mt-4 text-gray-700 space-y-2">
							{product.description.map((line, i) => (
								<li key={i} className="text-lg">• {line}</li>
							))}
							</ul>
						</div>
						</section>
					))}
				</div>
			</Section>
		</>
	)
}

export default Fabric