import { Link } from "react-router";
import Subpage from "../components/subpages/Subpage";
import { useEffect, useState } from "react";
import ImageModal from "../components/ImageModal";

const products = [
    {
        title: "EKO šnúrky",
        description: [
            "Kompostovateľné, recyklované PET a bambusové šnúrky",
            "Šírka 10, 15, 20 a 25mm",
            "V ponuke bez potlače alebo s potlačou",
            "Potlač jednostranná alebo obojstranná",
            <>Rôzne doplnky a zakončenia (viac informácií v kategórii <Link to="/zabava/snurky" className="text-brand hover:underline">Šnúrky na krk</Link>)</>
        ],
        image: [
			"/pages/entertainment/eko/eko_snurky1.webp",
			"/pages/entertainment/eko/eko_snurky2.webp",
			"/pages/entertainment/eko/eko_snurky3.webp",
		]
    },
    {
        title: "EKO látkové náramky",
        description: [
            "Štandardný rozmer 15mm x 350mm",
            "Jednostranná plnofarebná sublimačná potlač",
            "V ponuke drevené patentky na jednorazové alebo opakované použitie",
            "Vyrobené zo 100% recyklovaného polyesteru získaného z recyklovaných fliaš",
            "Pozri aj https://www.pdc-big.com/info/eco-friendly#"
        ],
        image: [
			"/pages/entertainment/eko/eko_naramky1.webp",
			"/pages/entertainment/eko/eko_naramky2.webp",
		]
    },
    {
        title: "EKO karty",
        description: [
            "Štandardný rozmer 85x54 / 54x85 mm, spĺňajúci normu ISO 7810",
            "Jednostranná a obojstranná potlač",
            "Bio PVC, trávový papier, recyklované PVC, eko papier",
            "Množstvo doplnkov ako personalizácia, magnetické pole a iné",
            <>Pre viac informácií nás <Link to="" className="text-brand hover:underline">kontaktujte</Link> alebo nám odošlite správu cez <Link to="" className="text-brand hover:underline">kontaktný formulár</Link></>
        ],
        image: [
			"/pages/entertainment/eko/eko_karty1.webp",
			"/pages/entertainment/eko/eko_karty2.webp",
			"/pages/entertainment/eko/eko_karty3.webp",
		]
    }
];

const Eco: React.FC = () => {

	const [ showPDF, setShowPDF ] = useState(false);
	const handleClickBanner = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		setShowPDF(!showPDF);
	};

	const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    const onResize = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
		<Subpage
			products={products}
			additionalContent={
				<>
					<a
						href="#"
						className="block w-1/3 h-auto m-auto mt-10"
						onClick={handleClickBanner}
					>
						<img
							src="/pages/entertainment/eko/banner.webp"
							alt="EKO banner"
							className="w-full"
						/>
					</a>
					{
						showPDF && (
							<ImageModal
								hideIndex={true}
								currentIndex={0}
								onClose={() => setShowPDF(false)}
								onPrev={() => {}}
								onNext={() => {}}
							>
								<div
									className="flex h-[calc(100vh-5rem)] w-full mt-20 justify-center py-5 px-10"
									onClick={() => setShowPDF(false)}
								>
									<div className="[aspect-ratio:210/325]">
										<iframe
											key={`${size.w}x${size.h}`}
											src="/pages/entertainment/eko/eko.pdf#navpanes=0"
											className="mx-auto max-w-[90vw] h-full border-0 [aspect-ratio:210/325]"
											title="EKO PDF"
											 onClick={(e) => e.stopPropagation()}
										/>
									</div>
								</div>
							</ImageModal>
						)
					}
				</>
			}
		/>
  );
};

export default Eco;