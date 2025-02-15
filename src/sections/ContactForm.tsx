import Section from "../components/Layout/Section"
import Title from "../components/Layout/Title"
import Input from "../components/Form/Input"
import { useState } from "react"
import Link from "../components/Navigation/Link"
import Form from "../components/Form/Form"
import Grid from "../components/Layout/Grid"
import Selectbox from "../components/Form/Selectbox"
import Textbox from "../components/Form/Textbox"

const ContactForm: React.FC = () => {

	const [ mail, setMail ] = useState<string>("")
	const [ phone, setPhone ] = useState<string>("")

	const options = [
		{
			value: "1",
			label: "Option 1"
		},
		{
			value: "2",
			label: "Option 2"
		}
	]

	return (
		<Section>
			<div className="h-full w-full py-10 justify-center items-center flex flex-col">
				<Title className="mb-20 px-20 text-center">
					Napíšte nám
				</Title>
				<Form className="w-full sm:w-4/5 xl:w-2/5 max-w-[40rem] px-16">
					<Input
						id="email"
						name="email"
						type="text"
						label="E-mail"
						placeholder="E-mail"
						value={mail}
						onChange={setMail}
					/>
					<Input
						id="phone"
						name="phone"
						type="text"
						label="Telefonický kontakt"
						placeholder="Telefonický kontakt"
						value={phone}
						onChange={setPhone}
					/>
					<Selectbox
						id="service"
						label="Mám záujem o:"
						options={options}
					/>
					<Textbox
						label="Správa"
						value=""
						onChange={(value) => {}}
					/>
				</Form>
			</div>
		</Section>
	)
}

export default ContactForm