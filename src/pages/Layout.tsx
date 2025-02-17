import { Outlet, useLocation } from "react-router";
import TopMenu from "../components/Navigation/TopMenu";
import Header from "../components/Layout/Header";
import Cover from "../components/Layout/Cover";
import Title from "../components/Layout/Title";
import ArrowDown from "../components/Navigation/ArrowDown";
import Contact from "../sections/Contact";
import ContactForm from "../sections/ContactForm";
import Section from "../components/Layout/Section";
import ProductsNav from "./Entertainment/components/ProductsNav";

const Layout: React.FC = () => {

	const location = useLocation();

	const data: Record<string, { title: string, img: string }> = {
		"/zabava": {
			title: "Zábava",
			img: "/offers/entertainment.jpeg"
		},
		"/zabava/silikonove-naramky": {
			title: "Silikónové náramky",
			img: "/pages/entertainment/silikonove.jpeg"
		},
		"/zabava/latkove-naramky": {
			title: "Látkové náramky",
			img: "/pages/entertainment/latkove.jpeg"
		}
	}

	const currentData = data[location.pathname] || "Tape, s.r.o";
	const isSubpage = location.pathname.split("/").length > 2;

	return (
		<>
			<TopMenu />
			<Header
				className={`
					h-[50vh] ${!isSubpage && 'xl:h-[100vh]'}
					relative z-20`}
				img={currentData.img}
			>
				<Cover>
					<Title color="light" size="3xl text-center">
						{ currentData.title }
					</Title>
					<div className={`${!isSubpage && 'xl:block'} hidden`}>
						<ArrowDown color="light" />
					</div>
				</Cover>
			</Header>
			<Section fullHeight={false} className="overflow-visible min-h-screen h-auto flex flex-col">
				<ProductsNav />
				<div className="relative w-full lg:w-4/5 m-auto h-full py-10 flex-1">
					<Outlet />
				</div>
			</Section>
			<ContactForm />
		</>
	)
}

export default Layout