import Section from "../components/Layout/Section"
import Link from "../components/Navigation/Link"

const KeyAreas: React.FC = () => {
	return (
		<Section id="areas" className="bg-white text-slate-700">
			<div className="mx-auto flex h-full w-full max-w-6xl flex-1 flex-col justify-center px-6 py-20 sm:px-10 lg:px-16">
				<div className="max-w-4xl">
					<h1 className="text-3xl font-bold leading-tight sm:text-4xl xl:text-5xl">
						Komplexné identifikačné systémy a náramky pre každé odvetvie
					</h1>
					<p className="mt-6 text-lg text-slate-600 md:text-xl">
						Sme popredným distribútorom riešení pre bezpečnú identifikáciu v zdravotníctve,
						efektívnu organizáciu podujatí a moderný biznis. Ako oficiálny partner spoločnosti
						PDC (Brady) pre slovenský trh prinášame kvalitu overenú desaťročiami.
					</p>
				</div>

				<div className="mt-12">
					<h2 className="text-2xl font-semibold uppercase tracking-wide sm:text-3xl">
						Naše hlavné oblasti pôsobenia
					</h2>
					<div className="mt-8 grid gap-8 lg:grid-cols-3">
						<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-md">
							<h3 className="text-xl font-semibold">
								Identifikácia v zdravotníctve
							</h3>
							<p className="mt-3 text-slate-600">
								Zvyšujeme bezpečnosť pacientov pomocou certifikovaných náramkov, etikiet na lieky
								a termálnych tlačiarní.
							</p>
							<Link
								to="zdravotnictvo"
								color="white"
								uppercase={false}
								className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-brand px-5 py-2 text-base font-semibold tracking-normal hover:bg-brand/90 transition"
							>
								Viac o zdravotníctve
							</Link>
						</div>

						<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-md">
							<h3 className="text-xl font-semibold">
								Identifikácia pre eventy a zábavu
							</h3>
							<p className="mt-3 text-slate-600">
								Dodávame festivalové náramky s potlačou, plastové a eko karty, šnúrky na krk,
								silikónové náramky a RFID riešenia.
							</p>
							<Link
								to="zabava"
								color="white"
								uppercase={false}
								className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-brand px-5 py-2 text-base font-semibold tracking-normal hover:bg-brand/90 transition"
							>
								Viac o eventoch a zábave
							</Link>
						</div>

						<div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:shadow-md">
							<h3 className="text-xl font-semibold">
								Biznis a firemná identifikácia
							</h3>
							<p className="mt-3 text-slate-600">
								Zabezpečujeme zamestnanecké karty, šnúrky na krk (lanyardy), puzdrá, rolery,
								menovky a dochádzkové karty na mieru.
							</p>
							<Link
								to="biznis"
								color="white"
								uppercase={false}
								className="mt-6 inline-flex w-fit items-center justify-center rounded-full bg-brand px-5 py-2 text-base font-semibold tracking-normal hover:bg-brand/90 transition"
							>
								Viac o biznis riešeniach
							</Link>
						</div>
					</div>
				</div>
			</div>
		</Section>
	)
}

export default KeyAreas
