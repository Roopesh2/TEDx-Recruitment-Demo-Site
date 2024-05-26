export default function Card({
	heading,
	icon,
	bgColor,
	subheading,
	subsubheading,
	detail,
}) {
	let dotcolor = bgColor == "primary" ? "white" : "primary";
	return (
		<div className={`card bg-${bgColor}`}>
			<img src={icon} alt="" />
			<div className="container">
				<h1>
					{heading}
					<span className={`color-${dotcolor}`}>.</span>
				</h1>
				<h2>{subheading}</h2>
				<div className="details">
					<h4>{subsubheading}</h4>
					<p>{detail}</p>
				</div>
			</div>
		</div>
	);
}
