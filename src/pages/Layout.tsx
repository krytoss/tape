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

	const currentData = data[location.pathname] || { title: "Zábava", img: "/pages/entertainment/header.webp"};
	const isSubpage = location.pathname.split("/").length > 2;

  console.log("Subpage name", location.pathname.split("/")[2]);

  const customClasses: Record<string, string | undefined> = {
    "/zabava/snurky": 'w-[80vw] object-bottom'
  }

	return (
		<>
			<TopMenu />
			<Header
				className={`
					h-[55vh] ${!isSubpage && 'xl:h-[80vh]'}
					relative z-20`
				}
				img={currentData.img}
				hideBreadcrumbs={isSubpage}
        customClasses={customClasses[location.pathname]}
			>
				<Cover>
					<Title color="light" size="3xl text-center" className="pt-16 md:pt-20">
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