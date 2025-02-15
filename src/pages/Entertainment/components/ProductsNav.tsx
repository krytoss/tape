import { AnchorHTMLAttributes, useCallback, useState } from 'react';
import './ProductsNav.css'
import { Link } from 'react-router';

const ProductsNav: React.FC = () => {

	const active = window.location.pathname;

	const products = [
		{
			name: "Plastové karty",
			img: "/pages/entertainment/plastove_karty.png",
			to: "/zabava/plastove-karty"
		},
		{
			name: "Látkové náramky",
			img: "/pages/entertainment/latkove.png",
			to: "/zabava/latkove-naramky"
		},
		{
			name: "Vinylové, plastové a tyvek náramky",
			img: "/pages/entertainment/tyvek.png",
			to: "/zabava/vinylove-naramky"
		},
		{
			name: "Silikónové náramky",
			img: "/pages/entertainment/silikonove.png",
			to: "/zabava/silikonove-naramky"
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
	];

	const [ isOpen, setIsOpen ] = useState<boolean>(false)

	const handleClick = useCallback((event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		event.stopPropagation()
		setIsOpen(!isOpen)
	}, [ isOpen ])


	return (
		<div className="w-full overflow-x-auto scrollbar-hide bg-white shadow-xl">
			<div className={`flex ${isOpen ? "h-auto" : "h-14"} sm:h-auto flex-col sm:flex-row whitespace-nowrap relative`}>
				<a
					href="#"
					onClick={handleClick}
					className="absolute right-10 h-10 top-2 z-40 flex flex-col item-center justify-center space-y-1 sm:hidden bg-gray-600 bg-opacity-60 px-2 rounded-lg border-2 border-gray-500 hover:bg-gray-500 hover:bg-opacity-60"
				>
					<span className={`block w-8 h-1 bg-white transition-all duration-300 top-0 relative ${isOpen && "transform top-2 rotate-45"}`} />
					<span className={`block w-8 h-1 bg-white transition-all duration-300 ${isOpen && "opacity-0"}`} />
					<span className={`block w-8 h-1 bg-white transition-all duration-300 top-0 relative ${isOpen && "transform -top-2 -rotate-45"}`} />
				</a>
				{
					products.sort((item) => item.to === active ? -1 : 1).map((product, index) => (
						<div className={`
							product-link-wrapper
							min-w-[100vw] w-[100vw]
							sm:min-w-[33.33vw] sm:w-[33.33vw]
							lg:min-w-[25vw] lg:w-[25vw]
							2xl:min-w-[20vw] xl:w-[20vw]
							h-14 sm:h-40 px-5
							flex flex-col
							items-center justify-center
							overflow-visible
							${active === product.to ? 'bg-brand sm:bg-transparent' : ''}
						`}>
							<Link
								to={product.to}
								key={index}
								className={`
									product-link
									w-full h-14 sm:h-40 overflow-hidden
									flex flex-row sm:flex-col
									items-center justify-start sm:justify-end
									text-center rounded-lg
									whitespace-normal
									group
									relative
									hover:text-white sm:hover:text-slate-800
									${active === product.to ? 'active text-white sm:text-slate-800' : ''}
								`}
							>
								<img
									src={product.img}
									alt={product.name}
									className={`
										object-cover object-top
										product-img
										h-full
										mt-4 sm:mt-0
										sm:absolute sm:top-0 sm:bottom-0
										sm:left-1/2 sm:-translate-x-1/2 sm:group-hover:scale-[1.15]
										${active === product.to && 'sm:scale-[1.15]'}
									`}
								/>
								<span
									className={`
										font-semibold relative z-30 mb-1 sm:transition-all sm:duration-300
										${
											(active === product.to) ?
												'sm:border-b-2 border-brand'
												: 'sm:group-hover:opacity-0'
										}
									`}
								>
									{product.name}
								</span>
							</Link>
						</div>
					))
				}
			</div>
		</div>
	);
  };
  
  export default ProductsNav;