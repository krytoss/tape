import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ProductsNav from "../ProductsNav";
import Grid from "../../../../components/Layout/Grid";
import Product from "./Product";
import Breadcrumbs from "../../../../components/Navigation/Breadcrumbs";

type BasicProps = {
	description?: string | React.ReactNode;
	cols?: {
		default: number;
		md: number;
		xl: number;
	}
	options?: ProductItem;
	additionalContent?: React.ReactNode;
}

type ProductItem = {
	title: string;
	short_description?: string;
	description?: (string | React.ReactNode)[];
	image: string | string[];
	colSpan?: number;
	onlyImage?: boolean;
};
  
type ProductGroup = {
	withCategories: true;
	products: {
	  category: string;
	  items: ProductItem[];
	}[];
};
  
type ProductFlatList = {
	withCategories?: false;
	products: ProductItem[];
};
  
type ProductsProps = BasicProps & (ProductGroup | ProductFlatList);

const Subpage: React.FC<ProductsProps> = (props) => {

	const { description, cols, options, additionalContent } = props;
	const withCategories = props.withCategories;

	const sectionsRef = useRef<HTMLDivElement[]>([]);
	const [maxHeight, setMaxHeight] = useState(0);

	const updateMaxHeight = (newHeight: number) => {
	  setMaxHeight((prevHeight) => Math.max(prevHeight, newHeight));
	};
  
	useEffect(() => {
		const ctx = gsap.context(() => {

			sectionsRef.current.forEach((section) =>
				gsap.fromTo(
					section,
					{ opacity: 0, y: -80 },
					{
						opacity: 1,
						y: 0,
						duration: 1,
						ease: "power2.out",
						stagger: 0.2,
						scrollTrigger: {
							trigger: section,
							start: "top 80%",
							toggleActions: "play none none reverse",
						},
					}
				)
			);
			
		});
		
		return () => ctx.revert();
	}, []);
  
	return (
	  <>
		<ProductsNav />
		<Breadcrumbs />
			{
				additionalContent && (
					<div className="px-6">
						{additionalContent}
					</div>
				)
			}
		<div className="relative w-full lg:w-4/5 m-auto h-full pt-20 pb-10 flex-1">
			{
				description &&
					<p className="text-xl font-semibold px-10 pb-20 text-center block">
						{ description }
					</p>
			}
			{
				withCategories ?
					props.products.map((category, categoryIndex) => (
						<div key={categoryIndex} className="mb-16">
						<h2 className="text-2xl font-bold text-center mb-6">{category.category}</h2>
						<Grid cols={1} colsMd={2} colsXl={3} className="gap-10 px-6 flex-1">
							{
								category?.items?.map((product, productIndex) => (
									<div className={product.colSpan ? `col-span-${product.colSpan}` : ''} ref={ (el) => { if (el) sectionsRef.current[categoryIndex * 10 + productIndex] = el; } } key={productIndex}>
										<Product
											title={product.title}
											shortDescription={product.short_description}
											description={product.description}
											image={product.image}
											maxHeight={maxHeight}
											setMaxHeight={updateMaxHeight}
											onlyImage={product.onlyImage}
										/>
									</div>
								))
							}
						</Grid>
						</div>
					)) :
					<Grid cols={cols?.default ?? 1} colsMd={cols?.md ?? 2} colsXl={cols?.xl ?? 3} className="gap-10 px-6 flex-1">
						{
							props.products.map((product, index) => (
								<div className={product.colSpan ? `md:col-span-${product.colSpan}` : ''} ref={ (el) => { if (el) sectionsRef.current[index] = el } } key={index}>
									<Product
										title={product.title}
										shortDescription={product.short_description}
										description={product.description}
										image={product.image}
										maxHeight={maxHeight}
										setMaxHeight={updateMaxHeight}
										onlyImage={product.onlyImage}
									/>
								</div>
							))
						}
					</Grid>
			}
			{ options && (
				<div className="px-6 mt-10">
					<Product
						title={options.title}
						image={options.image}
						maxHeight={maxHeight}
						setMaxHeight={updateMaxHeight}
						onlyImage={true}
					/>
				</div>
			) }
		</div>
	  </>
	);
}

export default Subpage;