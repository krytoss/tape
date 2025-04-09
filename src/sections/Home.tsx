import AnimatedLogo from "../components/AnimatedLogo"
import ArrowDown from "../components/Navigation/ArrowDown"
import Section from "../components/Layout/Section"

const Home: React.FC = () => {
	return (
		<Section id="home">
			<AnimatedLogo />
			<h2 id="home-title" className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-slate-700 text-3xl text-center font-bold">
				Bezpečná identifikácia pre všetkých
			</h2>
			<ArrowDown />
		</Section>
	)
}

export default Home