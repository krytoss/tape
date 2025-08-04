import { create as create$1 } from '@wroud/vite-plugin-ssg/react/server';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Html, Head, Link as Link$1, Body } from '@wroud/vite-plugin-ssg/react/components';
import { Link, useLocation, Outlet, BrowserRouter, Routes, Route } from 'react-router';
import { useState, useEffect, useRef, useCallback, useLayoutEffect } from 'react';
import gsap, { gsap as gsap$1 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
import { Observer } from 'gsap/all.js';
import { X, Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { createPortal } from 'react-dom';
import ReactGA from 'react-ga4';

const indexStyles = "assets/index-Dd8qRZJH.css";

function useActiveSection(ids) {
  const [activeId, setActiveId] = useState(null);
  useEffect(() => {
    const observers = [];
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { threshold: 0.6 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => {
      observers.forEach((o) => o.disconnect());
    };
  }, [ids]);
  return activeId;
}

const DotMenu = () => {
  const menuLinks = {
    "home": "Home",
    "offers": "Ponuka",
    "about": "O nás",
    "team": "Team",
    /* "health": "Bezpečnosť v zdravotníctve",
    "entertainment": "Zábava",
    "business": "Biznis", */
    "contact": "Kontakt"
  };
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const sectionIds = Object.keys(menuLinks);
  const activeSection = useActiveSection(sectionIds);
  return /* @__PURE__ */ jsx("ul", { id: "menu", className: `
			fixed right-0 top-1/2 transform -translate-y-1/2 z-50
		`, children: Object.keys(menuLinks).map((key, index) => /* @__PURE__ */ jsx(
    "li",
    {
      className: `
						text-slate-700 text-2xl text-right
						relative
						rounded-sm mr-0
						my-0
						whitespace-nowrap
					`,
      children: /* @__PURE__ */ jsxs(
        "a",
        {
          onClick: () => scrollToId(key),
          className: `block py-2 uppercase text-slate-700 text-right lg:mr-10 sm:mr-2 mr-1 inline-flex group relative cursor-pointer
							${activeSection === key ? "font-bold" : ""}`,
          children: [
            /* @__PURE__ */ jsx(
              "span",
              {
                className: `absolute ${activeSection === key ? "" : "hidden"} group-hover:inline-block text-xs leading-5 right-10 top-1/2 transform -translate-y-1/2`,
                children: menuLinks[key]
              }
            ),
            /* @__PURE__ */ jsx("div", { className: `
							w-5 h-5 inline-block
							rounded-full p-1
							border-2 border-transparent
							${activeSection === key ? "border-slate-700" : "group-hover:border-slate-700"}
							ml-3
						`, children: /* @__PURE__ */ jsx("div", { className: "w-full h-full block bg-slate-700 rounded-full" }) })
          ]
        }
      )
    },
    index
  )) });
};

const AnimatedLogo = () => {
  const svgRef = useRef(null);
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "visible",
        background: "transparent"
      },
      className: "min-w-screen min-h-screen absolute",
      children: /* @__PURE__ */ jsxs(
        "svg",
        {
          id: "logo",
          ref: svgRef,
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-100 -100 1093 1093",
          className: "w-[150vw] h-[150vh] -ml-[25vw] -mt-[25vh] overflow-visible",
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                id: "background",
                d: "M 351.500 94.452 C 34.798 179.528, 0.533 188.925, 0.834 190.621 C 1.620 195.045, 188.309 891.565, 188.875 892.186 C 189.219 892.563, 347.675 850.431, 541 798.557 C 855.064 714.288, 892.477 704.044, 892.283 702.371 C 891.728 697.569, 704.185 0.572, 703.398 0.381 C 702.904 0.261, 544.550 42.593, 351.500 94.452",
                fill: "#1c4484",
                fillRule: "evenodd"
              }
            ),
            /* @__PURE__ */ jsx(
              "path",
              {
                id: "text",
                d: "M 161 279.500 L 161 293 182.492 293 L 203.983 293 204.242 348.250 L 204.500 403.500 224 403.500 L 243.500 403.500 243.758 348.250 L 244.017 293 265.008 293 L 286 293 286 279.500 L 286 266 223.500 266 L 161 266 161 279.500 M 302.716 333.832 C 287.472 371.139, 275 402.189, 275 402.832 C 275 403.680, 280.032 404, 293.399 404 L 311.797 404 314.581 396.250 C 316.112 391.988, 318.361 385.800, 319.578 382.500 L 321.791 376.500 350.492 376.500 L 379.194 376.500 383.897 389.021 C 386.483 395.908, 388.941 402.095, 389.359 402.771 C 390.309 404.309, 431.364 404.570, 430.833 403.035 C 430.650 402.504, 417.900 371.466, 402.500 334.061 L 374.500 266.053 352.466 266.027 L 330.431 266 302.716 333.832 M 443 335 L 443 404 461.483 404 L 479.966 404 480.233 378.250 L 480.500 352.500 500.500 351.907 C 511.500 351.580, 522.671 350.783, 525.325 350.136 C 539.918 346.574, 550.681 336.006, 554.448 321.540 C 558.635 305.461, 553.915 286.321, 543.532 277.267 C 538.039 272.478, 528.823 268.299, 521 267.052 C 517.403 266.478, 498.535 266.012, 478.750 266.008 L 443 266 443 335 M 574 335 L 574 404 623 404 L 672 404 672 390.500 L 672 377 641.500 377 L 611 377 611 361.500 L 611 346 639.029 346 L 667.058 346 666.779 332.750 L 666.500 319.500 638.750 319.234 L 611 318.968 611 305.999 L 611 293.030 640.750 292.765 L 670.500 292.500 670.779 279.250 L 671.058 266 622.529 266 L 574 266 574 335 M 480 308.500 L 480 326 491.750 325.994 C 505.197 325.988, 509.871 324.983, 514.107 321.188 C 519.941 315.962, 520.286 303.673, 514.775 297.397 C 510.664 292.714, 504.245 291, 490.818 291 L 480 291 480 308.500 M 341.537 320.236 C 336.677 335.231, 332.496 348.063, 332.244 348.750 C 331.888 349.723, 336.051 350, 351 350 C 365.950 350, 370.112 349.723, 369.754 348.750 C 369.501 348.063, 365.347 335.575, 360.522 321 C 355.698 306.425, 351.440 294.156, 351.061 293.736 C 350.682 293.315, 346.396 305.240, 341.537 320.236",
                fill: "#f9f9fa",
                fillRule: "evenodd",
                className: "transform"
              }
            )
          ]
        }
      )
    }
  );
};

const ArrowDown = ({ color }) => {
  return /* @__PURE__ */ jsx("div", { className: `w-6 h-6 absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce`, children: /* @__PURE__ */ jsx(
    "div",
    {
      className: `
					absolute rotate-45
					w-6 h-6
					border-b-2 border-r-2
					${color === "light" ? "border-white" : "border-slate-800"}
					inline-block}
				`
    }
  ) });
};

const Section = ({ id, className, children, ref, fullHeight = true }) => {
  return (
    /* <section className={`h-screen w-screen overflow-hidden fixed top-0 opacity-0 ${className}`}>
    	<div className="outer overflow-hidden relative h-screen w-screen">
    		<div className="inner overflow-hidden relative h-screen w-screen">
    			<div className="h-screen w-screen bg-stone-800 shadow-inner">
    				{children}
    			</div>
    		</div>
    	</div>
    </section>
     shadow-[0_-5px_20px_0px_rgba(0,0,0,0.3)]
    */
    /* @__PURE__ */ jsx("section", { ref, id, className: `${fullHeight && "min-h-screen"} w-screen relative overflow-hidden flex flex-col ${className}`, children })
  );
};

const Home = () => {
  return /* @__PURE__ */ jsxs(Section, { id: "home", children: [
    /* @__PURE__ */ jsx(AnimatedLogo, {}),
    /* @__PURE__ */ jsx("h1", { id: "home-title", className: "absolute bottom-20 left-1/2 transform -translate-x-1/2 text-slate-700 text-3xl text-center font-bold", children: "Bezpečná identifikácia pre všetkých" }),
    /* @__PURE__ */ jsx(ArrowDown, {})
  ] });
};

const Grid = ({ children, cols, colsXs, colsSm, colsMd, colsLg, colsXl, cols2Xl, gap, className }) => {
  const classes = [
    "w-full grid",
    cols ? `grid-cols-${cols}` : "",
    colsXs ? `xs:grid-cols-${colsXs}` : "",
    colsSm ? `sm:grid-cols-${colsSm}` : "",
    colsMd ? `md:grid-cols-${colsMd}` : "",
    colsLg ? `lg:grid-cols-${colsLg}` : "",
    colsXl ? `xl:grid-cols-${colsXl}` : "",
    cols2Xl ? `2xl:grid-cols-${cols2Xl}` : "",
    gap ? `gap-${gap}` : "",
    className ?? ""
  ].join(" ");
  return /* @__PURE__ */ jsx("div", { className: classes, children });
};

const Title = ({ children, color = "dark", className, size = "8xl", sizeMd, sizeLg, sizeXl, size2Xl }) => {
  const colorClass = color === "light" ? "text-slate-200" : "text-slate-700";
  const mdClass = sizeMd ? `md:text-${sizeMd}` : "";
  const lgClass = sizeLg ? `lg:text-${sizeLg}` : "";
  const xlClass = sizeXl ? `xl:text-${sizeXl}` : "";
  const xxlClass = size2Xl ? `2xl:text-${size2Xl}` : "";
  return /* @__PURE__ */ jsx("h2", { className: `text-${size} ${mdClass} ${lgClass} ${xlClass} ${xxlClass} uppercase font-semibold block max-w-full ${className ?? ""} ${colorClass ?? ""}`, children });
};

const About = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const elLeft = leftRef.current;
      const elRight = rightRef.current;
      gsap.fromTo(elLeft, {
        opacity: 0,
        x: -100
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: elLeft,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
          once: false
        }
      });
      gsap.fromTo(elRight, {
        opacity: 0,
        x: 100
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: elRight,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
          once: false
        }
      });
    }
  });
  return /* @__PURE__ */ jsx(Section, { id: "about", children: /* @__PURE__ */ jsxs(Grid, { cols: 1, colsLg: 2, className: "h-full flex flex-col flex-1", children: [
    /* @__PURE__ */ jsx("div", { ref: leftRef, className: "lg:pl-40 lg:pr-10 text-center justify-center items-center flex width-full", children: /* @__PURE__ */ jsx(Title, { sizeLg: "8xl", size: "6xl", color: "dark", children: "O nás" }) }),
    /* @__PURE__ */ jsx("div", { ref: rightRef, className: "py-40 h-full md:col-span-2 lg:col-span-1 py-10 px-20 lg:pl-10 lg:pr-40 justify-center items-center flex bg-gray-300 text-slate-700", children: /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsxs("span", { className: "text-2xl block", children: [
        "Spoločnosť ",
        /* @__PURE__ */ jsx("span", { className: "text-3xl text-tape font-bold mx-1", children: "TAPE" }),
        ", s.r.o. pôsobí na trhu identifikácie osôb 20 rokov v rôznych formách."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 mb-4 text-xl", children: "Venujeme sa zvyšovaniu bezpečnosti v nemocniciach. Sme dodávateľom identifikačných náramkov pre pacientov, etikiet a ďalších produktov. Ďalšou oblasťou je identifikácia zamestnancov, návštevníkov koncertov, festivalov, konferencií a rôznych podujatí." }),
      /* @__PURE__ */ jsxs("p", { className: "mb-10", children: [
        "Sme oficiálnym distribútorom spoločnosti ",
        /* @__PURE__ */ jsx(Link, { to: "https://www.pdcorp.com/products", target: "blank", className: "text-brand", children: "PDC PRECISION DYNAMICS CORPORATION" }),
        " (patriaceho do skupiny Brady Corporation) pre Slovenskú republiku. Precision Dynamics Corporation je najväčším celosvetovým výrobcom identifikačných náramkov a etikiet na označovanie liekov a striekačiek. Poskytuje stopercentnú kvalitu, pokiaľ ide o služby, dizajn a výrobu. Potvrdzujú to aj certifikáty ISO-9001:2015 a ISO-13485:2016, ISO-14001:2015 hlavného závodu v San Fernando v Kalifornii v USA. PDC ako prvá na svete uviedla na trh identifikačné náramky v roku 1956."
      ] }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Prečo si vybrať nás?" }),
      /* @__PURE__ */ jsx("p", { children: "„Každý zákazník je pre nás dôležitý. Preto ponúkame individuálne riešenia na mieru.“" }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl mt-5 font-semibold", children: "Rýchle dodanie" }),
      /* @__PURE__ */ jsx("p", { children: "„Zabezpečujeme rýchlu výrobu a dodanie, aby ste mali svoje produkty včas.“" }),
      /* @__PURE__ */ jsx("h3", { className: "text-xl mt-5 font-semibold", children: "Skúsenosti a profesionalita" }),
      /* @__PURE__ */ jsx("p", { children: "„Máme dlhoročné skúsenosti a množstvo spokojných zákazníkov.“" })
    ] }) })
  ] }) });
};

const PersonCard = ({ img, name, position, move }) => {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `person-card bg-white/50 h-auto pt-10 px-10 shadow-xl relative h-full hover:-top-1 hover:animate-pulse} w-full`,
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-40 h-40 bg-blue-500 overflow-hidden relative text-center m-auto rounded-full", children: /* @__PURE__ */ jsx("img", { src: img, className: `h-auto w-full object-cover absolute top-0 left-1/2 transform -translate-x-1/2 ${move ? "scale-[1.1] translate-y-[15px]" : ""}` }) }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 text-center", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: name }),
          /* @__PURE__ */ jsx("p", { className: "text-lg", children: position })
        ] })
      ]
    }
  );
};

const Team = () => {
  const leftRef = useRef(null);
  const quoteRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const elLeft = leftRef.current;
      const elQuote = quoteRef.current;
      gsap.fromTo(elLeft, {
        opacity: 0,
        x: -100
      }, {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#team",
          start: "top 50%",
          end: "bottom 1%",
          toggleActions: "play reverse play reverse",
          once: false
        }
      });
      gsap.fromTo(elQuote, {
        opacity: 0,
        x: -200
      }, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#team",
          start: "top 95%",
          end: "bottom 5%",
          toggleActions: "play reverse play reverse",
          once: false
        }
      });
      gsap.fromTo(
        ".person-card",
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: "#team",
            start: "top 80%",
            end: "bottom 5%",
            toggleActions: "play reverse play reverse",
            once: false
          }
        }
      );
    }
  });
  return /* @__PURE__ */ jsxs(Section, { id: "team", className: "relative bg-white !h-auto min-h-screen", children: [
    /* @__PURE__ */ jsx("img", { src: "./hexagon.jpg", className: "z-10 absolute right-0 bottom-0" }),
    /* @__PURE__ */ jsxs("div", { className: "w-full min-h-screen bg-gray-300 bg-opacity-90 z-20 relative pb-20 2xl:pb-0 h-auto flex flex-col items-center justify-center", children: [
      /* @__PURE__ */ jsxs(Grid, { cols: 1, colsMd: 1, cols2Xl: 3, children: [
        /* @__PURE__ */ jsxs("div", { ref: leftRef, className: "py-10 2xl:pl-40 2xl:pr-10 text-center justify-center items-center flex width-full flex-col pt-20", children: [
          /* @__PURE__ */ jsx(Title, { color: "dark", children: "Team" }),
          /* @__PURE__ */ jsx("p", { className: "text-slate-700 font-semibold mt-10 text-md xl:text-xl", children: "Spoznajte ľudí, ktorí budú s vami komunikovať" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "col-span-3 2xl:col-span-2 py-10 2xl:pl-10 2xl:pr-28 justify-center items-center flex text-slate-700", children: /* @__PURE__ */ jsxs(Grid, { cols: 1, colsLg: 3, gap: 0, className: "w-full flex justify-center items-center", children: [
          /* @__PURE__ */ jsx("div", { className: "p-6 xl:p-8 w-4/5 sm:w-3/5 md:w-1/2 2xl:w-full lg:w-full mx-auto h-full", children: /* @__PURE__ */ jsx(
            PersonCard,
            {
              img: "./team/tana.png",
              name: "Tatiana Reindlová",
              position: "konateľ, strategický manažér",
              move: true
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-6 xl:p-8 w-4/5 sm:w-3/5 md:w-1/2 2xl:w-full lg:w-full mx-auto h-full", children: /* @__PURE__ */ jsx(
            PersonCard,
            {
              img: "./team/peter.png",
              name: "Peter Reindl",
              position: "konateľ, obchodný manažér"
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "p-6 xl:p-8 w-4/5 sm:w-3/5 md:w-1/2 2xl:w-full lg:w-full mx-auto h-full", children: /* @__PURE__ */ jsx(
            PersonCard,
            {
              img: "./team/monika.png",
              name: "Monika Šafárová",
              position: "koordinátor predaja"
            }
          ) })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { ref: quoteRef, className: "2xl:absolute bottom-10 right-0 left-0 w-full bg-gray-400/80 p-5 z-30 text-right px-20 text-3xl text-slate-700", children: /* @__PURE__ */ jsxs("div", { className: "relative inline-block", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -left-12 bottom-0 transform translate-y-[30px] text-8xl font-serif", children: "„" }),
        "Kvalita, rýchlosť a individuálny prístup k zákazníkom sú naším štandardom.",
        /* @__PURE__ */ jsx("span", { className: "absolute top-0 transform -translate-y-[40px] text-8xl font-serif", children: "“" })
      ] }) })
    ] })
  ] });
};

const Cover = ({ children, className, center = true }) => {
  return /* @__PURE__ */ jsx("div", { className: `
			absolute left-0 top-0 right-0 bottom-0
			bg-stone-800 bg-opacity-80
			hover:bg-opacity-20
			transition-all duration-300
			${className ?? ""}
			${center ? "flex items-center justify-center" : ""}
		`, children });
};

const TapeLink = ({ to, color = "white", fullSize = false, children, center, uppercase = true, className }) => {
  const colorClass = `text-${color}`;
  return /* @__PURE__ */ jsx(Link, { to, className: `
			${colorClass} text-2xl font-semibold ${uppercase ? "uppercase" : ""}
			${fullSize ? "w-full h-full" : ""}
			${center ? "flex items-center justify-center" : ""}
			${className}
		`, children });
};

const Offers = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        ".offer",
        {
          y: 100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          scrollTrigger: {
            trigger: ".offer",
            start: "top 30%",
            end: "bottom 30%",
            toggleActions: "play reverse play reverse",
            once: false
          }
        }
      );
    }
  });
  return /* @__PURE__ */ jsx(Section, { id: "offers", children: /* @__PURE__ */ jsxs(Grid, { cols: 1, colsXl: 3, className: "h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "offer justify-center items-center flex w-full bg-red-100 group relative h-[33.33vh] xl:h-full overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: "./offers/health_industry.jpeg", className: "w-full h-auto xl:h-full xl:w-auto object-cover filter grayscale group-hover:grayscale-0", alt: "Health industry" }),
      /* @__PURE__ */ jsx(Cover, { className: "hover:bg-opacity-0 transition transition-colors", children: /* @__PURE__ */ jsx(TapeLink, { to: "zdravotnictvo", fullSize: true, center: true, children: /* @__PURE__ */ jsx(Title, { color: "light", size: "3xl text-center", children: "Bezpečnosť v zdravotníctve" }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "offer justify-center items-center flex w-full bg-green-100 group relative h-[33.33vh] xl:h-full overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: "./offers/entertainment.jpeg", className: "min-w-full min-h-full xl:h-full xl:w-auto object-cover filter grayscale group-hover:grayscale-0", alt: "Entertainment" }),
      /* @__PURE__ */ jsx(Cover, { className: "hover:bg-opacity-0 transition transition-colors", children: /* @__PURE__ */ jsx(TapeLink, { to: "zabava", fullSize: true, center: true, children: /* @__PURE__ */ jsx(Title, { color: "light", size: "3xl text-center", children: "Zábava" }) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "offer justify-center items-center flex w-full bg-pink-100 group relative h-[33.33vh] xl:h-full overflow-hidden", children: [
      /* @__PURE__ */ jsx("img", { src: "./offers/business.jpeg", className: "min-w-full min-h-full xl:h-full xl:w-auto object-cover filter grayscale group-hover:grayscale-0", alt: "Business" }),
      /* @__PURE__ */ jsx(Cover, { className: "hover:bg-opacity-0 transition transition-colors", children: /* @__PURE__ */ jsx(TapeLink, { to: "biznis", fullSize: true, center: true, children: /* @__PURE__ */ jsx(Title, { color: "light", size: "3xl text-center", children: "Biznis" }) }) })
    ] })
  ] }) });
};

const Map = () => {
  return /* @__PURE__ */ jsx(
    "iframe",
    {
      src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2658.4381745414753!2d18.599979559991738!3d48.21743663793624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476adc4e2d4710cb%3A0x39be2cc15ac41b7!2sMlynsk%C3%A1%202238%2C%20934%2005%20Levice%2C%20Slovakia!5e0!3m2!1sen!2scz!4v1737292407118!5m2!1sen!2scz",
      className: "w-full h-full filter grayscale hover:grayscale-0",
      loading: "lazy"
    }
  );
};

const Contact = () => {
  return /* @__PURE__ */ jsx(Section, { fullHeight: false, className: "min-h-screen", id: "contact", children: /* @__PURE__ */ jsxs(Grid, { colsXl: 2, className: "h-full", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-left justify-center flex flex-col width-full bg-gray-100 pb-10 min-h-screen xl:min-h-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "pt-28 pb-10 lg:pl-40 lg:pr-10 px-10 lg:px-0", children: [
        /* @__PURE__ */ jsx(Title, { sizeLg: "8xl", size: "4xl", children: "Kontakt" }),
        /* @__PURE__ */ jsxs("div", { className: "text-slate-800 text-left", children: [
          /* @__PURE__ */ jsxs("p", { className: "mt-10", children: [
            "TAPE, s.r.o.",
            /* @__PURE__ */ jsx("br", {}),
            "Mlynská 2238",
            /* @__PURE__ */ jsx("br", {}),
            "934 01 Levice",
            /* @__PURE__ */ jsx("br", {}),
            "IČO: 35 979 852",
            /* @__PURE__ */ jsx("br", {}),
            "DIČ: 2022137381",
            /* @__PURE__ */ jsx("br", {}),
            "IČ DPH: SK2022137381",
            /* @__PURE__ */ jsx("br", {})
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "mt-5", children: [
            /* @__PURE__ */ jsxs(TapeLink, { to: "mailto:info@tape.sk", color: "slate-500", uppercase: false, className: "transition transition-color", children: [
              "info",
              /* @__PURE__ */ jsx("span", { children: "@" }),
              "tape",
              /* @__PURE__ */ jsx("span", { className: "text-brand font-black", children: "." }),
              "sk"
            ] }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx(TapeLink, { to: "tel:+421905945609", color: "slate-500", className: "transition transition-color hover:text-slate-800", children: "+421 905 945 609" }),
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx(TapeLink, { to: "tel:+421918967970", color: "slate-500", className: "transition transition-color hover:text-slate-800", children: "+421 918 967 970" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("img", { src: "./building.png", className: "w-1/2 max-w-[400px] mx-auto" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "p-0 justify-center items-center flex text-slate-700", children: /* @__PURE__ */ jsx(Map, {}) })
  ] }) });
};

const Input = ({ label, ...props }) => {
  const handleChange = (event) => {
    props.onChange(event.target.value);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col mb-4", children: [
    label && /* @__PURE__ */ jsxs("label", { htmlFor: props.id, className: "text-sm font-medium text-gray-600", children: [
      label,
      props.required && /* @__PURE__ */ jsx("span", { className: "-ml-0.5 align-middle text-red-500 text-xl font-bold leading-[1]", children: " *" })
    ] }),
    /* @__PURE__ */ jsx(
      "input",
      {
        ...props,
        className: `
					px-4 py-2
					border border-gray-300
					rounded-md
					focus:outline-none focus:ring focus:ring-blue-500
					bg-white
					w-full
				`,
        onChange: handleChange
      }
    )
  ] });
};

const Form = ({ onSubmit, children, className }) => {
  const handleSubmit = (event) => {
    if (onSubmit) {
      event.preventDefault();
      onSubmit(event);
    }
  };
  return /* @__PURE__ */ jsx("form", { onSubmit: handleSubmit, className, children });
};

const Selectbox = ({ label, options, onChange, value, required, ...props }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
    /* @__PURE__ */ jsxs("label", { htmlFor: props.id, className: "block text-sm font-medium text-gray-700", children: [
      label,
      required && /* @__PURE__ */ jsx("span", { className: "-ml-0.5 align-middle text-red-500 text-xl font-bold leading-[1]", children: " *" })
    ] }),
    /* @__PURE__ */ jsx(
      "select",
      {
        ...props,
        value,
        className: "p-2 border border-gray-300 rounded-md bg-white w-full",
        onChange: handleChange,
        required,
        children: options.map((option, index) => /* @__PURE__ */ jsx(
          "option",
          {
            value: option.value,
            disabled: option.disabled,
            children: option.label
          },
          index
        ))
      }
    )
  ] });
};

const Textbox = ({ label, value, onChange, required }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col font-medium mb-4", children: [
    label && /* @__PURE__ */ jsx("label", { className: "text-sm text-gray-600", children: label }),
    /* @__PURE__ */ jsx(
      "textarea",
      {
        className: `
					px-4 py-2
					border border-gray-300
					rounded-md
					focus:outline-none focus:ring focus:ring-blue-500
					bg-white
					w-full
				`,
        value,
        onChange: handleChange,
        rows: 5,
        required
      }
    )
  ] });
};

const Checkbox = ({ id, label, checked, onChange, required }) => {
  const handleChange = (event) => {
    onChange(event.target.checked);
  };
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center mb-4", children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        id,
        type: "checkbox",
        className: "h-4 w-4 text-blue-600 focus:ring focus:ring-blue-500",
        checked,
        onChange: handleChange,
        required
      }
    ),
    /* @__PURE__ */ jsx("label", { htmlFor: id, className: "ml-2 text-sm text-gray-600", children: label })
  ] });
};

const ContactForm = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger);
      const ctx = gsap.context(() => {
        gsap.fromTo(leftRef.current, { opacity: 0, x: -100 }, {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none play none",
            once: false
          }
        });
        gsap.fromTo(rightRef.current, { opacity: 0, x: 100 }, {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none play none",
            once: false
          }
        });
      });
      return () => ctx.revert();
    }
  }, []);
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const options = [
    {
      value: "",
      label: "Vyberte možnosť",
      disabled: true,
      selected: true
    },
    {
      value: "visit",
      label: "Návštevu obchodníka"
    },
    {
      value: "price",
      label: "Cenovú ponuku"
    },
    {
      value: "samples",
      label: "Zaslanie vzoriek"
    },
    {
      value: "catalog",
      label: "Zaslanie produktových listov/katalógu"
    },
    {
      value: "other",
      label: "Iné informácie"
    }
  ];
  const resetValues = () => {
    setMail("");
    setPhone("");
    setService("");
    setMessage("");
    setAgreement(false);
  };
  const handleSend = async (e) => {
    e.preventDefault();
    if (isSending) return;
    setIsSending(true);
    const serviceLabel = options.find((option) => option.value === service)?.label;
    const formData = new FormData();
    formData.append("email", mail);
    formData.append("phone", phone);
    formData.append("service", serviceLabel ?? "");
    formData.append("message", message);
    try {
      const res = await fetch("https://api.tape.sk/send.php", {
        method: "POST",
        body: formData
      });
      const text = await res.text();
      if (res.ok) {
        alert("Správa bola úspešne odoslaná!");
      } else {
        alert(`Chyba: ${text}`);
      }
    } catch (err) {
      console.error("Chyba pri odosielaní:", err);
      alert("Nepodarilo sa odoslať formulár.");
    }
    resetValues();
    setIsSending(false);
  };
  const [isShowModal, setIsShowModal] = useState(false);
  const handleShowModal = (event) => {
    event.preventDefault();
    setIsShowModal(true);
  };
  const handleCloseModal = () => {
    setIsShowModal(false);
  };
  return /* @__PURE__ */ jsxs(Section, { id: "form", children: [
    isShowModal && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 md:px-20 z-[9999]", children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-5 rounded shadow-lg max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-10rem)] overflow-y-auto", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-4", children: "Zásady spracovania osobných údajov" }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { children: "TAPE s.r.o." }),
        ", so sídlom Mlynská 2238, 934 01 Levice, IČO: 35979852, zapísaná v obchodnom registri Okresného súdu Nitra, ako prevádzkovateľ webovej stránky ",
        /* @__PURE__ */ jsx("strong", { children: "tape.sk" }),
        ", týmto poskytuje informácie o spracúvaní osobných údajov získaných prostredníctvom kontaktného formulára."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-semibold", children: "1. Aké údaje spracúvame" }),
      /* @__PURE__ */ jsx("p", { children: "Prostredníctvom kontaktného formulára spracúvame tieto osobné údaje:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside", children: [
        /* @__PURE__ */ jsx("li", { children: "meno a priezvisko (ak sa vyplní)," }),
        /* @__PURE__ */ jsx("li", { children: "e-mailová adresa," }),
        /* @__PURE__ */ jsx("li", { children: "telefónne číslo," }),
        /* @__PURE__ */ jsx("li", { children: "obsah správy (text)." })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-semibold", children: "2. Účel spracúvania" }),
      /* @__PURE__ */ jsx("p", { children: "Údaje spracúvame výhradne za účelom:" }),
      /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside", children: /* @__PURE__ */ jsx("li", { children: "kontaktovania vás späť a vybavenia vašej požiadavky, ktorú ste nám poslali cez formulár." }) }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-semibold", children: "3. Právny základ spracúvania" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Vaše osobné údaje spracúvame na základe ",
        /* @__PURE__ */ jsx("strong", { children: "vášho výslovného súhlasu" }),
        ", ktorý udeľujete odoslaním formulára a zaškrtnutím príslušného políčka."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-semibold", children: "4. Doba uchovávania" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Osobné údaje uchovávame ",
        /* @__PURE__ */ jsx("strong", { children: "len po dobu nevyhnutne potrebnú" }),
        " na vybavenie vašej požiadavky."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-semibold", children: "5. Komu môžu byť údaje sprístupnené" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Vaše údaje ",
        /* @__PURE__ */ jsx("strong", { children: "nesprístupňujeme žiadnym tretím stranám" }),
        ". Prístup k nim majú len oprávnené osoby v rámci spoločnosti TAPE s.r.o., ktoré zabezpečujú komunikáciu s návštevníkmi webu."
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-semibold", children: "6. Vaše práva" }),
      /* @__PURE__ */ jsx("p", { children: "V súvislosti s ochranou osobných údajov máte tieto práva:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside", children: [
        /* @__PURE__ */ jsx("li", { children: "právo na prístup k svojim údajom," }),
        /* @__PURE__ */ jsx("li", { children: "právo na opravu nepresných údajov," }),
        /* @__PURE__ */ jsx("li", { children: "právo na výmaz údajov (tzv. právo na zabudnutie)," }),
        /* @__PURE__ */ jsx("li", { children: "právo obmedziť spracúvanie," }),
        /* @__PURE__ */ jsx("li", { children: "právo namietať proti spracúvaniu," }),
        /* @__PURE__ */ jsx("li", { children: "právo podať sťažnosť na Úrad na ochranu osobných údajov." })
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-semibold", children: "7. Kontakt" }),
      /* @__PURE__ */ jsx("p", { children: "V prípade akýchkoľvek otázok alebo požiadaviek ohľadom vašich osobných údajov nás môžete kontaktovať na e-mailovej adrese:" }),
      /* @__PURE__ */ jsx("p", { children: /* @__PURE__ */ jsx("strong", { children: /* @__PURE__ */ jsx("a", { href: "mailto:info@tape.sk", children: "📧 info@tape.sk" }) }) }),
      /* @__PURE__ */ jsx("div", { className: "text-right", children: /* @__PURE__ */ jsx("button", { onClick: handleCloseModal, className: "mt-4 bg-brand text-white py-2 px-4 rounded", children: "Zavrieť" }) })
    ] }) }),
    /* @__PURE__ */ jsxs(Grid, { cols: 1, colsXl: 5, className: "flex flex-1 h-full justify-center items-center", children: [
      /* @__PURE__ */ jsx("div", { ref: leftRef, className: "xl:bg-gray-300 w-full h-full flex items-center justify-center col-span-2 pt-20 xl:py-20", children: /* @__PURE__ */ jsx(Title, { sizeLg: "8xl", sizeMd: "6xl", size: "4xl", className: "mt-20 mb-20 px-20 text-center xl:text-left", children: "Napíšte nám" }) }),
      /* @__PURE__ */ jsx("div", { ref: rightRef, className: "w-full h-full flex flex-col items-center justify-center col-span-3 xl:py-20", children: /* @__PURE__ */ jsxs(Form, { onSubmit: handleSend, className: "w-full sm:w-4/5 xl:w-4/5 max-w-[40rem] px-16", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "email",
            name: "email",
            type: "text",
            label: "E-mail",
            placeholder: "E-mail",
            value: mail,
            onChange: setMail,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          Input,
          {
            id: "phone",
            name: "phone",
            type: "text",
            label: "Telefonický kontakt",
            placeholder: "Telefonický kontakt",
            value: phone,
            onChange: setPhone,
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          Selectbox,
          {
            id: "service",
            label: "Mám záujem o:",
            options,
            required: true,
            value: service,
            onChange: (value) => {
              setService(value);
            }
          }
        ),
        /* @__PURE__ */ jsx(
          Textbox,
          {
            label: "Správa",
            value: message,
            onChange: (value) => {
              setMessage(value);
            },
            required: true
          }
        ),
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            id: "agreement",
            label: "Súhlasím so spracovaním mojich osobných údajov za účelom vybavenia mojej požiadavky",
            checked: agreement,
            onChange: (checked) => {
              setAgreement(checked);
            },
            required: true
          }
        ),
        /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("a", { href: "#", className: "text-slate-500 text-sm mt-2 hover:text-slate-800 transition duration-300", onClick: handleShowModal, children: "Zásady spracovania osobných údajov" }) }),
        /* @__PURE__ */ jsx("button", { className: `${isSending ? "bg-gray-300 cursor-not-allowed" : "bg-brand"} text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-brand/80 transition duration-300`, children: isSending ? "Posiela sa..." : "Odoslať" })
      ] }) })
    ] })
  ] });
};

const TopMenu = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    { name: "Domov", to: "/" },
    { name: "Bezpečnosť v zdravotníctve", to: "/zdravotnictvo" },
    { name: "Zábava", to: "/zabava" },
    { name: "Biznis", to: "/biznis" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "fixed z-50 top-0 left-0 w-full min-h-16 pt-2 md:h-20 text-white flex flex-col items-center bg-black/30 backdrop-blur-md px-6 md:px-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-row w-full items-center", children: [
      /* @__PURE__ */ jsx(TapeLink, { to: "/", children: /* @__PURE__ */ jsx("img", { src: "/logo.png", alt: "Logo", className: "h-12 md:h-16" }) }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "ml-auto md:hidden text-white",
          onClick: () => setMenuOpen(!menuOpen),
          children: menuOpen ? /* @__PURE__ */ jsx(X, { size: 28 }) : /* @__PURE__ */ jsx(Menu, { size: 28 })
        }
      ),
      /* @__PURE__ */ jsx("ul", { className: "hidden md:flex ml-auto space-x-6", children: links.map((link, index) => {
        const isActive = location.pathname === link.to;
        return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          TapeLink,
          {
            to: link.to,
            className: `text-xl border-b-2 border-transparent transition duration-300 ${isActive ? "border-brand" : "hover:border-white"}`,
            children: link.name
          }
        ) }, index);
      }) })
    ] }),
    menuOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden w-full flex flex-col items-center justify-center space-y-2 text-white text-2xl py-6", children: links.map((link, index) => /* @__PURE__ */ jsx(
      TapeLink,
      {
        to: link.to,
        className: "hover:text-gray-300 w-full text-center hover:bg-black/40 p-3",
        children: link.name
      },
      index
    )) })
  ] });
};

function HomePage() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap$1.registerPlugin(Observer);
      const tl = gsap$1.timeline();
      tl.fromTo(
        "#background",
        {
          opacity: 0
        },
        {
          opacity: 1,
          duration: 0.3,
          delay: 0,
          ease: "power2.out"
        }
      );
      tl.fromTo(
        "#background",
        {
          scale: 3,
          rotation: 0,
          transformOrigin: "center"
        },
        {
          scale: 1,
          rotation: 90,
          duration: 1,
          delay: 0,
          ease: "power2.inOut"
        }
      );
      gsap$1.set("#text", { opacity: 0 });
      gsap$1.set("#home-title", { opacity: 0 });
      gsap$1.set("#logo", { scale: 1 });
      scrollTo(0, 0);
      tl.to("#text", {
        opacity: 1,
        duration: 0.5,
        delay: -1
      });
      tl.fromTo(
        "#menu li",
        {
          right: "30vw",
          opacity: 0
        },
        {
          right: "0",
          opacity: 1,
          duration: 0.5,
          stagger: 0.05,
          delay: -0.2,
          ease: "power2.out"
        }
      );
      tl.to("#logo", {
        scale: 0.33,
        duration: 0.8,
        delay: -1.2,
        top: 0,
        ease: "power2.out"
      });
      tl.to("#home-title", {
        opacity: 1,
        duration: 0.8,
        delay: -0.8,
        ease: "power2.out"
      });
      tl.eventCallback("onComplete", () => {
        gsap$1.set("body", { overflow: "visible" });
      });
    }
  }, []);
  return /* @__PURE__ */ jsxs("div", { id: "homepage", children: [
    /* @__PURE__ */ jsx(TopMenu, {}),
    /* @__PURE__ */ jsx(Home, {}),
    /* @__PURE__ */ jsx(Offers, {}),
    /* @__PURE__ */ jsx(About, {}),
    /* @__PURE__ */ jsx(Team, {}),
    /* @__PURE__ */ jsx(Contact, {}),
    /* @__PURE__ */ jsx(ContactForm, {}),
    /* @__PURE__ */ jsx(DotMenu, {})
  ] });
}

const Header = ({ img, children, className }) => {
  return /* @__PURE__ */ jsxs("header", { className: `w-screen relative ${className ?? ""}`, children: [
    img && /* @__PURE__ */ jsx("img", { src: img, alt: "Header", className: "w-full h-full object-cover" }),
    children
  ] });
};

const ImageWithDescription = ({
  title,
  image,
  description,
  className = "",
  height = "200px"
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: `relative group overflow-hidden rounded-md shadow-lg inline-block ${className}`,
    style: { height },
    children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0", children: /* @__PURE__ */ jsx(
        "img",
        {
          src: image,
          alt: description,
          title,
          className: "w-full h-full object-cover"
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 bg-brand text-white text-center py-2 z-10", children: /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: title }) }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute inset-0 bg-brand text-white flex items-center justify-center text-center p-4 opacity-0 \n        group-hover:opacity-100 transition-opacity duration-300 z-20",
          children: /* @__PURE__ */ jsx("p", { className: "text-md font-semibold", children: description })
        }
      )
    ]
  }
);

const Health = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopMenu, {}),
    /* @__PURE__ */ jsx(Header, { className: "h-[80vh] relative z-20", img: "./pages/health/header.jpeg", children: /* @__PURE__ */ jsx(Cover, { children: /* @__PURE__ */ jsx(Title, { color: "light", size: "3xl text-center", children: "Bezpečnosť v zdravotníctve" }) }) }),
    /* @__PURE__ */ jsx(Section, { fullHeight: false, className: "px-10 lg:px-20 xl:px-60 py-20 overflow-visible", children: /* @__PURE__ */ jsx("div", { className: "relative z-20", children: /* @__PURE__ */ jsxs("p", { children: [
      /* @__PURE__ */ jsx("span", { className: "text-3xl block font-semibold", children: "V našej firme veríme, že bezpečnosť pacientov je na prvom mieste. Preto vám prinášame špičkové riešenia na identifikáciu a označovanie v zdravotníckych zariadeniach, ktoré zvyšujú úroveň starostlivosti a znižujú riziko chýb." }),
      /* @__PURE__ */ jsxs("span", { className: "block text-2xl mt-5", children: [
        "Sme oficiálnym distribútorom spoločnosti ",
        /* @__PURE__ */ jsx(TapeLink, { className: "text-brand text-[1rem] !font-bold", to: "https://www.pdcorp.com", children: "PDC Precision Dynamics Corporation" }),
        " (patriaceho do skupiny Brady Corporation) pre Slovenskú republiku.",
        /* @__PURE__ */ jsx("br", {}),
        "Oficiálne vyhlásenie spoločnosti PDC (Brady) nájdete ",
        /* @__PURE__ */ jsx("a", { className: "text-brand font-semibold", href: "PDC_Vyhlasenie.pdf", target: "_blank", children: "TU" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("span", { className: "block text-xl mt-5", children: "Precision Dynamics Corporation je najväčším celosvetovým výrobcom identifikačných náramkov a etikiet na označovanie liekov a striekačiek. Poskytuje stopercentnú kvalitu, pokiaľ ide o služby, dizajn a výrobu. Potvrdzujú to aj certifikáty ISO-9001:2015 a ISO-13485:2016, ISO-14001:2015 hlavného závodu v San Fernando v Kalifornii v USA. PDC ako prvá na svete uviedla na trh identifikačné náramky v roku 1956." }),
      /* @__PURE__ */ jsx("span", { className: "block text-xl mt-5", children: "Identifikácia ovplyvňuje všetky aspekty klinickej starostlivosti, od skúsenosti pacientov až po spokojnosť zdravotníckeho personálu. Kvalita identifikačných riešení je kľúčová pre bezpečnosť pacientov. Produkty od PDC sú navrhnuté tak, aby zlepšili klinické výsledky v kritických bodoch starostlivosti o pacientov. Náramky a štítky sú vyrobené s dôrazom na maximálnu bezpečnosť, pevnosť a trvanlivosť." })
    ] }) }) }),
    /* @__PURE__ */ jsx(Section, { fullHeight: false, className: "relative z-20 min-h-screen py-10", children: /* @__PURE__ */ jsxs(Grid, { className: "h-full", cols: 1, cols2Xl: 10, children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-5 lg:col-span-3 text-slate-700 p-10 flex flex-col justify-center", children: [
        /* @__PURE__ */ jsx(Title, { size: "3xl", className: "my-10", children: "Identifikačné náramky pre pacientov" }),
        /* @__PURE__ */ jsx("p", { className: "mb-5", children: "Identifikačné náramky pre pacientov poskytujú jasné a presné informácie o každom pacientovi. Vďaka nim zdravotnícky personál rýchlo a jednoducho identifikuje pacienta, čo zvyšuje bezpečnosť a efektivitu starostlivosti." }),
        /* @__PURE__ */ jsx("p", { className: "mb-5", children: "Dnes dokážeme v oblasti identifikácie uspokojiť akékoľvek požiadavky - riešenia na termálnu potlač (s čiarovým a QR kódom), popisovateľné náramky, náramky s vkladacím štítkom, náramky s prelepovacou fóliou, zabezpečujeme identifikáciu matiek a novorodencov aj náramky na TRIAGE." }),
        /* @__PURE__ */ jsx("p", { className: "mb-5", children: "Identifikačné náramky pre pacientov neobsahujú latex, ftaláty, sú antimikrobiálne a odolné proti alkoholu, vode, mydlu, dezinfekciám a taktiež väčšine kvapalín, ktoré sa v zdravotníctve používajú." }),
        /* @__PURE__ */ jsx("p", { children: "Ponúkame široké portfólio produktov v rôznych farbách, veľkostiach, materiáloch podľa individuálnych potrieb." }),
        /* @__PURE__ */ jsxs("p", { className: "font-semibold mt-6 text-2xl", children: [
          "Pre viac informácií nám zavolajte alebo ",
          /* @__PURE__ */ jsx("a", { className: "text-brand", href: "#", onClick: scrollToForm, children: "vyplňte kontaktný formulár" }),
          "."
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-span-5 lg:col-span-7 flex flex-col justify-center", children: /* @__PURE__ */ jsxs(Grid, { cols: 1, colsSm: 2, colsLg: 3, cols2Xl: 3, children: [
        /* @__PURE__ */ jsx(
          ImageWithDescription,
          {
            className: "w-80 m-auto mb-10",
            height: "400px",
            title: "Na termálnu potlač/s čiarovým alebo QR kódom",
            image: "./pages/health/scanner.jpg",
            description: "Identifikačné náramky pre pacientov, ktoré využívajú termotlač na zabezpečenie správnej identifikácie a bezpečnosti pacientov. Náramky majú za cieľ zlepšiť identifikáciu pacientov, komunikáciu a bezpečnosť pri operáciách a medikamentóznej liečbe.\nVysoká kvalita tlače zaručuje spoľahlivé skenovanie čiarových a QR kódov.\nNáramky sú odolné voči svetlu, vlhkosti, čistiacim prostriedkom a tekutinám.\nSú vyrobené z mäkkého, ľahkého materiálu, ktorý je príjemný na nosenie a neobsahuje latex. Majú antimikrobiálnu vrstvu, ktorá chráni povrch proti prenosu baktérií."
          }
        ),
        /* @__PURE__ */ jsx(
          ImageWithDescription,
          {
            className: "w-80 m-auto mb-10",
            height: "400px",
            title: "Popisovateľné náramky",
            image: "./pages/health/popisovatelne.png",
            description: "Popisovateľné náramky sú bezproblémovým riešením pre identifikáciu pacienta v akomkoľvek zdravotníckom zariadení! Pružné a všestranné popisovateľné  náramky sú ideálnou voľbou pre krátkodobé i dlhodobé príjmy pacientov. Jednoduchá manipulácia a možnosť rýchlej vizuálnej pozitívnej identifikácie je výhodou i pre špeciálne oddelenia ako je pohotovosť. Vyberte si zo širokej škály farieb."
          }
        ),
        /* @__PURE__ */ jsx(
          ImageWithDescription,
          {
            className: "w-80 m-auto mb-10",
            height: "400px",
            title: "Náramky s prelepovacou fóliou",
            image: "./pages/health/prelepovacie.png",
            description: "Náramky s prelepovacou fóliou majú jedinečný samolepiaci, protiodleskový štít, takže ich možno používať s laserovými či termálnymi etiketami alebo štítkami. Náramky chránia údaje pacientov pred prenikaním tekutín a poskytujú vynikajúce čítacie rýchlosti čiarových kódov. Ochranné náramky sú odolné voči vode, trvanlivé a pevné, no zároveň ľahké a pohodlné."
          }
        ),
        /* @__PURE__ */ jsx(
          ImageWithDescription,
          {
            className: "w-80 m-auto mb-10",
            height: "400px",
            title: "S vkladacím štítkom",
            image: "./pages/health/vkladacie.png",
            description: "Náramky s vkladacím štítkom sú pohodlné a jednoduché na používanie. Štítok je nositeľom údajov o pacientovi, ktorý sa vloží do priehľadného ochranného puzdra. Sú umývateľné, ľahké, pevné, nemajú ostré hrany, sú vhodné aj pre citlivú pleť."
          }
        ),
        /* @__PURE__ */ jsx(
          ImageWithDescription,
          {
            className: "w-80 m-auto mb-10",
            height: "400px",
            title: "Pre matku a dieťa",
            image: "./pages/health/pre_matku_a_dieta.png",
            description: "Identifikačné náramky v pôrodniciach pre matku a dieťa sú obľúbenou voľbou na trhu. Cieľom je zaistiť neomylnú identifikáciu matky, novorodenca, prípadne ďalších rodinných príslušníkov. Každý pár náramkov je označený jedinečným alfanumerickým kódom pre jednoduché spárovanie matky a dieťaťa. Sú umývateľné, ľahké, nemajú ostré hrany, vhodné pre kojencov aj citlivú pleť."
          }
        ),
        /* @__PURE__ */ jsx(
          ImageWithDescription,
          {
            className: "w-80 m-auto mb-10",
            height: "400px",
            title: "Termálne tlačiarne",
            image: "./pages/health/termalne_tlaciarne.png",
            description: "Zabezpečujeme dodávku tlačiarní pre termálnu potlač identifikačných náramkov aj etikiet.  Vyznačujú sa malými rozmermi. Sú praktické, čo umožňuje užívateľom jednoduchú manipuláciu s rolkami. Termálne tlačiarne TSC TDP-225W na identifikáciu pacientov používa mnoho nemocníc na Slovensku."
          }
        )
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(Section, { fullHeight: false, className: "bg-gray-300 min-h-screen py-10", children: /* @__PURE__ */ jsxs(Grid, { cols: 1, colsXl: 2, className: "h-full", children: [
      /* @__PURE__ */ jsxs("div", { className: "order-2 xl:order-1 w-full h-full flex flex-col justify-center px-10", children: [
        /* @__PURE__ */ jsxs("p", { className: "mb-5", children: [
          "Ponúkame špeciálne etikety na označovanie, ktoré zabezpečujú správne označenie a identifikáciu liekov a striekačiek.",
          /* @__PURE__ */ jsx("br", {}),
          "Tieto etikety pomáhajú predchádzať omylom a zaisťujú, že každý pacient dostane správnu dávku a typ liečiva."
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "mb-5", children: [
          "Sme dodávateľom  komplexného, uceleného systému etikiet, pričom farebné kódovanie vychádza z medzinárodných noriem.",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Využitie" }),
          ": operačné sály, OAIM, ostatné oddelenia, laboratória, lekárne, záchranky"
        ] }),
        /* @__PURE__ */ jsx("span", { className: "block text-xl mb-2", children: "Naše etikety sú:" }),
        /* @__PURE__ */ jsxs("ul", { className: "list-disc list-inside text-md", children: [
          /* @__PURE__ */ jsx("li", { children: "odolné proti rozmazaniu" }),
          /* @__PURE__ */ jsx("li", { children: "odolné voči oderu a vode" }),
          /* @__PURE__ */ jsx("li", { children: "majú jednoduché a pohodlné použitie" }),
          /* @__PURE__ */ jsx("li", { children: "štandardné alebo na zákazku" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-20 h-80 inline-block object-cover object-bottom shadow-2xl overflow-visible bg-brand", children: /* @__PURE__ */ jsx("div", { className: "relative -top-3 left-3 h-full max-w-full bg-white shadow-2xl text-center", children: /* @__PURE__ */ jsx("img", { src: "./pages/health/etikety.png", className: "h-full w-auto inline-block object-contain" }) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "order-1 xl:order-2 mb-20 xl:mb-0 w-full h-full text-slate-700 flex flex-col justify-center text-right relative", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-brand ml-10 xl:ml-20 py-10 shadow-xl", children: /* @__PURE__ */ jsx(Title, { color: "light", size: "2xl", sizeMd: "4xl", sizeXl: "6xl", size2Xl: "6xl", className: "border-r-8 border-slate-200 pr-6 mr-10", children: "Etikety na označovanie" }) }),
        /* @__PURE__ */ jsxs("p", { className: "mt-20 text-center text-2xl font-bold", children: [
          "Katalóg predtlačených etikiet k dispozícii - ",
          /* @__PURE__ */ jsx("a", { className: "text-brand uppercase", href: "#", onClick: scrollToForm, children: "vyplňte formulár" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(ContactForm, {})
  ] });
};

const ProductCard = ({ className, title, description, image, link }) => {
  return (
    /*
    <div className={`w-full grid grid-cols-10 shadow-2xl rounded-xl overflow-hidden relative transform hover:-translate-x-2 transition-transform ${className ?? ""}`}>
    	<div className={`col-span-2 ${invert ? "order-2" : ""}`}>
    		<img src={image} alt={title} className="w-full h-auto object-cover object-center"/>
    	</div>
    	<div className={`col-span-8 pl-10 flex flex-col justify-center ${invert ? "order-1" : ""}`}>
    		<h3 className="text-xl font-semibold mb-2">{title}</h3>
    		<p>{description}</p>
    	</div>
    </div>
    */
    /* @__PURE__ */ jsxs("div", { className: `card relative group h-full overflow-hidden ${className ?? ""}`, children: [
      link && /* @__PURE__ */ jsx(Link, { to: link, className: "absolute z-50 top-0 left-0 right-0 bottom-0" }),
      /* @__PURE__ */ jsx(Cover, { className: "h-full opacity-0 group-hover:opacity-90 z-40 transition-all duration-[900ms]" }),
      /* @__PURE__ */ jsx("div", { className: "card-image h-[calc(100%-4rem)] flex justify-center items-center", children: /* @__PURE__ */ jsx("img", { src: image, alt: title, className: "w-full h-full object-contain scale-[0.8] transform opacity-80 group-hover:opacity-100 group-hover:scale-100 duration-[900ms]" }) }),
      /* @__PURE__ */ jsxs("div", { className: `
				card-content
				text-center p-4
				bg-brand text-white shadow-md
				absolute z-40
				left-1 right-1 xl:bottom-1
				bottom-0
				transition-all duration-300
				group-hover:block
			`, children: [
        /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold h-6", children: title }),
        /* @__PURE__ */ jsx("p", { className: "transition-all duration-[700ms] h-0 overflow-hidden group-hover:h-40 md:group-hover:h-44 xl:group-hover:h-50 xl:group-hover:mt-8 text-xs xl:text-sm flex flex-col justify-center items-center align-middle", children: description })
      ] })
    ] })
  );
};

const Entertainment = () => {
  return /* @__PURE__ */ jsx(Section, { fullHeight: false, className: "overflow-visible pt-20 min-h-screen", children: /* @__PURE__ */ jsxs(Grid, { className: "xl:h-[calc(100vh-5rem)] min-h-[900px] relative z-20", colsXs: 1, colsMd: 2, colsXl: 3, children: [
    /* @__PURE__ */ jsx(
      ProductCard,
      {
        link: "/zabava/karty",
        className: "h-full",
        title: "Karty",
        description: "Plastové karty sú ideálnym riešením pre darčekové a vernostné karty. Slúžia aj na identifikáciu návštevníkov na rôznych podujatiach. Ponúkame karty s plnofarebnou potlačou aj bez potlače, QR kódom a čipmi, ktoré zabezpečia bezpečný a efektívny systém vstupu. Spoľahlivé a praktické. Plastové karty zaručia bezproblémovú organizáciu podujatí a sú skvelým nástrojom pre vernostné programy.",
        image: "./pages/entertainment/new/karty.png"
      }
    ),
    /* @__PURE__ */ jsx(
      ProductCard,
      {
        link: "/zabava/latkove-naramky",
        className: "h-full",
        title: "Látkové náramky",
        description: "Látkové náramky sú štýlovou voľbou pre festivaly, koncerty a športové podujatia. Vyberte si z vyšívaných a saténových náramkov s plnofarebnou potlačou, rôznymi uzávermi a možnosťami opakovaného použitia. Skvelý suvenír, ktorý vydrží.",
        image: "./pages/entertainment/new/latkove.png"
      }
    ),
    /* @__PURE__ */ jsx(
      ProductCard,
      {
        link: "/zabava/naramky",
        className: "h-full",
        title: "Vinylové, plastové a tyvek náramky",
        description: "Vinylové, plastové i Tyvek náramky sú určené na označovanie návštevníkov na diskotékach, festivaloch, kúpaliskách či hromadných podujatiach. Sú neprenosné, čo zvyšuje bezpečnosť a znižuje možné straty pri organizácii masových akcií. Cenová dostupnosť je benefitom a môžu byť alternatívou k látkovým náramkom.",
        image: "./pages/entertainment/new/tyvek.png"
      }
    ),
    /* @__PURE__ */ jsx(
      ProductCard,
      {
        link: "/zabava/silikonove-naramky",
        className: "h-full",
        title: "Silikónové náramky",
        description: "Silikónové náramky sa používajú na propagáciu značky alebo podujatia, ako reklamné a darčekové predmety. Sú vodeodolné a trvácne. V ponuke máme rôzne šírky, prevedenia a veľkosti pre deti aj dospelých.",
        image: "./pages/entertainment/new/silikonove.png"
      }
    ),
    /* @__PURE__ */ jsx(
      ProductCard,
      {
        link: "/zabava/snurky",
        className: "h-full",
        title: "Šnúrky na krk",
        description: "Šnúrky na krk sú skvelým reklamným prvkom na spropagovanie vašej značky alebo sponzorov. Vyberte si saténové šnúrky alebo textilné šnúrky s plnofarebnou potlačou či bez potlače. S rôznymi typmi karabín, puzdier a bezpečnostných zapínaní sú perfektné pre identifikačné karty, backstage pasy a kľúče. Ideálne riešenie pre každé podujatie.",
        image: "./pages/entertainment/new/snurky.png"
      }
    ),
    /* @__PURE__ */ jsx(
      ProductCard,
      {
        link: "/zabava/puzdra-menovky-rolery",
        title: "Puzdrá, menovky, rolery",
        description: "Výborný doplnok ku šnúrkam na krk alebo PVC kartám.\nMenovky sú neoceniteľným nástrojom na budovanie vzťahov na hromadných podujatiach. Umožňujú rýchlu vzájomnú identifikáciu, čo prispieva k ľahšiemu kontaktu a zvýšeniu bezpečnosti.\nRolery sú praktickým držiakom na visačku s identifikačnou kartou. Je možné ich umiestniť kdekoľvek na oblečení či na šnúrku na krk. \nV našej ponuke nájdete rôzne veľkosti, materiály a prevedenia.",
        image: "./pages/entertainment/new/puzdra.png"
      }
    ),
    /* @__PURE__ */ jsx(
      ProductCard,
      {
        link: "/zabava/rfid",
        title: "RFID",
        description: "Ponúkame širokú škálu RFID produktov vrátane čipových kariet, látkových a silikónových náramkov a kľúčeniek. RFID riešenia umožňujú bezhotovostný styk na festivaloch, koncertoch, v aquaparkoch a na kúpaliskách, čím zvyšujú pohodlie a bezpečnosť vašich zákazníkov. \nUľahčite si život s našimi inovatívnymi RFID riešeniami.",
        image: "./pages/entertainment/new/rfid.png"
      }
    ),
    /* @__PURE__ */ jsx(
      ProductCard,
      {
        link: "/zabava/eko-produkty",
        title: "EKO produkty",
        description: "Posuňte svoje podujatia na vyššiu úroveň s našimi ekologickými šnúrkami, náramkami a kartami! Naša ponuka zahŕňa bambusové, papierové a recyklované plastové šnúrky.\nPonúkame náramky šetrné k životnému prostrediu, vyrobené z recyklovaných PVC fliaš. Tieto náramky sú odolné, trvácne a vhodné na dlhodobé používanie.\nKolekcia ekologických kariet zahŕňa rôzne typy materiálov (PET-G, Graspaper, Eco Paper a 100% recyklované PVC). ",
        image: "./pages/entertainment/new/eko.png"
      }
    ),
    /* @__PURE__ */ jsx(
      ProductCard,
      {
        link: "/zabava/tlaciarne",
        title: "Tlačiarne",
        description: "Vytlačte čiarové kódy, text, logá a jedinečné variabilné údaje na každý náramok priamo na mieste podujatia. Pri atrakciách s časovanými aktivitami je možné termálne náramky s čiarovými kódmi vytlačiť aj s dátumom a časom vstupu.",
        image: "./pages/entertainment/new/tlaciarne.png"
      }
    ),
    /* @__PURE__ */ jsx("div", {})
  ] }) });
};

const ProductsNav = () => {
  const active = window.location.pathname;
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const products = [
    {
      name: "Karty",
      img: "/pages/entertainment/new/karty.png",
      to: "/zabava/karty",
      order: 1
    },
    {
      name: "Látkové náramky",
      img: "/pages/entertainment/new/latkove.png",
      to: "/zabava/latkove-naramky",
      order: 2
    },
    {
      name: "Vinylové, plastové a tyvek náramky",
      img: "/pages/entertainment/new/tyvek.png",
      to: "/zabava/naramky",
      order: 3
    },
    {
      name: "Silikónové náramky",
      img: "/pages/entertainment/new/silikonove.png",
      to: "/zabava/silikonove-naramky",
      order: 4
    },
    {
      name: "Šnúrky na krk",
      img: "/pages/entertainment/new/snurky.png",
      to: "/zabava/snurky",
      order: 5
    },
    {
      name: "Puzdrá, menovky, rolery",
      img: "/pages/entertainment/new/puzdra.png",
      to: "/zabava/puzdra-menovky-rolery",
      order: 6
    },
    {
      name: "RFID",
      img: "/pages/entertainment/new/rfid.png",
      to: "/zabava/rfid",
      order: 7
    },
    {
      name: "EKO produkty",
      img: "/pages/entertainment/new/eko.png",
      to: "/zabava/eko-produkty",
      order: 8
    },
    {
      name: "Tlačiarne",
      img: "/pages/entertainment/new/tlaciarne.png",
      to: "/zabava/tlaciarne",
      order: 9
    }
  ];
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const activeElement = scrollContainer.querySelector(`[href='${active}']`);
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
      updateScrollButtons();
    }
  }, [active]);
  const updateScrollButtons = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      setCanScrollLeft(scrollContainer.scrollLeft > 0);
      setCanScrollRight(
        scrollContainer.scrollLeft <= scrollContainer.scrollWidth - scrollContainer.clientWidth - 20
      );
    }
  };
  const handleClick = useCallback((event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsOpen(!isOpen);
  }, [isOpen]);
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        className: `hidden sm:block absolute top-0 left-0 border-0 h-full transform z-40 px-2 rounded-none bg-gray-200 hover:bg-gray-300 bg-opacity-80 pl-4 transition-opacity duration-[500ms] ${canScrollLeft ? "opacity-1" : "opacity-0"}`,
        onClick: () => {
          scrollContainerRef.current?.scrollBy({
            left: -scrollContainerRef.current.clientWidth / 2,
            behavior: "smooth"
          });
        },
        children: /* @__PURE__ */ jsx("span", { className: "block w-6 h-6 bg-transparent border-l-4 border-t-4 border-black -rotate-45" })
      }
    ),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "w-full relative overflow-x-auto scrollbar-hide bg-white shadow-xl",
        ref: scrollContainerRef,
        onScroll: updateScrollButtons,
        children: /* @__PURE__ */ jsxs("div", { className: `flex ${isOpen ? "h-auto" : "h-14"} sm:h-auto flex-col sm:flex-row whitespace-nowrap relative`, children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#",
              onClick: handleClick,
              className: "absolute right-10 h-10 top-2 z-40 flex flex-col item-center justify-center space-y-1 sm:hidden bg-gray-600 bg-opacity-60 px-2 rounded-lg border-2 border-gray-500 hover:bg-gray-500 hover:bg-opacity-60",
              children: [
                /* @__PURE__ */ jsx("span", { className: `block w-8 h-1 bg-white transition-all duration-300 top-0 relative ${isOpen && "transform top-[8px] rotate-45"}` }),
                /* @__PURE__ */ jsx("span", { className: `block w-8 h-1 bg-white transition-all duration-300 ${isOpen && "opacity-0"}` }),
                /* @__PURE__ */ jsx("span", { className: `block w-8 h-1 bg-white transition-all duration-300 top-0 relative ${isOpen && "transform -top-[8px] -rotate-45"}` })
              ]
            }
          ),
          products.sort((a, b) => {
            if (a.to === active) return -1;
            if (b.to === active) return 1;
            return a.order - b.order;
          }).map((product, index) => /* @__PURE__ */ jsx("div", { className: `
								product-link-wrapper
								min-w-[100vw] w-[100vw]
								sm:min-w-[33.33vw] sm:w-[33.33vw]
								lg:min-w-[25vw] lg:w-[25vw]
								2xl:min-w-[20vw] xl:w-[20vw]
								h-14 sm:h-40 px-5
								flex flex-col
								items-center justify-center
								overflow-visible
								${active === product.to ? "bg-brand sm:bg-transparent" : ""}
							`, children: /* @__PURE__ */ jsxs(
            Link,
            {
              to: product.to,
              className: `
										product-link
										w-full h-14 sm:h-40 overflow-hidden
										flex flex-row sm:flex-col
										items-center justify-start sm:justify-end
										text-center rounded-lg
										whitespace-normal
										group
										relative
										hover:text-white sm:hover:text-slate-800
										${active === product.to ? "active text-white sm:text-slate-800" : ""}
									`,
              children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: product.img,
                    alt: product.name,
                    className: `
											object-contain object-center
											product-img
											h-full
											w-16 sm:w-auto
											sm:h-[calc(100%-4rem)]
											mr-4 sm:mr-0
											sm:pt-4 sm:mt-0
											sm:absolute sm:top-0 sm:bottom-0
											sm:left-1/2 sm:-translate-x-1/2 sm:group-hover:scale-[1.15]
											${active === product.to && "sm:scale-[1.15]"}
										`
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: `
											font-semibold relative z-30 mb-1 sm:transition-all sm:duration-300 h-12 flex items-end
											${active === product.to ? "sm:border-b-2 border-brand" : "sm:group-hover:opacity-0"}
										`,
                    children: product.name
                  }
                )
              ]
            },
            index
          ) }))
        ] })
      }
    ),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: `hidden sm:block absolute top-0 right-0 border-0 h-full transform z-40 px-2 rounded-none bg-gray-200 hover:bg-gray-300 bg-opacity-80 pr-4 transition-opacity duration-[500ms] ${canScrollRight ? "opacity-1" : "opacity-0"}`,
        onClick: () => {
          scrollContainerRef.current?.scrollBy({
            left: scrollContainerRef.current.clientWidth / 2,
            behavior: "smooth"
          });
        },
        children: /* @__PURE__ */ jsx("span", { className: "block w-6 h-6 bg-transparent border-l-4 border-t-4 border-black rotate-[135deg]" })
      }
    )
  ] });
};

const ImageModal = ({ images, currentIndex, onClose, onNext, onPrev }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      setIsMounted(false);
    };
  }, [onNext, onPrev, onClose]);
  const [touchStartX, setTouchStartX] = useState(null);
  const handleTouchStart = (e) => {
    setTouchStartX(e.changedTouches[0].clientX);
  };
  const handleTouchEnd = (e) => {
    if (touchStartX !== null) {
      const distance = e.changedTouches[0].clientX - touchStartX;
      const swipeThreshold = 50;
      if (distance > swipeThreshold) {
        onPrev();
      } else if (distance < -50) {
        onNext();
      }
    }
  };
  if (!isMounted) return null;
  return createPortal(
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "fixed inset-0 z-[9999] bg-black bg-opacity-90 w-screen h-screen flex items-center justify-center select-none",
        onClick: onClose,
        onTouchStart: handleTouchStart,
        onTouchEnd: handleTouchEnd,
        children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute top-0 left-0 w-full h-20 bg-black opacity-50 z-[999999]", children: [
            /* @__PURE__ */ jsxs("div", { className: "absolute top-5 left-1/2 -translate-x-1/2 text-white text-xl border-0 px-4 py-1 z-[99999]", children: [
              currentIndex + 1,
              " / ",
              images.length
            ] }),
            /* @__PURE__ */ jsx("button", { onClick: onClose, className: "absolute top-5 right-5 text-white text-3xl border-0 px-4 py-1 hover:bg-gray-500", children: "✕" })
          ] }),
          images.length > 1 && /* @__PURE__ */ jsx(
            "div",
            {
              onClick: (e) => {
                e.stopPropagation();
                onPrev();
              },
              className: "absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer p-2 w-auto group",
              children: /* @__PURE__ */ jsx(ChevronLeft, { size: "10xl", className: "group-hover:text-white text-gray-400 transform scale-150 cursor-pointer p-2 w-12" })
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "relative flex items-center justify-center",
              onClick: (e) => e.stopPropagation(),
              children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: images[currentIndex],
                  className: "max-w-[calc(100vw-10rem)] max-h-[calc(100vh-15rem)] object-contain rounded shadow-2xl"
                }
              )
            }
          ),
          images.length > 1 && /* @__PURE__ */ jsx("div", { onClick: (e) => {
            e.stopPropagation();
            onNext();
          }, className: "absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer p-2 w-auto group", children: /* @__PURE__ */ jsx(ChevronRight, { size: "10xl", className: "group-hover:text-white text-gray-400 transform scale-150 cursor-pointer p-2 w-12" }) })
        ]
      }
    ),
    document.body
    // <== tu sa stane mágia
  );
};

const Product = ({ title, shortDescription, description, image, setMaxHeight, maxHeight, onlyImage = false }) => {
  const images = Array.isArray(image) ? image : [image];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const productRef = useRef(null);
  const currentImageRef = useRef(null);
  const previousImageRef = useRef(null);
  const [previousIndex, setPreviousIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const openModal = (index) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };
  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };
  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };
  useEffect(() => {
    if (!isFirstLoad && images.length > 1 && currentImageRef.current && previousImageRef.current) {
      const timeline = gsap.timeline();
      timeline.fromTo(
        previousImageRef.current,
        { x: "0%", opacity: 1 },
        { x: direction === 1 ? "-100%" : "100%", opacity: 0, duration: 0.5, ease: "power2.out" }
      );
      timeline.fromTo(
        currentImageRef.current,
        { x: direction === 1 ? "100%" : "-100%" },
        { x: "0%", duration: 0.5, ease: "power2.out" },
        "<"
      );
    }
  }, [currentIndex, direction, isFirstLoad, images.length]);
  useEffect(() => {
    if (productRef.current && setMaxHeight) {
      const height = productRef.current.offsetHeight;
      setMaxHeight(height);
    }
  }, [setMaxHeight]);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref: productRef,
      className: "relative bg-white shadow-lg rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300",
      style: { height: maxHeight ? `${maxHeight}px` : "auto" },
      children: [
        onlyImage && /* @__PURE__ */ jsx("div", { className: "p-5", children: /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 text-center", children: title }) }),
        /* @__PURE__ */ jsxs("div", { className: `relative w-full ${onlyImage ? "h-[calc(100%-5rem)]" : "h-64"} overflow-hidden flex`, children: [
          images.length > 1 ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("div", { ref: previousImageRef, className: "absolute inset-0 w-full h-full flex", children: /* @__PURE__ */ jsx("img", { src: images[previousIndex], alt: title, className: "max-w-full max-h-full m-auto" }) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                ref: currentImageRef,
                className: `absolute inset-0 w-full h-full flex transition-opacity ${isFirstLoad ? "opacity-100" : ""}`,
                children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: images[currentIndex],
                    alt: title,
                    className: "max-w-full max-h-full m-auto cursor-pointer",
                    onClick: () => openModal(currentIndex)
                  }
                )
              }
            )
          ] }) : /* @__PURE__ */ jsx(
            "img",
            {
              src: images[0],
              alt: title,
              className: "max-w-full max-h-[350px] m-auto cursor-pointer",
              onClick: () => openModal(0)
            }
          ),
          images.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  setDirection(-1);
                  setIsFirstLoad(false);
                  setPreviousIndex(currentIndex);
                  setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
                },
                className: "absolute bg-transparent rounded-none border-0 border-gray-400 border-t-2 border-l-2 left-4 top-1/2 -translate-y-1/2 z-50 -rotate-45 p-0 w-4 h-4 flex items-center justify-center focus:outline-none hover:border-gray-700"
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                onClick: () => {
                  setDirection(1);
                  setIsFirstLoad(false);
                  setPreviousIndex(currentIndex);
                  setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                },
                className: "absolute bg-transparent rounded-none border-0 border-gray-400 border-t-2 border-r-2 right-4 top-1/2 -translate-y-1/2 z-50 rotate-45 p-0 w-4 h-4 flex items-center justify-center focus:outline-none hover:border-gray-700"
              }
            )
          ] }),
          images.length > 1 && /* @__PURE__ */ jsx("div", { className: "absolute bottom-1 left-1/2 -translate-x-1/2 flex space-x-2 z-50 bg-black px-3 py-2 rounded-full bg-opacity-40", children: images.map((_, index) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                setDirection(index > currentIndex ? 1 : -1);
                setIsFirstLoad(false);
                setPreviousIndex(currentIndex);
                setCurrentIndex(index);
              },
              className: `w-2 h-2 focus:outline-none p-0 border-0 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-gray-500 scale-125" : "bg-gray-200 hover:bg-gray-500"}`
            },
            index
          )) })
        ] }),
        !onlyImage && /* @__PURE__ */ jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 text-center", children: title }),
          shortDescription && /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mt-2", children: shortDescription }),
          description && /* @__PURE__ */ jsx("ul", { className: "mt-2 text-gray-600 space-y-1 list-disc pl-2", children: description.map((line, index) => /* @__PURE__ */ jsx("li", { className: "text-sm", children: line }, index)) })
        ] }),
        isModalOpen && /* @__PURE__ */ jsx(
          ImageModal,
          {
            images,
            currentIndex: activeIndex,
            onClose: () => setIsModalOpen(false),
            onPrev: prevImage,
            onNext: nextImage
          }
        )
      ]
    }
  );
};

const Subpage = (props) => {
  const { description, cols, options } = props;
  const withCategories = props.withCategories;
  const sectionsRef = useRef([]);
  const [maxHeight, setMaxHeight] = useState(0);
  const updateMaxHeight = (newHeight) => {
    setMaxHeight((prevHeight) => Math.max(prevHeight, newHeight));
  };
  useEffect(() => {
    const ctx = gsap.context(() => {
      sectionsRef.current.forEach(
        (section) => gsap.fromTo(
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
              toggleActions: "play none none reverse"
            }
          }
        )
      );
    });
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(ProductsNav, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative w-full lg:w-4/5 m-auto h-full pt-20 pb-10 flex-1", children: [
      description && /* @__PURE__ */ jsx("p", { className: "text-xl font-semibold px-10 pb-20 text-center block", children: description }),
      withCategories ? props.products.map((category, categoryIndex) => /* @__PURE__ */ jsxs("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-center mb-6", children: category.category }),
        /* @__PURE__ */ jsx(Grid, { cols: 1, colsMd: 2, colsXl: 3, className: "gap-10 px-6 flex-1", children: category?.items?.map((product, productIndex) => /* @__PURE__ */ jsx("div", { className: product.colSpan ? `col-span-${product.colSpan}` : "", ref: (el) => {
          if (el) sectionsRef.current[categoryIndex * 10 + productIndex] = el;
        }, children: /* @__PURE__ */ jsx(
          Product,
          {
            title: product.title,
            shortDescription: product.short_description,
            description: product.description,
            image: product.image,
            maxHeight,
            setMaxHeight: updateMaxHeight,
            onlyImage: product.onlyImage
          }
        ) }, productIndex)) })
      ] }, categoryIndex)) : /* @__PURE__ */ jsx(Grid, { cols: cols?.default ?? 1, colsMd: cols?.md ?? 2, colsXl: cols?.xl ?? 3, className: "gap-10 px-6 flex-1", children: props.products.map((product, index) => /* @__PURE__ */ jsx("div", { className: product.colSpan ? `md:col-span-${product.colSpan}` : "", ref: (el) => {
        if (el) sectionsRef.current[index] = el;
      }, children: /* @__PURE__ */ jsx(
        Product,
        {
          title: product.title,
          shortDescription: product.short_description,
          description: product.description,
          image: product.image,
          maxHeight,
          setMaxHeight: updateMaxHeight,
          onlyImage: product.onlyImage
        }
      ) }, index)) }),
      options && /* @__PURE__ */ jsx("div", { className: "px-6 mt-10", children: /* @__PURE__ */ jsx(
        Product,
        {
          title: options.title,
          image: options.image,
          maxHeight,
          setMaxHeight: updateMaxHeight,
          onlyImage: true
        }
      ) })
    ] })
  ] });
};

const products$8 = [
  {
    title: "Silikónové náramky s potlačou",
    description: [
      "Šírka náramku 12, 20 a 25mm",
      "Obvod náramku 16, 18, 20 a 21cm",
      "Možnosť jednofarebnej aj viacfarebnej potlače",
      "Farebnosť náramkov podľa pantone vzorkovníka"
    ],
    image: [
      "/pages/entertainment/silikonove_naramky/potlac.png",
      "/pages/entertainment/silikonove_naramky/Silikon_potlac-1.png",
      "/pages/entertainment/silikonove_naramky/Silikon_potlac2-1.png",
      "/pages/entertainment/silikonove_naramky/Silikon_potlac3-1.png",
      "/pages/entertainment/silikonove_naramky/Silikon_potlac4-1.png",
      "/pages/entertainment/silikonove_naramky/Silikon_potlac5-1.png"
    ]
  },
  {
    title: "Silikónové náramky s ražbou",
    description: [
      "Šírka náramku 12, 20 a 25mm",
      "Obvod náramku 16, 18, 20 a 21cm",
      "Ražba emboss (vonkajšia) alebo deboss (vnútorná)",
      "Možnosť kombinácie ražby s výplňou farby",
      "Farebnosť náramkov podľa pantone vzorkovníka"
    ],
    image: [
      "/pages/entertainment/silikonove_naramky/razba.png",
      "/pages/entertainment/silikonove_naramky/Silikon_razba-1.png",
      "/pages/entertainment/silikonove_naramky/Silikon_razba2-1.png",
      "/pages/entertainment/silikonove_naramky/Silikon_razba3-1.png",
      "/pages/entertainment/silikonove_naramky/Silikon_razba4-1.png",
      "/pages/entertainment/silikonove_naramky/Silikon_razba5-1.png",
      "/pages/entertainment/silikonove_naramky/Silikon_razba6-1.png"
    ]
  },
  {
    title: "Silikónové náramky s RFID čipom",
    description: [
      "V ponuke rôzne šírky a obvody",
      "Možnosť potlače a ražby",
      "Oválny alebo guľatý tvar",
      "Farebnosť náramkov podľa pantone vzorkovníka",
      "Na výber veľké množstvo čipov (MF, FUDAN, EM4200, TK4100 a iné)",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Viac informácií v kategórii ",
        /* @__PURE__ */ jsx(Link, { to: "/zabava/rfid", className: "text-brand hover:underline", children: "RFID" })
      ] })
    ],
    image: [
      "/pages/entertainment/silikonove_naramky/Silikon_RFID-1.png",
      "/pages/entertainment/silikonove_naramky/Silikon_RFID2-1.png",
      "/pages/entertainment/silikonove_naramky/Silikon_RFID3-1.png"
    ]
  }
];
const options$1 = {
  title: "Možnosti",
  image: "/pages/entertainment/silikonove_naramky/silikon_moznosti-2.jpg"
};
const Silicones = () => {
  return /* @__PURE__ */ jsx(
    Subpage,
    {
      description: "V ponuke silikóny fosforeskujúce, segmentované, silikónová kľúčenka, silikónové hodinky, náramok s potlačou QR kódu, náramok s číslovaním, atypický náramok, náramok s viacfarebnou potlačou.",
      products: products$8,
      options: options$1
    }
  );
};

const Layout = () => {
  const location = useLocation();
  const data = Object.keys(pages.zabava.children ?? {}).reduce((acc, key) => {
    const _key = key;
    acc[`/zabava/${_key}`] = {
      title: pages.zabava.children?.[_key].title,
      img: pages.zabava.children?.[_key].img
    };
    return acc;
  }, {});
  const currentData = data[location.pathname] || { title: "Zábava", img: "/pages/entertainment/header.jpeg" };
  const isSubpage = location.pathname.split("/").length > 2;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopMenu, {}),
    /* @__PURE__ */ jsx(
      Header,
      {
        className: `
					h-[60vh] ${!isSubpage && "xl:h-[80vh]"}
					relative z-20`,
        img: currentData.img,
        children: /* @__PURE__ */ jsxs(Cover, { children: [
          /* @__PURE__ */ jsx(Title, { color: "light", size: "3xl text-center", className: "pt-16 md:pt-20", children: currentData.title ?? "Zábava" }),
          /* @__PURE__ */ jsx("div", { className: `${!isSubpage && "xl:block"} hidden`, children: /* @__PURE__ */ jsx(ArrowDown, { color: "light" }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx(Section, { fullHeight: false, className: "overflow-visible min-h-screen h-auto flex flex-col", children: /* @__PURE__ */ jsx(Outlet, {}) }),
    /* @__PURE__ */ jsx(ContactForm, {})
  ] });
};

const products$7 = [
  {
    title: "Vyšívané náramky",
    description: [
      "Štandardný rozmer 15mm x 350mm",
      "Možnosť použiť 7 farieb nití",
      "Jednorazové alebo opakované použitie"
    ],
    image: [
      "/pages/entertainment/latkove_naramky/vysivany.png",
      "/pages/entertainment/latkove_naramky/vysivany2.png",
      "/pages/entertainment/latkove_naramky/vysivany3.png",
      "/pages/entertainment/latkove_naramky/vysivany4.png",
      "/pages/entertainment/latkove_naramky/vysivany5.png"
    ]
  },
  {
    title: "Saténové náramky",
    description: [
      "Štandardný rozmer 15mm x 350mm",
      "Dve prevedenia materiálu (tenší a hrubší satén)",
      "Jednostranná aj obojstranná potlač"
    ],
    image: [
      "/pages/entertainment/latkove_naramky/saten.jpg",
      "/pages/entertainment/latkove_naramky/saten2.png",
      "/pages/entertainment/latkove_naramky/saten3.png"
    ]
  },
  {
    title: "RFID náramky s čipom",
    description: [
      "Čip/tag vhodný na všetky prevedenia látkových náramkov",
      "Viac typov čipov",
      "Rôzne materiály a veľkosti",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Viac informácií v kategórii ",
        /* @__PURE__ */ jsx(Link, { to: "/zabava/rfid", className: "text-brand hover:underline", children: "RFID" })
      ] })
    ],
    image: "/pages/entertainment/latkove_naramky/rfid.jpg"
  },
  {
    title: "Látkové náramky s QR kódom",
    description: [
      "Možnosť potlače QR kódu priamo na náramok alebo na plastový tag",
      "Čip/tag s potlačou QR kódu vhodný na všetky prevedenia látkových náramkov",
      "Rôzne prevedenia QR a čiarových kódov",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Viac informácií v kategórii ",
        /* @__PURE__ */ jsx(Link, { to: "/zabava/tlaciarne", className: "text-brand hover:underline", children: "Čiarový/QR kód" })
      ] })
    ],
    image: "/pages/entertainment/latkove_naramky/qr.jpg"
  },
  {
    title: "Ekologické náramky",
    description: [
      "Štandardný rozmer 15mm x 350mm",
      "Jednorazové alebo opakované použitie",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Viac informácií v kategórii ",
        /* @__PURE__ */ jsx(Link, { to: "/zabava/eko-produkty", className: "text-brand hover:underline", children: "EKO PRODUKTY" })
      ] })
    ],
    image: "/pages/entertainment/latkove_naramky/eko.jpg"
  }
];
const options = {
  title: "Patentky",
  image: [
    "/pages/entertainment/latkove_naramky/patentky_jednorazove.png",
    "/pages/entertainment/latkove_naramky/patentky_opakovane.png"
  ]
};
const Fabric = () => {
  return /* @__PURE__ */ jsx(
    Subpage,
    {
      products: products$7,
      options
    }
  );
};

const products$6 = [
  {
    category: "Puzdrá tvrdé",
    items: [
      {
        title: "Klasické puzdro na kartu (najpredávanejšie)",
        description: [
          "Vonkajší rozmer: 91x56mm",
          "Vnútorný rozmer: 85x54mm",
          "Farba: číra",
          "Orientácia: horizontálna, vertikálna",
          "Materiál: polypropylén"
        ],
        image: [
          "/pages/entertainment/puzdra/klasicke1.png",
          "/pages/entertainment/puzdra/klasicke2.png"
        ]
      },
      {
        title: "Pevné puzdro na 1-2 karty",
        description: [
          "Vonkajší rozmer: 92x62mm",
          "Vnútorný rozmer: 86x54mm",
          "Farba: priehľadná",
          "Puzdro vhodné na 1 alebo 2 karty",
          "Materiál: polykarbonát"
        ],
        image: [
          "/pages/entertainment/puzdra/pevne1.png",
          "/pages/entertainment/puzdra/pevne2.png"
        ]
      },
      {
        title: "Otvorené puzdro na kartu",
        description: [
          "Vonkajší rozmer: 90x68mm",
          "Vnútorný rozmer: 86x54mm",
          "Farby: biela, čierna, modrá, zelená, červená, žltá",
          "S koľajničkami pre bezpečné uchytenie karty",
          "Materiál: ABS"
        ],
        image: [
          "/pages/entertainment/puzdra/otvorene1.png",
          "/pages/entertainment/puzdra/otvorene2.png",
          "/pages/entertainment/puzdra/otvorene3.png",
          "/pages/entertainment/puzdra/otvorene4.png"
        ]
      },
      {
        title: "Premiové puzdro s otvorom",
        description: [
          "Conkajší rozmer: 90x58mm",
          "Vnútorný rozmer: 86x54mm",
          "Puzdro na jednu kartu",
          "Farba: matná, čierna",
          "Otvor na palec",
          "Materiál: polykarbonát"
        ],
        image: "/pages/entertainment/puzdra/puzdro_premium.png"
      },
      {
        title: "Pevné puzdro na 1-5 kariet",
        description: [
          "Vonkajší rozmer: 90x68mm",
          "Vnútorný rozmer: 86x54mm",
          "Farby: biela, čierna, modrá, zelená, červená, žltá",
          "S koľajničkami pre bezpečné uchytenie karty",
          "Materiál: ABS"
        ],
        image: "/pages/entertainment/puzdra/pevne_1-5.png"
      }
    ]
  },
  {
    category: "Puzdrá mäkké",
    items: [
      {
        title: "Vinylové puzdro farebné",
        description: [
          "Vnútorný rozmer: 59x86mm, 89x57mm, 99x68mm, 116x93mm",
          "4 veľkosti v ponuke, 3x horizontálne, 1x vertikálne",
          "Farby: priehľadná, čierna, modrá, zelená, oranžová, červená, biela, žltá",
          "Materiál: vinyl"
        ],
        image: [
          "/pages/entertainment/puzdra/vinyl_farebne1.png",
          "/pages/entertainment/puzdra/vinyl_farebne2.png",
          "/pages/entertainment/puzdra/vinyl_farebne3.png",
          "/pages/entertainment/puzdra/vinyl_farebne4.png"
        ]
      },
      {
        title: "Vinylové puzdro A6",
        description: [
          "Vonkajší rozmer: 112x172mm",
          "Vnútorný rozmer: 107x152mm",
          "Vhodné pre formát A6",
          "Orientácia: vertikálna s 3 otvormi na zavesenie",
          "Materiál: vinyl"
        ],
        image: [
          "/pages/entertainment/puzdra/vinyl_a6_1.png",
          "/pages/entertainment/puzdra/vinyl_a6_2.png"
        ]
      },
      {
        title: "Vinylové puzdro s uzatvárateľným ZIP systémom",
        description: [
          "Vonkajší rozmer: 76x126mm",
          "Vnútorný rozmer: 66x99mm",
          "Chráni pred nečistotami a vlhkosťou",
          "Ideálne pre použitie vo vonkajšom alebo priemyselnom prostredí",
          "Farba: priehľadná",
          "Materiál: vinyl"
        ],
        image: [
          "/pages/entertainment/puzdra/vinyl_zip.png",
          "/pages/entertainment/puzdra/vinyl_zip2.png"
        ]
      }
    ]
  },
  {
    category: "Rolery",
    items: [
      {
        title: "Roler KLASIK",
        description: [
          "Roler s priehľadným vinylovým remienkom a nylonovým lankom",
          "So sponou na uchytenie",
          "Farby: čierna, tmavá šedá, oranžová, červená, modrá, biela"
        ],
        image: "/pages/entertainment/puzdra/roler_klasik.png"
      },
      {
        title: "Roler s otočným štipcom",
        description: [
          "Jednofarebný s priehľadným remienkom",
          "Štipec na uchytenie otočný o 360°",
          "Jednoduchšie uchytenie kdekoľvek na oblečení",
          "Farby: čierna, modrá, červená, biela, priehľadná"
        ],
        image: "/pages/entertainment/puzdra/roler_otocny.png"
      },
      {
        title: "Roler PREMIUM",
        description: [
          "Roler s karabínou a chrómovým vonkajším rámom",
          "Priehľadný vinylový remienok",
          "Farby: priehľadná, čierna, priehľadná modrá, priehľadná červená, priehľadná žltá",
          "Kvalitné a pevné prevedenie",
          "Roler bez magnetizujúcich prvkov",
          "Vhodný aj pre použitie v špecifických podmienkach"
        ],
        image: "/pages/entertainment/puzdra/roler_premium.png"
      },
      {
        title: "Roler s 2 úchytmi",
        description: [
          "Roler s chrómovou karabínou a so sponou na zadnej strane",
          "Zabezpečuje fixovanie polohy ID karty",
          "Obsahuje háčik na zavesenie",
          "Háčikový systém pre aretáciu polohy - vaše ID zostane otočené dopredu",
          "Farby: červená, čierna, priehľadná modrá, priehľadná červená"
        ],
        image: [
          "/pages/entertainment/puzdra/roler_2_uchyty.png",
          "/pages/entertainment/puzdra/roler_2_uchyty_2.png"
        ]
      },
      {
        title: "Štýlový roler na kľúče",
        description: [
          "Odolný s predným plastovým krytom a zadným chrómovým puzdrom",
          "Návin je z odolnej retiazky a obsahuje krúžok na kľúče",
          "Na zadnej strane je robustná spona na uchytenie",
          "Farba: čierna"
        ],
        image: "/pages/entertainment/puzdra/roler_na_kluce.png"
      }
    ]
  },
  {
    category: "Menovky",
    items: [
      {
        title: "Menovka/Visačka s klipom",
        description: [
          "Vnútorný rozmer: 90x57mm",
          "Farba: priehľadná",
          "Orientácia: horizontálna",
          "Na zadnej strane s otvorom na palec",
          "Materiál: pružný PVC"
        ],
        image: [
          "/pages/entertainment/puzdra/visacka1.png",
          "/pages/entertainment/puzdra/visacka2.png"
        ]
      }
    ]
  }
];
const Cases = () => {
  return /* @__PURE__ */ jsx(
    Subpage,
    {
      description: "V ponuke nájdete široký výber puzdier, rolerov a menoviek. Ak potrebujete kompletný katalóg, kontaktujte nás cez formulár",
      products: products$6,
      withCategories: true
    }
  );
};

const products$5 = [
  {
    title: "Sublimačné šnúrky",
    description: [
      "Šírky 10, 15, 20 alebo 25 mm",
      "Jednostranná alebo obojstranná plnofarebná potlač",
      "Rôzne doplnky (trojzubec, bezpečnostná poistka a iné)",
      "Možnosť rôznych zakončení (karabína, úchyt na mobil, krúžok na kľúče a iné)"
    ],
    image: [
      "/pages/entertainment/snurky/snurky_sublimacne1.png",
      "/pages/entertainment/snurky/snurky_sublimacne2.png",
      "/pages/entertainment/snurky/snurky_sublimacne3.png",
      "/pages/entertainment/snurky/snurky_sublimacne4.png",
      "/pages/entertainment/snurky/snurky_sublimacne5.png",
      "/pages/entertainment/snurky/snurky_sublimacne6.png"
    ]
  },
  {
    title: "Šnúrky so sieťotlačou",
    description: [
      "Šírky 10, 15, 20 alebo 25 mm",
      "Jednostranná potlač s možnosťou viacerých farieb",
      "Rôzne doplnky (trojzubec, bezpečnostná poistka a iné)",
      "Možnosť rôznych zakončení (karabína, úchyt na mobil, krúžok na kľúče a iné)"
    ],
    image: [
      "/pages/entertainment/snurky/snurky_sietotlac1.png",
      "/pages/entertainment/snurky/snurky_sietotlac2.png",
      "/pages/entertainment/snurky/snurky_sietotlac3.png",
      "/pages/entertainment/snurky/snurky_sietotlac4.png"
    ]
  },
  {
    title: "Šnúrky bez potlače",
    description: [
      "Rôzne šírky, materiály a zakončenia",
      "Vhodné na backstage pasy pre organizátorov a účinkujúcich",
      "Niektoré modely skladom - dostupné ihneď",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Pre zaslanie kompletného katalógu nás ",
        /* @__PURE__ */ jsx(Link, { to: "", className: "text-brand hover:underline", children: "kontaktujte" })
      ] })
    ],
    image: [
      "/pages/entertainment/snurky/snurky_bez_potlace1.png",
      "/pages/entertainment/snurky/snurky_bez_potlace2.png",
      "/pages/entertainment/snurky/snurky_bez_potlace3.png"
    ]
  },
  {
    title: "Ekologické šnúrky",
    description: [
      "Kompostovateľné, recyklované PET a bambusové materiály",
      "Rôzne šírky, doplnky a farebné prevedenia",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Viac informácií v kategórii ",
        /* @__PURE__ */ jsx(Link, { to: "/zabava/eko", className: "text-brand hover:underline", children: "EKO produkty" })
      ] })
    ],
    image: [
      "/pages/entertainment/snurky/snurky_eko1.png",
      "/pages/entertainment/snurky/snurky_eko2.png",
      "/pages/entertainment/snurky/snurky_eko3.png",
      "/pages/entertainment/snurky/snurky_eko4.png"
    ]
  },
  {
    title: "Doplnky k šnúrkam",
    description: [],
    image: [
      "/pages/entertainment/snurky/doplnky_ku_snurkam.png"
    ],
    colSpan: 2,
    onlyImage: true
  }
];
const Cords = () => {
  return /* @__PURE__ */ jsx(
    Subpage,
    {
      products: products$5
    }
  );
};

const products$4 = [
  {
    title: "Tyvek náramky",
    description: [
      "vodoodolné samolepiace náramky na jednorazové použitie",
      "dostupné v dvoch šírkach: 19mm a 25mm",
      "možnosť jednofarebnej alebo plnofarebnej potlače",
      "rozmer potlače Tyvek 19: 1,4cm x 12cm",
      "rozmer potlače Tyvek 25: 1,9cm x 12cm",
      "vhodné na 1-2 dni",
      "viac ako 20 farieb v ponuke",
      "minimálny odber z farby je od 1000ks"
    ],
    image: [
      "/pages/entertainment/naramky/tyvek1.png",
      "/pages/entertainment/naramky/tyvek2.png"
    ]
  },
  {
    title: "Plastové náramky",
    description: [
      "vodoodolné náramky s plastovým uzáverom na jednorazové použitie",
      "v ponuke 460 Superband (šírka 1,3cm) a 470 Superband (šírka 2,5cm)",
      "možnosť jednofarebnej alebo plnofarebnej potlače",
      "rozmer potlače: 470 Superband: 5,7cm x 1,9cm",
      "rozmer potlače: 460 Superband: 7 cm x 0,8 cm",
      "vhodné na viac dní",
      "24 farieb v ponuke",
      "minimálny odber z farby je od 500ks"
    ],
    image: [
      "/pages/entertainment/naramky/plastovy_naramok1.png",
      "/pages/entertainment/naramky/plastovy_naramok2.jpg",
      "/pages/entertainment/naramky/plastovy_naramok3.jpg",
      "/pages/entertainment/naramky/plastovy_naramok4.jpg",
      "/pages/entertainment/naramky/plastovy_naramok5.png",
      "/pages/entertainment/naramky/plastovy_naramok_sb1.jpg",
      "/pages/entertainment/naramky/plastovy_naramok_sb2.jpg",
      "/pages/entertainment/naramky/plastovy_naramok_sb3.jpg",
      "/pages/entertainment/naramky/plastovy_naramok_sb4.jpg",
      "/pages/entertainment/naramky/plastovy_naramok_sb5.png"
    ]
  },
  {
    title: "Vinylové náramky",
    description: [
      "vodoodolné náramky s plastovým uzáverom na jednorazové použitie",
      "v ponuke náramky 430 Vinyl (šírka 1,3cm) a 420 Vinyl (šírka 2,5cm)",
      "možnosť jednofarebnej alebo plnofarebnej potlače",
      "rozmer potlače pri type 420 Vinyl: 6,3cm x 1,9cm",
      "rozmer potlače pri type 430 Vinyl: 9 cm x 0,8 cm",
      "vhodné na viac dní",
      "21 farieb v ponuke",
      "minimálny odber z farby je od 500ks"
    ],
    image: [
      "/pages/entertainment/naramky/vinylovy_naramok1.png",
      "/pages/entertainment/naramky/vinylovy_naramok2.jpg",
      "/pages/entertainment/naramky/vinylovy_naramok3.jpg",
      "/pages/entertainment/naramky/vinylovy_naramok4.jpg",
      "/pages/entertainment/naramky/vinylovy_naramok5.jpg"
    ]
  },
  {
    title: "Trblietavé náramky",
    description: [
      "trblietavé vodoodolné náramky s plastovým uzáverom na jednorazové použitie",
      "šírka náramku 1,9cm",
      "možnosť jednofarebnej potlače",
      "rozmer potlače: 8,2cm x 1,3cm",
      "rôzne motívy: stars, rain, liquid glitter",
      "rôzne farby: strieborná, čierna, červená, žltá, ružová, zelená, modrá, zlatá, vínová, fialová, oranžová, tyrkysová",
      "minimálny odber z farby je od 500ks"
    ],
    image: [
      "/pages/entertainment/naramky/trblietavy_naramok1.jpg",
      "/pages/entertainment/naramky/trblietavy_naramok2.jpg",
      "/pages/entertainment/naramky/trblietavy_naramok3.jpg",
      "/pages/entertainment/naramky/trblietavy_naramok4.jpg",
      "/pages/entertainment/naramky/trblietavy_naramok5.png",
      "/pages/entertainment/naramky/trblietavy_naramok6.jpg",
      "/pages/entertainment/naramky/trblietavy_naramok7.jpg",
      "/pages/entertainment/naramky/trblietavy_naramok8.png"
    ]
  },
  {
    title: "Kupónové náramky",
    description: [
      "vinylové náramky s plastovým uzáverom na jednorazové použitie, vodoodolné",
      "šírka náramku 1,9cm (bez kupónu)",
      "prevedenie s 3-kupónmi alebo 5-kupónmi",
      "možnosť jednofarebnej potlače na náramok aj kupón",
      "rozmer potlače na náramok: 8cm x 1,2cm",
      "rozmer potlače na 3-kupón: 2,2cm x 1,5cm; 5-kupón: 1,2cm x 1,2cm",
      "farby v ponuke: modrá, zelená, žltá, červená, oranžová, ružová",
      "minimálny odber z farby je od 500ks",
      "termín dodania: 3-kupónové (2-3 týždne), 5-kupónové (6-8 týždňov)"
    ],
    image: [
      "/pages/entertainment/naramky/kuponovy_naramok1.png",
      "/pages/entertainment/naramky/kuponovy_naramok2.jpg"
    ]
  }
];
const Bracelets = () => {
  return /* @__PURE__ */ jsx(
    Subpage,
    {
      description: /* @__PURE__ */ jsxs(Fragment, { children: [
        "Jednorazové samolepiace Tyvek náramky sú najpredávanejšie a najpoužívanejšie náramky na ruku, ideálne na potlač. Najčastejšie sa využívajú v zábavnom priemysle, na festivaloch a rôznych akciách pre označenie účastníkov, personálu alebo VIP hostí. Vďaka vodoodolnosti sú vhodné aj na kúpaliská a do aquaparkov.",
        /* @__PURE__ */ jsx("p", { className: "mt-6", children: "Ak hľadáte pevnejšie náramky na viac dní, plastové alebo vinylové náramky sú ideálnou voľbou. Ponúkame rôzne prevedenia, motívy, rozmery a farby." })
      ] }),
      products: products$4
    }
  );
};

const products$3 = [
  {
    title: "Plastové karty",
    description: [
      "Rozmer 85x54mm/54x85mm spĺňajúci normu ISO 7810",
      "Vhodné ako darčekové, vernostné, klubové a zľavové karty",
      "Atypické tvary, embos - strieborný, zlatý, biely, čierny",
      "Jednostranná, obojstranná potlač",
      "Lesklé, matné, trblietavé alebo transparentné prevedenie",
      "Biele karty na vlastnú potlač",
      "Personalizácia: čipy, číslovanie, čiarové/QR kódy",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Technológie: magnetické pásky, podpisový panel, čipy NFC, RFID (pozri aj ",
        /* @__PURE__ */ jsx(Link, { to: "/zabava/rfid", className: "text-brand hover:underline", children: "RFID" }),
        ")"
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "QR kód, čiarový kód (EAN kód 13, 128 a iné), pozri aj podstránku ",
        /* @__PURE__ */ jsx(Link, { to: "/zabava/qr", className: "text-brand hover:underline", children: "Čiarový/QR kód" })
      ] }),
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Čipy TK4100, EM 4200, MF 1k S50, Fudan a iné (pozri aj ",
        /* @__PURE__ */ jsx(Link, { to: "/zabava/rfid", className: "text-brand hover:underline", children: "RFID" }),
        ")"
      ] }),
      /* @__PURE__ */ jsx("strong", { children: "Kapacita výroby 350 tis. kariet za cca 3 týždne" })
    ],
    image: [
      "/pages/entertainment/karty/plastove_karty_1.png",
      "/pages/entertainment/karty/plastove_karty_2.png",
      "/pages/entertainment/karty/plastove_karty_3.png",
      "/pages/entertainment/karty/plastove_karty_4.png",
      "/pages/entertainment/karty/plastove_karty_5.png"
    ]
  },
  {
    title: "Papierové karty",
    description: [
      "Papierové, vodoodolné, perleťové, laminované",
      "Vhodné ako darčekové karty, backstage pasy",
      "Rozmery 85x54mm, 105x65mm, 120x85mm",
      "Digitálna potlač",
      "Jednostranná alebo obojstranná potlač",
      "Oblé rohy",
      "Výsek na zavesenie"
    ],
    image: [
      "/pages/entertainment/karty/papierove_karty_1.png",
      "/pages/entertainment/karty/papierove_karty_2.png",
      "/pages/entertainment/karty/papierove_karty_3.png",
      "/pages/entertainment/karty/papierove_karty_4.png",
      "/pages/entertainment/karty/papierove_karty_5.png"
    ]
  },
  {
    title: "Papierový obal s kartou",
    description: [
      "Rôzne rozmery a prevedenia",
      "Papierový obal s otvorom (euro výsek)",
      "Obal s vnútorným vreckom (využitie ako hotelová karta)",
      "Obal s otvorom na mieste zasunutia karty",
      "Karta vlepená do obalu",
      "Rôzne doplnky ako stierací panel, čiarový kód, personalizácia"
    ],
    image: [
      "/pages/entertainment/karty/obaly_na_kartu_1.png",
      "/pages/entertainment/karty/obaly_na_kartu_2.png",
      "/pages/entertainment/karty/obaly_na_kartu_3.png",
      "/pages/entertainment/karty/obaly_na_kartu_4.png",
      "/pages/entertainment/karty/obaly_na_kartu_5.png",
      "/pages/entertainment/karty/obaly_na_kartu_6.png"
    ]
  },
  {
    title: "EKO karty",
    description: [
      "Štandardný rozmer 85x54mm/54x85mm spĺňajúci normu ISO 7810",
      "Jednostranná alebo obojstranná potlač",
      "Rôzne recyklované materiály a prevedenia",
      "Množstvo doplnkov ako personalizácia, magnetické pole a iné",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Pre viac informácií nás ",
        /* @__PURE__ */ jsx(Link, { to: "", className: "text-brand hover:underline", children: "kontaktujte" }),
        " alebo nám odošlite správu cez ",
        /* @__PURE__ */ jsx(Link, { to: "", className: "text-brand hover:underline", children: "kontaktný formulár" })
      ] })
    ],
    image: [
      "/pages/entertainment/karty/eko_karty_1.png",
      "/pages/entertainment/karty/eko_karty_2.png",
      "/pages/entertainment/karty/eko_karty_3.png",
      "/pages/entertainment/karty/eko_karty_4.png"
    ]
  },
  {
    title: "RFID karty",
    description: [
      "Rozmer 85x54mm/54x85mm spĺňajúci normu ISO 7810",
      "Vhodné ako darčekové, vernostné, klubové a zľavové karty",
      "Jednostranná alebo obojstranná potlač",
      "Rôzne povrchové prevedenia a doplnky",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Čipy TK4100, EM 4200, MF 1k S50, Fudan a iné (pozri aj ",
        /* @__PURE__ */ jsx(Link, { to: "/zabava/rfid", className: "text-brand hover:underline", children: "RFID" }),
        ")"
      ] })
    ],
    image: [
      "/pages/entertainment/karty/rfid_karty_1.png",
      "/pages/entertainment/karty/rfid_karty_2.png",
      "/pages/entertainment/karty/rfid_karty_3.png",
      "/pages/entertainment/karty/rfid_karty_4.png"
    ]
  }
];
const Cards = () => {
  return /* @__PURE__ */ jsx(
    Subpage,
    {
      description: "V ponuke plastové karty, papierové karty, papierový obal s kartou, EKO karty, RFID karty",
      products: products$3
    }
  );
};

const products$2 = [
  {
    title: "EKO šnúrky",
    description: [
      "Kompostovateľné, recyklované PET a bambusové šnúrky",
      "Šírka 10, 15, 20 a 25mm",
      "V ponuke bez potlače alebo s potlačou",
      "Potlač jednostranná alebo obojstranná",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Rôzne doplnky a zakončenia (viac informácií v kategórii ",
        /* @__PURE__ */ jsx(Link, { to: "/zabava/snurky", className: "text-brand hover:underline", children: "Šnúrky na krk" }),
        ")"
      ] })
    ],
    image: [
      "/pages/entertainment/eko/eko_snurky1.png",
      "/pages/entertainment/eko/eko_snurky2.png",
      "/pages/entertainment/eko/eko_snurky3.png"
    ]
  },
  {
    title: "EKO látkové náramky",
    description: [
      "Štandardný rozmer 15mm x 350mm",
      "Jednostranná plnofarebná sublimačná potlač",
      "V ponuke drevené patentky na jednorazové alebo opakované použitie",
      "Vyrobené zo 100% recyklovaného polyesteru získaného z recyklovaných fliaš",
      "Pozri aj https://www.pdc-big.com/info/eco-friendly#"
    ],
    image: [
      "/pages/entertainment/eko/eko_naramky1.png",
      "/pages/entertainment/eko/eko_naramky2.png"
    ]
  },
  {
    title: "EKO karty",
    description: [
      "Štandardný rozmer 85x54 / 54x85 mm, spĺňajúci normu ISO 7810",
      "Jednostranná a obojstranná potlač",
      "Bio PVC, trávový papier, recyklované PVC, eko papier",
      "Množstvo doplnkov ako personalizácia, magnetické pole a iné",
      /* @__PURE__ */ jsxs(Fragment, { children: [
        "Pre viac informácií nás ",
        /* @__PURE__ */ jsx(Link, { to: "", className: "text-brand hover:underline", children: "kontaktujte" }),
        " alebo nám odošlite správu cez ",
        /* @__PURE__ */ jsx(Link, { to: "", className: "text-brand hover:underline", children: "kontaktný formulár" })
      ] })
    ],
    image: [
      "/pages/entertainment/eko/eko_karty1.png",
      "/pages/entertainment/eko/eko_karty2.png",
      "/pages/entertainment/eko/eko_karty3.png"
    ]
  }
];
const Eco = () => {
  return /* @__PURE__ */ jsx(
    Subpage,
    {
      products: products$2
    }
  );
};

const products$1 = [
  {
    title: "RFID karty",
    description: [
      "rozmer 85x54mm/54x85mm",
      "biele karty pre vlastnú dotlač",
      "plnofarebná jednostranná alebo obojstranná potlač",
      "vhodné ako darčekové, vernostné, klubové a zľavové karty",
      "rôzne povrchové prevedenia a doplnky",
      "rôzne frekvencie 125 kHz, 13.56 MHz, UHF",
      /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Link, { to: "/zabava/karty", className: "text-brand hover:underline", children: "čipy TK4100, EM 4200, MF 1k S50, Fudan a iné" }) })
    ],
    image: [
      "/pages/entertainment/rfid/RFID_karty1.png",
      "/pages/entertainment/rfid/RFID_karty2.png",
      "/pages/entertainment/rfid/RFID_karty3.png",
      "/pages/entertainment/rfid/RFID_karty4.png"
    ]
  },
  {
    title: "Silikónové náramky s RFID čipom",
    description: [
      "v ponuke rôzne šírky náramkov a obvody",
      "možnosť potlače, ražby, ražby s výplňou",
      "tvar oválny alebo guľatý",
      "rôzne možnosti zapínania remienka",
      "farebnosť náramkov podľa pantone vzorkovníka",
      "rôzne frekvencie 125 kHz, 13.56 MHz, UHF",
      /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Link, { to: "/zabava/silikonove-naramky", className: "text-brand hover:underline", children: "na výber veľké množstvo čipov (MF, FUDAN, EM4200, TK4100 a iné)" }) })
    ],
    image: [
      "/pages/entertainment/rfid/RFID_silikony1.png",
      "/pages/entertainment/rfid/RFID_silikony2.png",
      "/pages/entertainment/rfid/RFID_silikony3.png",
      "/pages/entertainment/rfid/RFID_silikony4.png",
      "/pages/entertainment/rfid/RFID_silikony5.png",
      "/pages/entertainment/rfid/RFID_silikony6.png",
      "/pages/entertainment/rfid/RFID_silikony7.png",
      "/pages/entertainment/rfid/RFID_silikony8.png",
      "/pages/entertainment/rfid/RFID_silikony9.png",
      "/pages/entertainment/rfid/RFID_silikony10.png",
      "/pages/entertainment/rfid/RFID_silikony11.png"
    ]
  },
  {
    title: "Látkové náramky s RFID čipom",
    description: [
      "čip/tag vhodný na všetky prevedenia látkových náramkov",
      "rôzne typy čipov (MF, FUDAN, EM4200, TK4100 a iné)",
      "TAG z mäkkého alebo tvrdého plastu",
      "rôzne frekvencie 125 kHz, 13.56 MHz, UHF",
      /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(Link, { to: "/zabava/latkove-naramky", className: "text-brand hover:underline", children: "rôzne materiály a veľkosti" }) })
    ],
    image: [
      "/pages/entertainment/rfid/RFID_latkove1.jpg",
      "/pages/entertainment/rfid/RFID_latkove2.jpg",
      "/pages/entertainment/rfid/RFID_latkove3.jpg",
      "/pages/entertainment/rfid/RFID_latkove4.png"
    ]
  },
  {
    title: "Kľúčenky s RFID čipom",
    description: [
      "prístupový čip na kľúče, vhodné na použitie s dochádzkovými systémami",
      "čipové otváranie dverí, použitie v priemysle",
      "frekvencie 125 kHz, 13.56 MHz, UHF",
      "rôzne typy čipov (MF, FUDAN, EM4200, TK4100 a iné)"
    ],
    image: [
      "/pages/entertainment/rfid/RFID_klucenky1.png",
      "/pages/entertainment/rfid/RFID_klucenky2.png",
      "/pages/entertainment/rfid/RFID_klucenky3.png"
    ]
  }
];
const Rfid = () => {
  return /* @__PURE__ */ jsx(
    Subpage,
    {
      products: products$1
    }
  );
};

const ProductCardWide = ({ className, title, description, image, link, invert = false, contain = false }) => {
  return /* @__PURE__ */ jsx(Link, { to: link, className: "", children: /* @__PURE__ */ jsxs("div", { className: `w-full grid grid-cols-1 sm:grid-cols-10 shadow-2xl rounded-xl overflow-hidden relative transform hover:-translate-x-2 transition-transform ${className ?? ""} bg-white`, children: [
    /* @__PURE__ */ jsx("div", { className: `sm:col-span-3 ${invert ? "sm:order-2" : ""}`, children: /* @__PURE__ */ jsx("img", { src: image, alt: title, className: `w-full h-full ${contain ? "object-contain" : "object-cover"} object-center` }) }),
    /* @__PURE__ */ jsxs("div", { className: `sm:col-span-7 py-2 px-10 flex flex-col justify-center ${invert ? "order-1" : ""}`, children: [
      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold mb-2", children: title }),
      /* @__PURE__ */ jsx("p", { children: Array.isArray(description) ? description.map((desc, index) => /* @__PURE__ */ jsx("span", { className: "block text-gray-600 mb-2", children: desc }, index)) : /* @__PURE__ */ jsx("span", { className: "block text-gray-600", children: description }) })
    ] })
  ] }) });
};

const Business = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(TopMenu, {}),
    /* @__PURE__ */ jsx(Header, { className: "h-[50vh] md:h-[80vh] relative z-20", img: "./pages/business/header.jpeg", children: /* @__PURE__ */ jsx(Cover, { children: /* @__PURE__ */ jsx(Title, { color: "light", size: "3xl text-center", children: "Biznis" }) }) }),
    /* @__PURE__ */ jsx(Section, { fullHeight: false, className: "px-5 md:px-10 lg:px-20 xl:px-40 py-20 overflow-visible", children: /* @__PURE__ */ jsxs("div", { className: "relative z-20 flex flex-col gap-6 md:gap-12", children: [
      /* @__PURE__ */ jsx(
        ProductCardWide,
        {
          title: "Karty",
          description: [
            "Ponúkame širokú škálu vstupných kariet vďaka možnosti plnofarebnej potlače loga, mena zamestnanca, fotografie a iných dôležitých informácií. Naše karty sú kompatibilné so všetkými bežnými čítačkami a zabezpečovacími systémami.",
            "S personalizovanými vstupnými kartami môžete ľahko sledovať a kontrolovať pohyb zamestnancov, čím zvýšite úroveň bezpečnosti a ochrany vašich priestorov.",
            "Ideálne riešenie pre administratívne budovy, výrobné haly, sklady či konferenčné priestory."
          ],
          image: "/pages/business/karty.png",
          link: "/zabava/karty"
        }
      ),
      /* @__PURE__ */ jsx(
        ProductCardWide,
        {
          title: "Šnúrky na krk",
          description: [
            "Šnúrky na krk sú skvelým riešením pre zlepšenie organizácie a bezpečnosti vo vašej firme.",
            "Poskytnite svojim zamestnancom, návštevníkom a obchodným partnerom šnúrky na krk s identifikačnými kartami, kľúčmi alebo bezpečnostnými prístupovými kartami.",
            "V ponuke štýlové saténové aj odolné textilné varianty, všetko s možnosťou plnofarebnej potlače alebo bez potlače.",
            "Posilnite firemnú identitu a zvýšte povedomie o vašej značke pomocou šnúrok na krk s vaším logom a farbami.",
            "Ideálne pre konferencie, obchodné stretnutia, veľtrhy alebo každodenné pracovné prostredie."
          ],
          image: "/pages/business/snurky.png",
          link: "/zabava/snurky",
          invert: true
        }
      ),
      /* @__PURE__ */ jsx(
        ProductCardWide,
        {
          title: "Puzdrá, rolery, menovky",
          description: [
            "Chráňte a prezentujte identifikačné karty vašich zamestnancov, návštevníkov a obchodných partnerov s našimi kvalitnými plastovými visačkami a puzdrami.",
            "Sú výborným doplnkom ku šnúrkam na krk alebo kartám.",
            "Dôležité identifikačné údaje tak budú vždy viditeľné a chránené.",
            "Menovky sú neoceniteľným nástrojom na budovanie vzťahov a posilnenie komunikácie vo vašej firme.",
            "Umožňujú rýchlu a jednoduchú identifikáciu, čo prispieva k ľahšiemu nadväzovaniu kontaktov a zvýšeniu bezpečnosti v pracovnom prostredí.",
            "Rolery sú praktickým držiakom na visačky s identifikačnými kartami, ktoré možno umiestniť kdekoľvek na oblečení.",
            "Poskytujú pohodlie a flexibilitu pri používaní identifikačných kariet počas pracovného dňa.",
            "V ponuke rôzne veľkosti, materiály a prevedenia, ktoré sa prispôsobia vašim potrebám a firemnému štýlu.",
            "Zabezpečte profesionálny a efektívny systém identifikácie vo vašej firme."
          ],
          image: "/pages/business/puzdra_rolery_menovky.png",
          link: "/zabava/puzdra-menovky-rolery"
        }
      ),
      /* @__PURE__ */ jsx(
        ProductCardWide,
        {
          title: "RFID produkty",
          description: [
            "Naša ponuka RFID produktov vrátane čipových kariet, látkových a silikónových náramkov a kľúčeniek zabezpečí bezproblémový a bezpečný systém pre vašu firmu.",
            "RFID riešenia umožňujú bezkontaktné transakcie, čím zvyšujú efektivitu a pohodlie vo vašom pracovnom prostredí.",
            "S našimi RFID riešeniami môžete zlepšiť bezpečnosť a kontrolu prístupu vo vašej firme.",
            "RFID karty a náramky umožňujú jednoduchý a rýchly prístup do firemných priestorov, monitorovanie pohybu zamestnancov a návštevníkov, a zlepšujú celkovú organizáciu.",
            "RFID produkty sú ideálne pre využitie v dochádzkových systémoch, stravovacích kartách a systémoch oprávnenia vstupu.",
            "Naše RFID produkty sú ideálne pre administratívne budovy, sklady, výrobné haly a konferenčné centrá.",
            "Vďaka možnosti plnofarebnej potlače môžete personalizovať karty a náramky s vaším logom a ďalšími dôležitými informáciami."
          ],
          image: "/pages/business/rfid.png",
          link: "/zabava/rfid",
          invert: true
        }
      ),
      /* @__PURE__ */ jsx(
        ProductCardWide,
        {
          title: "Tlačiarne a QR/čiarové kódy",
          description: [
            "Vytlačte čiarové kódy, texty, logá a jedinečné variabilné údaje na každý identifikátor priamo vo firme.",
            "Naše tlačiarne umožňujú tlač čiarových kódov a QR kódov, ktoré zabezpečia rýchlu a spoľahlivú identifikáciu vašich zamestnancov a návštevníkov.",
            "Naše riešenia sú ideálne pre rôzne firemné aplikácie vrátane dochádzkových systémov, stravovacích kariet a oprávnení vstupu.",
            "Začať s čiarovými kódmi a QR kódmi je jednoduchšie, než si myslíte.",
            "Dokonca aj malé organizácie môžu profitovať z ich používania vďaka nízkym počiatočným nákladom.",
            "Používaním čiarových kódov a QR kódov zabezpečíte rýchlu a spoľahlivú identifikáciu zamestnancov a ochranu pred falšovaním.",
            "Naše tlačiarne a čiarové/QR kódy sú ideálne pre administratívne budovy, sklady, výrobné haly a konferenčné centrá."
          ],
          image: "/pages/business/tlaciarne.png",
          link: "/zabava/tlaciarne",
          contain: true
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(ContactForm, {})
  ] });
};

const products = [
  {
    title: "Tlačiarne",
    short_description: "Vytlačte čiarové kódy, text, logá a jedinečné variabilné údaje na každý náramok priamo na mieste podujatia. Pri atrakciách s časovanými aktivitami je možné termálne náramky s čiarovými kódmi vytlačiť aj s dátumom a časom vstupu.",
    description: [
      "TSC TDP225W tlačiareň s priamou termálnou tlačou bola vyvinutá špeciálne pre potreby potlače identifikačných náramkov",
      "možná tlač aj akýchkoľvek iných štítkov do šírky 52 mm",
      "predný LCD displej",
      "jednoduché zakladanie média",
      "štandardné pripojenie cez Ethernet a USB 2.0",
      "podporuje Zebra ZPL-II a EPL2",
      "možnosť upevnenia tlačiarne aj na stenu"
    ],
    image: "/pages/entertainment/tlaciarne/tlaciaren.png"
  },
  {
    title: "Čiarový/QR kód",
    short_description: "Začať s čiarovými kódmi a QR kódmi je jednoduchšie, než si myslíte. Dokonca aj malé organizácie môžu profitovať z ich používania. Výhodou sú nízke počiatočné náklady. Používaním čiarových kódov a QR kódov umožníte prepojenie identifikačných náramkov zákazníkov k vašim predajným miestam, zabezpečíte rýchlu a spoľahlivú identifikáciu návštevníkov a ochranu pred falšovaním.",
    description: [
      "možnosť natlačiť čiarový kód (QR) pre interakcie na sociálnych médiách na rôzne typy náramkov",
      "TAG (identifikátory) s natlačeným čiarovým kódom (QR) aplikovateľný na rôzne typy náramkov",
      "čiarové kódy pre vstupné, predajné miesta a iné platobné systémy",
      "vytlačte si vlastné prispôsobené náramky v priebehu niekoľkých sekúnd",
      "tlač náramkov na požiadanie a na mieste",
      "tlačte len toľko, koľko potrebujete – keď ich potrebujete"
    ],
    image: [
      "/pages/entertainment/tlaciarne/kod1.png",
      "/pages/entertainment/tlaciarne/kod2.png",
      "/pages/entertainment/tlaciarne/kod3.png"
    ]
  }
];
const Printers = () => {
  return /* @__PURE__ */ jsx(
    Subpage,
    {
      products,
      cols: {
        default: 1,
        md: 2,
        xl: 2
      }
    }
  );
};

const pages = {
  "/": {
    component: HomePage
  },
  "zdravotnictvo": {
    component: Health
  },
  "biznis": {
    component: Business
  },
  "zabava": {
    component: Layout,
    children: {
      "": {
        component: Entertainment,
        title: "Zábava",
        img: "/offers/entertainment.jpeg"
      },
      "silikonove-naramky": {
        component: Silicones,
        title: "Silikónové náramky"
        //img: "/pages/entertainment/silikonove.jpeg"
      },
      "latkove-naramky": {
        component: Fabric,
        title: "Látkové náramky",
        img: "/pages/entertainment/latkove_naramky/header.jpeg"
      },
      "karty": {
        component: Cards,
        title: "Karty",
        img: "/pages/entertainment/karty/header.jpeg"
      },
      "puzdra-menovky-rolery": {
        component: Cases,
        title: "Puzdrá, menovky, rolery"
        //img: "/pages/entertainment/plastove_karty.png"
      },
      "naramky": {
        component: Bracelets,
        title: "Náramky",
        img: "/pages/entertainment/naramky/header.jpg"
      },
      "snurky": {
        component: Cords,
        title: "Šnúrky na krk"
        //img: "/pages/entertainment/snurky.png"
      },
      "eko-produkty": {
        component: Eco,
        title: "EKO produkty"
        //img: "/pages/entertainment/eko.png"
      },
      "rfid": {
        component: Rfid,
        title: "RFID",
        img: "/pages/entertainment/rfid/header.jpeg"
      },
      "tlaciarne": {
        component: Printers,
        title: "Tlačiarne a čiarové kódy"
        //img: "/pages/entertainment/tlaciarne.png"
      }
    }
  }
};

const useScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);
};

const GA_MEASUREMENT_ID = "G-SYZHXQ9FMY";
const useAnalytics = () => {
  const location = useLocation();
  useEffect(() => {
    const hasConsent = localStorage.getItem("cookie_consent") === "true";
    if (!hasConsent) return;
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }, []);
  useEffect(() => {
    const hasConsent = localStorage.getItem("cookie_consent") === "true";
    if (!hasConsent) return;
    ReactGA.send({ hitType: "pageview", page: location.pathname });
    console.log("Page view tracked:", location.pathname);
  }, [location.pathname]);
};

function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);
  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
    window.location.reload();
  };
  if (!visible) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 w-full bg-gray-800/95 text-white px-4 py-8 z-[9999]", children: /* @__PURE__ */ jsxs("div", { className: "w-full mx-auto grid grid-cols-1 sm:grid-cols-3 items-center", children: [
    /* @__PURE__ */ jsx("div", { className: "sm:col-start-2 text-center text-lg", children: "Táto stránka používa cookies pre analýzu návštevnosti." }),
    /* @__PURE__ */ jsxs("div", { className: "sm:col-start-3 flex justify-end mt-4 sm:mt-0 gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: acceptCookies,
          className: "bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded",
          children: "Súhlasím"
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setVisible(false),
          className: "bg-transparent border-2 border-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded",
          children: "Odmietam"
        }
      )
    ] })
  ] }) });
}

const scrollToForm = (event) => {
  event.preventDefault();
  const el = document.getElementById("form");
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};
const AppContent = () => {
  useAnalytics();
  const location = useLocation();
  const containerRef = useRef(null);
  useScrollToTop();
  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          containerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" }
        );
      });
      return () => ctx.revert();
    }, [location.pathname]);
  }
  return /* @__PURE__ */ jsxs("div", { ref: containerRef, children: [
    /* @__PURE__ */ jsx(Routes, { children: Object.entries(pages).map(([path, { component: Component, children }]) => {
      if (children) {
        return /* @__PURE__ */ jsx(Route, { path, element: /* @__PURE__ */ jsx(Component, {}), children: Object.entries(children).map(([childPath, { component: ChildComponent }]) => /* @__PURE__ */ jsx(Route, { path: childPath, element: /* @__PURE__ */ jsx(ChildComponent, {}) }, childPath)) }, path);
      }
      return /* @__PURE__ */ jsx(Route, { path, element: /* @__PURE__ */ jsx(Component, {}) }, path);
    }) }),
    /* @__PURE__ */ jsx(CookieBanner, {})
  ] });
};
const App = () => {
  return /* @__PURE__ */ jsx(BrowserRouter, { children: /* @__PURE__ */ jsx(AppContent, {}) });
};

function Index() {
  return /* @__PURE__ */ jsxs(Html, { lang: "en", children: [
    /* @__PURE__ */ jsxs(Head, { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1"
        }
      ),
      /* @__PURE__ */ jsx("title", { children: "Grid" }),
      /* @__PURE__ */ jsx(Link$1, { rel: "stylesheet", href: indexStyles })
    ] }),
    /* @__PURE__ */ jsx(Body, { children: /* @__PURE__ */ jsx(App, {}) })
  ] });
}

const mainScriptUrl = "assets/index-CzLUsVe3.js";

async function create(context) {
  return await create$1(Index, context, mainScriptUrl);
}

export { create };
