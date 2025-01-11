import AnimatedLogo from "../components/AnimatedLogo"
import ArrowDown from "../components/ArrowDown"
import Section from "../components/Section"

const Home: React.FC = () => {
	return (
		<Section>
			<AnimatedLogo />
			<h2 id="home-title" className="absolute bottom-40 left-1/2 transform -translate-x-1/2 text-white text-3xl">
				Spoľahlivá identifikácia pre všetkých
			</h2>
			<ArrowDown />
		</Section>
	)
}

export default Home