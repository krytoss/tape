import { useEffect, useRef } from "react";
import Section from "../../../components/Layout/Section"
import ProductsNav from "../components/ProductsNav"
import Product from "../components/subpages/Product";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Grid from "../../../components/Layout/Grid";

gsap.registerPlugin(ScrollTrigger);

const products = [
	{
	  title: "Silikónové náramky s potlačou",
	  description: [
		"Šírka náramku 12, 20 a 25mm",
		"Obvod náramku 16, 18, 20 a 21cm",
		"Možnosť jednofarebnej aj viacfarebnej potlače",
		"Farebnosť náramkov podľa pantone vzorkovníka"
	  ],
	  image: "/pages/entertainment/silikonove_naramky/potlac.png"
	},
	{
	  title: "Silikónové náramky s ražbou",
	  description: [
		"Šírka náramku 12, 20 a 25mm",
		"Obvod náramku 16, 18, 20 a 21cm",
		"Ražba emboss (vonkajšia) alebo deboss (vnútorná)",
		"Možnosť kombinácie ražby s výplňou farby",
		"Farebnosť náramkov podľa pantone vzorkovníka"
	  ],
	  image: "/pages/entertainment/silikonove_naramky/razba.png"
	},
	{
	  title: "Silikónové náramky s RFID čipom",
	  description: [
		"Rôzne šírky a obvody",
		"Možnosť potlače a ražby",
		"Tvar oválny alebo guľatý",
		"Farebnosť podľa pantone vzorkovníka",
		"Veľké množstvo čipov (MF, FUDAN, EM4200, TK4100 a iné)",
	  ],
	  image: "/pages/entertainment/silikonove_naramky/rfid.png"
	}
  ];

const Silicones: React.FC = () => {

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
						/* <section
							key={index}
							ref={(el) => (sectionsRef.current[index] = el!)}
							className={`w-full flex flex-col md:flex-row items-center justify-between py-12 px-6 md:px-20 gap-10
								${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
						>
							<div className="w-full md:w-1/2">
								<img
								src={product.image}
								alt={product.title}
								className="w-full h-auto rounded-lg shadow-lg"
								/>
							</div>

							<div className="w-full md:w-1/2">
								<h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
								<ul className="mt-4 text-gray-700 space-y-2">
								{product.description.map((line, i) => (
									<li key={i} className="text-lg">• {line}</li>
								))}
								</ul>
							</div>
						</section>
						*/
						<Product title={product.title} description={product.description} image={product.image} />
					))}
				</Grid>
			</div>
		</>
	)
}

export default Silicones