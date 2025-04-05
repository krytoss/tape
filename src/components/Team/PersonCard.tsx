import { useEffect, useRef } from "react";

type Props = {
	img: string,
	name: string,
	position: string,
	height?: number,
	setMaxHeight?: (height: number) => void,
	width?: number,
	setMaxWidth?: (width: number) => void
}

const PersonCard: React.FC<Props> = ({ img, name, position, height, setMaxHeight, width, setMaxWidth }) => {

	  const ref = useRef<HTMLDivElement>(null);

	  useEffect(() => {
		if (ref.current && setMaxHeight) {
		  const h = ref.current.offsetHeight;
		  setMaxHeight(h);
		}
	  }, [ ref, setMaxHeight ]);

	return (
		<div
			ref={ref}
			className={
				`person-card bg-white/50 h-auto pt-10 px-10 shadow-xl relative hover:-top-1 hover:animate-pulse} w-full`
			}
			style={{ height: height ? `${height}px` : "auto" }}
		>
			<div className="w-40 h-40 bg-blue-500 overflow-hidden relative text-center m-auto rounded-full">
				<img src={img} className="h-auto w-full object-cover absolute top-0 left-1/2 transform -translate-x-1/2" />
			</div>
			<div className="p-4 text-center">
				<h3 className="text-xl font-semibold">{name}</h3>
				<p className="text-lg">{position}</p>
			</div>
		</div>
	)
}

export default PersonCard