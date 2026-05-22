export default function BrokenFile(props: React.SVGAttributes<SVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="36"
			height="45"
			fill="none"
			viewBox="0 0 36 45"
			{...props}>
			<title>Broken File</title>
			<path
				fill="currentColor"
				stroke="currentColor"
				d="M.5.5h2v44h-2zM33.5 12.5h2v32h-2z"
			/>
			<path
				fill="currentColor"
				stroke="currentColor"
				d="M35.5 42.5v2h-34v-2zM23.5.5v2H.5v-2zM32.5 15.5v2h-11v-2zM20.5 17.5h-2v-14h2zM23.5 30.5h2v2h-2zM13.5 27.5h9v2h-9zM10.5 30.5h2v2h-2zM9.5 12.5h2v5h-2zM24.5 3.5h2v2h-2zM30.5 9.5h2v2h-2zM27.5 6.5h2v2h-2z"
			/>
		</svg>
	)
}