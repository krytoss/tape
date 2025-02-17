import Section from "../components/Layout/Section"
import Title from "../components/Layout/Title"
import Input from "../components/Form/Input"
import { useState } from "react"
import Form from "../components/Form/Form"
import Grid from "../components/Layout/Grid"
import Selectbox from "../components/Form/Selectbox"
import Textbox from "../components/Form/Textbox"
import Checkbox from "../components/Form/Checkbox"

const ContactForm: React.FC = () => {

	const [ mail, setMail ] = useState<string>("")
	const [ phone, setPhone ] = useState<string>("")
	const [ service, setService ] = useState<string>("")
	const [ message, setMessage ] = useState<string>("")
	const [ agreement, setAgreement ] = useState<boolean>(false)

	const options = [
		{
			value: undefined,
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

	return (
		<Section>
			<Grid cols={1} colsXl={5} className="h-full justify-center items-center">
				<div className="xl:bg-gray-300 w-full h-full flex items-center justify-center col-span-2">
					<Title className="mb-20 px-20 text-center xl:text-left">
						Napíšte nám
					</Title>
				</div>
				<div className="w-full flex flex-col items-center justify-center col-span-3">
					<Form className="w-full sm:w-4/5 xl:w-4/5 max-w-[40rem] px-16">
						<Input
							id="email"
							name="email"
							type="text"
							label="E-mail"
							placeholder="E-mail"
							value={mail}
							onChange={setMail}
							required={true}
						/>
						<Input
							id="phone"
							name="phone"
							type="text"
							label="Telefonický kontakt"
							placeholder="Telefonický kontakt"
							value={phone}
							onChange={setPhone}
							required={true}
						/>
						<Selectbox
							id="service"
							label="Mám záujem o:"
							options={options}
							required={true}
						/>
						<Textbox
							label="Správa"
							value=""
							onChange={(value) => {}}
						/>
						<Checkbox
							label="Súhlasím s používaním mojich údajov na uvedený účel"
							checked={agreement}
							onChange={(checked) => {setAgreement(checked)}}
							required={true}
						/>
					</Form>
				</div>
			</Grid>
		</Section>
	)
}

export default ContactForm