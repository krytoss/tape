import { Outlet, useLocation } from "react-router";
import TopMenu from "../components/Navigation/TopMenu";
import Header from "../components/Layout/Header";
import Cover from "../components/Layout/Cover";
import Title from "../components/Layout/Title";
import ArrowDown from "../components/Navigation/ArrowDown";
import ContactForm from "../sections/ContactForm";
import Section from "../components/Layout/Section";
import { pages } from "../routes";

const Layout: React.FC = () => {

	const location = useLocation();

	const data = Object.keys(pages.zabava.children ?? {}).reduce((acc: any, key: string) => {
		const _key = key as keyof typeof pages.zabava.children;
		acc[`/zabava/${_key}`] = {
			title: pages.zabava.children?.[_key].title,
			img: pages.zabava.children?.[_key].img
		};
		return acc;
	}, {});

	/* const data: Record<string, { title: string, img: string }> = {
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
		},
		"/zabava/karty": {
			title: "Karty",
			img: "/pages/entertainment/plastove_karty.png"
		},
	} */

	const currentData = data[location.pathname] || "Tape, s.r.o";
	const isSubpage = location.pathname.split("/").length > 2;

	return (
		<>
			<TopMenu />
			<Header
				className={`
					h-[50vh] ${!isSubpage && 'xl:h-[80vh]'}
					relative z-20`
				}
				img={currentData.img}
			>
				<Cover>
					<Title color="light" size="3xl text-center">
						{ currentData.title ?? "Zábava" }
					</Title>
					<div className={`${!isSubpage && 'xl:block'} hidden`}>
						<ArrowDown color="light" />
					</div>
				</Cover>
			</Header>
			<Section fullHeight={false} className="overflow-visible min-h-screen h-auto flex flex-col">
				<Outlet />
			</Section>
			<ContactForm />
		</>
	)
}

export default Layout