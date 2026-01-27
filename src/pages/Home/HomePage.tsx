import { useEffect } from 'react';
import { gsap } from "gsap";
import DotMenu from '../../components/Navigation/DotMenu';
import Home from '../../sections/Home';
import KeyAreas from '../../sections/KeyAreas';
import About from '../../sections/About';
import Team from '../../sections/Team';
import { Observer } from 'gsap/all';
import Offers from '../../sections/Offers';
import Contact from '../../sections/Contact';
import ContactForm from '../../sections/ContactForm';
import TopMenu from '../../components/Navigation/TopMenu';

function HomePage() {

	  useEffect(() => {
		if (typeof window !== 'undefined') {
			gsap.registerPlugin(Observer)
			const tl = gsap.timeline();
		
			tl.fromTo(
				"#background",
				{
					opacity: 0
				},
				{
					opacity: 1,
					duration: .3,
					delay: 0,
					ease: "power2.out",
				}
			)

			tl.fromTo(
			"#background",
			{
				scale: 3,
				rotation: 0,
				transformOrigin: "center",
			},
			{
				scale: 1,
				rotation: 90,
				duration: 1,
				delay: 0,
				ease: "power2.inOut",
			}
			);
		
			gsap.set("#text", { opacity: 0 });
			gsap.set("#home-title", { opacity: 0 });
			gsap.set("#logo", { scale: 1 })
			//gsap.set("body", { overflow: "hidden" });
			scrollTo(0, 0);

			tl.to("#text", {
			opacity: 1,
			duration: .5,
			delay: -1
			});

			tl.fromTo("#menu li",
				{
				right: "30vw",
				opacity: 0,
				},
				{
				right: "0",
				opacity: 1,
				duration: 0.5,
				stagger: 0.05,
				delay: -0.2,
				ease: "power2.out",
				}
			);

			tl.to("#logo", {
				scale: 0.33,
				duration: 0.8,
				delay: -1.2,
				top: 0,
				ease: "power2.out",
			})

			tl.to("#home-title", {
				opacity: 1,
				duration: 0.8,
				delay: -0.8,
				ease: "power2.out",
			})

			tl.eventCallback("onComplete", () => {
				gsap.set("body", { overflow: "visible" });
			})
		}
	  }, []);

  return (
	<div id="homepage">
		<TopMenu />
		<Home />
		<Offers />
		<About />
		<KeyAreas />
		<Team />
		<Contact />
		<ContactForm />
		<DotMenu />
	</div>
  )
}

export default HomePage
