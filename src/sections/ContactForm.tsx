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
					start: "top 50%",
					end: "bottom 50%",
					toggleActions: "play reverse play reverse",
					once: false
				}
			});
		
			gsap.fromTo(rightRef.current, { opacity: 0, x: 100 }, {
				opacity: 1,
				x: 0,
				duration: 1,
				scrollTrigger: {
					trigger: rightRef.current,
					start: "top 50%",
					end: "bottom 50%",
					toggleActions: "play reverse play reverse",
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

	return (
		<Section id="form">
			<Grid cols={1} colsXl={5} className="h-full justify-center items-center">
				<div ref={leftRef} className="xl:bg-gray-300 w-full h-full flex items-center justify-center col-span-2">
					<Title className="mb-20 px-20 text-center xl:text-left">
						Napíšte nám
					</Title>
				</div>
				<div ref={rightRef} className="w-full h-full flex flex-col items-center justify-center col-span-3">
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
							label="Súhlasím s používaním mojich údajov na uvedený účel"
							checked={agreement}
							onChange={(checked) => {setAgreement(checked)}}
							required
						/>
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