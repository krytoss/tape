import { useEffect } from 'react';
import { gsap } from "gsap";
import AnimatedLogo from './components/AnimatedLogo'
import DotMenu from './components/DotMenu'
import Home from './sections/Home';
import TopMenu from './components/Menu/TopMenu';
import About from './sections/About';

function App() {

	  useEffect(() => {
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
		gsap.set("body", { overflow: "hidden" });

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
			scale: 0.5,
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

		/* tl.eventCallback("onComplete", () => {
			gsap.to("#background, #text", {
			  y: "+=10",
			  duration: 1.5,
			  ease: "power1.inOut",
			  repeat: -1,
			  yoyo: true,
			});
		  }); */

	  }, []);

  return (
	<>
		<Home />
		<About />
		<DotMenu />
	</>
  )
}

export default App
