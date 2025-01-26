import { useEffect } from 'react';
import { gsap } from "gsap";
import DotMenu from '../../components/Navigation/DotMenu';
import Home from '../../sections/Home';
import About from '../../sections/About';
import Team from '../../sections/Team';
import { Observer } from 'gsap/all';
import Offers from '../../sections/Offers';
import Contact from '../../sections/Contact';

gsap.registerPlugin(Observer)

function HomePage() {

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

		// ODTIALTO

		/* let sections = document.querySelectorAll("section"),
		outerWrappers = gsap.utils.toArray(".outer"),
		innerWrappers = gsap.utils.toArray(".inner"),
		currentIndex = -1,
		wrap = gsap.utils.wrap(0, sections.length),
		animating;

		gsap.set(outerWrappers, { yPercent: 100 });
		gsap.set(innerWrappers, { yPercent: -100 });

		function gotoSection(index, direction) {
			index = wrap(index);
			if (direction !== 0) {
				animating = true;
				let fromTop = direction === -1,
					dFactor = fromTop ? -1 : 1,
					tl2 = gsap.timeline({
						defaults: { duration: 1.25, ease: "power1.inOut" },
						onComplete: () => animating = false
					});
				if (currentIndex >= 0) {
					console.log("current index", currentIndex)
					gsap.set(sections[currentIndex], { zIndex: 0 });
					//tl2.set(sections[currentIndex], { autoAlpha: 0 });
				}
				gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
				tl2.fromTo([outerWrappers[index], innerWrappers[index]], { 
					yPercent: i => i ? -100 * dFactor : 100 * dFactor
				}, { 
					yPercent: 0 
				}, 0).set(sections[currentIndex], { autoAlpha: 0 });
			} else {
				console.log("som tu?")
				gsap.set(sections[index], { zIndex: 1, autoAlpha: 1 });
				gsap.set(sections[currentIndex], { zIndex: 0, autoAlpha: 0 });
				gsap.set(outerWrappers, { yPercent: 0 });
				gsap.set(innerWrappers, { yPercent: 0 });
			}
		  
			currentIndex = index;
		  }

		Observer.create({
			type: "wheel,touch,pointer",
			wheelSpeed: -1,
			onDown: () => !animating && gotoSection(currentIndex - 1, -1),
			onUp: () => !animating && gotoSection(currentIndex + 1, 1),
			tolerance: 10,
			preventDefault: true
		  });

		  gotoSection(0, 0) */

		// POTIALTO + zmazat inner a outer v section.tsx

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
	<div id="homepage">
		<Home />
		<Offers />
		<About />
		<Team />
		<Contact />
		<DotMenu />
	</div>
  )
}

export default HomePage
