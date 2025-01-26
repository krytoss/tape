import Cover from "../../components/Layout/Cover"
import Header from "../../components/Layout/Header"
import Section from "../../components/Layout/Section"
import Title from "../../components/Layout/Title"
import TopMenu from "../../components/Navigation/TopMenu"

const Health: React.FC = () => {
	return (
		<>
			<TopMenu />
			<Header className="h-[80vh]" img="./health/header.jpeg">
				<Cover>
					<Title color="light" size="3xl text-center">
						Bezpečnosť v zdravotníctve
					</Title>
				</Cover>
				text
			</Header>
			<Section>
				<></>
			</Section>
		</>
	)
}

export default Health