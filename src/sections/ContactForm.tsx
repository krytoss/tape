import Section from "../components/Layout/Section"
import Title from "../components/Layout/Title"
import Input from "../components/Form/Input"
import { useEffect, useRef, useState } from "react"
import Form from "../components/Form/Form"
import Grid from "../components/Layout/Grid"
import Selectbox from "../components/Form/Selectbox"
import Textbox from "../components/Form/Textbox"
import Checkbox from "../components/Form/Checkbox"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import gsap from "gsap"

gsap.registerPlugin(ScrollTrigger)

const ContactForm: React.FC = () => {

	const leftRef = useRef(null)
	const rightRef = useRef(null)

	useEffect(() => {
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
	}, [])

	const [ mail, setMail ] = useState<string>("")
	const [ phone, setPhone ] = useState<string>("")
	const [ service, setService ] = useState<string>("")
	const [ message, setMessage ] = useState<string>("")
	const [ agreement, setAgreement ] = useState<boolean>(false)
	const [ isSending, setIsSending ] = useState<boolean>(false)

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
	]

	const resetValues = () => {
		setMail("")
		setPhone("")
		setService("")
		setMessage("")
		setAgreement(false)
	}

	const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (isSending) return
		setIsSending(true)
		const serviceLabel = options.find((option) => option.value === service)?.label
		const formData = new FormData();
		formData.append("email", mail);
		formData.append("phone", phone);
		formData.append("service", serviceLabel ?? "");
		formData.append("message", message);
		try {
			const res = await fetch("https://api.tape.sk/send.php", {
				method: "POST",
				body: formData,
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
		resetValues()
		setIsSending(false)
	}

	const [isShowModal, setIsShowModal] = useState(false)
	const handleShowModal = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault()
		setIsShowModal(true)
	}
	const handleCloseModal = () => {
		setIsShowModal(false)
	}

	return (
		<Section id="form">
			{
				isShowModal && (
					<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center px-4 md:px-20 z-[9999]">
						<div className="bg-white p-5 rounded shadow-lg max-h-[calc(100vh-2rem)] md:max-h-[calc(100vh-10rem)] overflow-y-auto">
						<h1 className="mb-4">Zásady spracovania osobných údajov</h1>
						<p><strong>TAPE s.r.o.</strong>, so sídlom Mlynská 2238, 934 01 Levice, IČO: 35979852, zapísaná v obchodnom registri Okresného súdu Nitra, ako prevádzkovateľ webovej stránky <strong>tape.sk</strong>, týmto poskytuje informácie o spracúvaní osobných údajov získaných prostredníctvom kontaktného formulára.</p>

						<h2 className="mt-4 font-semibold">1. Aké údaje spracúvame</h2>
						<p>Prostredníctvom kontaktného formulára spracúvame tieto osobné údaje:</p>
						<ul className="list-disc list-inside">
							<li>meno a priezvisko (ak sa vyplní),</li>
							<li>e-mailová adresa,</li>
							<li>telefónne číslo,</li>
							<li>obsah správy (text).</li>
						</ul>

						<h2 className="mt-4 font-semibold">2. Účel spracúvania</h2>
						<p>Údaje spracúvame výhradne za účelom:</p>
						<ul className="list-disc list-inside">
							<li>kontaktovania vás späť a vybavenia vašej požiadavky, ktorú ste nám poslali cez formulár.</li>
						</ul>

						<h2 className="mt-4 font-semibold">3. Právny základ spracúvania</h2>
						<p>Vaše osobné údaje spracúvame na základe <strong>vášho výslovného súhlasu</strong>, ktorý udeľujete odoslaním formulára a zaškrtnutím príslušného políčka.</p>

						<h2 className="mt-4 font-semibold">4. Doba uchovávania</h2>
						<p>Osobné údaje uchovávame <strong>len po dobu nevyhnutne potrebnú</strong> na vybavenie vašej požiadavky.</p>

						<h2 className="mt-4 font-semibold">5. Komu môžu byť údaje sprístupnené</h2>
						<p>Vaše údaje <strong>nesprístupňujeme žiadnym tretím stranám</strong>. Prístup k nim majú len oprávnené osoby v rámci spoločnosti TAPE s.r.o., ktoré zabezpečujú komunikáciu s návštevníkmi webu.</p>

						<h2 className="mt-4 font-semibold">6. Vaše práva</h2>
						<p>V súvislosti s ochranou osobných údajov máte tieto práva:</p>
						<ul className="list-disc list-inside">
							<li>právo na prístup k svojim údajom,</li>
							<li>právo na opravu nepresných údajov,</li>
							<li>právo na výmaz údajov (tzv. právo na zabudnutie),</li>
							<li>právo obmedziť spracúvanie,</li>
							<li>právo namietať proti spracúvaniu,</li>
							<li>právo podať sťažnosť na Úrad na ochranu osobných údajov.</li>
						</ul>

						<h2 className="mt-4 font-semibold">7. Kontakt</h2>
						<p>V prípade akýchkoľvek otázok alebo požiadaviek ohľadom vašich osobných údajov nás môžete kontaktovať na e-mailovej adrese:</p>
						<p><strong><a href="mailto:info@tape.sk">📧 info@tape.sk</a></strong></p>
						<div className="text-right">
							<button onClick={handleCloseModal} className="mt-4 bg-brand text-white py-2 px-4 rounded">Zavrieť</button>
						</div>
						</div>
					</div>
				)
			}
			<Grid cols={1} colsXl={5} className="flex flex-1 h-full justify-center items-center">
				<div ref={leftRef} className="xl:bg-gray-300 w-full h-full flex items-center justify-center col-span-2 pt-20 xl:py-20">
					<Title sizeLg="8xl" sizeMd="6xl" size="4xl" className="mt-20 mb-20 px-20 text-center xl:text-left">
						Napíšte nám
					</Title>
				</div>
				<div ref={rightRef} className="w-full h-full flex flex-col items-center justify-center col-span-3 xl:py-20">
					<Form onSubmit={handleSend} className="w-full sm:w-4/5 xl:w-4/5 max-w-[40rem] px-16">
						<Input
							id="email"
							name="email"
							type="text"
							label="E-mail"
							placeholder="E-mail"
							value={mail}
							onChange={setMail}
							required
						/>
						<Input
							id="phone"
							name="phone"
							type="text"
							label="Telefonický kontakt"
							placeholder="Telefonický kontakt"
							value={phone}
							onChange={setPhone}
							required
						/>
						<Selectbox
							id="service"
							label="Mám záujem o:"
							options={options}
							required
							value={service}
							onChange={(value) => {
								setService(value)
							}}
						/>
						<Textbox
							label="Správa"
							value={message}
							onChange={(value) => {
								setMessage(value)
							}}
							required
						/>
						<Checkbox
							id={"agreement"}
							label="Súhlasím so spracovaním mojich osobných údajov za účelom vybavenia mojej požiadavky"
							checked={agreement}
							onChange={(checked) => {setAgreement(checked)}}
							required
						/>
						<div>
							<a href="#" className="text-slate-500 text-sm mt-2 hover:text-slate-800 transition duration-300" onClick={handleShowModal}>
								Zásady spracovania osobných údajov
							</a>
						</div>
						<button className={`${isSending ? "bg-gray-300 cursor-not-allowed" : "bg-brand"} text-white font-semibold py-2 px-4 rounded mt-4 hover:bg-brand/80 transition duration-300`}>
							{ isSending ? "Posiela sa..." : "Odoslať" }
						</button>
					</Form>
				</div>
			</Grid>
		</Section>
	)
}

export default ContactForm