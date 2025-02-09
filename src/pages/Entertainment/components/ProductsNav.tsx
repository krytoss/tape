import './ProductsNav.css'

const ProductsNav: React.FC = () => {

	const products = [
		{
			name: "Plastové karty",
			img: "/pages/entertainment/plastove_karty.png",
			to: "/zabava/plastove_karty"
		},
		{
			name: "Látkové náramky",
			img: "/pages/entertainment/latkove.png",
			to: "/zabava/latkove_naramky"
		},
		{
			name: "Vinylové, plastové a tyvek náramky",
			img: "/pages/entertainment/tyvek.png",
			to: "/zabava/vinylove_naramky"
		},
		{
			name: "Silikónové náramky",
			img: "/pages/entertainment/silikonove.png",
			to: "/zabava/silikonove_naramky"
		},
		{
			name: "Šnúrky na krk",
			img: "/pages/entertainment/snurky.png",
			to: "/zabava/snurky"
		},
		{
			name: "Puzdrá, menovky, rolery",
			img: "/pages/entertainment/puzdra.png",
			to: "/zabava/menovky"
		},
		{
			name: "RFID",
			img: "/pages/entertainment/rfid.png",
			to: "/zabava/rfid"
		},
		{
			name: "EKO produkty",
			img: "/pages/entertainment/eko.png",
			to: "/zabava/eko-produkty"
		},
		{
			name: "Tlačiarne",
			img: "/pages/entertainment/tlaciarne.png",
			to: "/zabava/tlaciarne"
		}
	]

	return (
		<div className="w-full overflow-x-auto scrollbar-hide bg-white">
			<div className="flex flex-row whitespace-nowrap">
				{
					products.map((product, index) => (
						<div className="min-w-[20vw] w-[20vw] h-60 px-20 flex flex-col items-center justify-center">
							<a
								href={product.to}
								key={index}
								className={`
									w-full overflow-hidden
									flex flex-col
									items-center justify-center
									text-brand text-center rounded-lg
									whitespace-normal
									group
									product-link
								`}
							>
								<img
									src={product.img}
									alt={product.name}
									className={`
										w-40 object-cover object-top h-40
										product-img
									`}
								/>
								<span
									className="text-lg font-semibold"
								>
									{product.name}
								</span>
							</a>
						</div>
					))
				}
			</div>
		</div>
	);
  };
  
  export default ProductsNav;