export default function Card({
	heading,
	icon,
	bgColor,
	subheading,
	subsubheading,
	detail,
}) {
	return (
		<div className={"card bg-" + bgColor}>
			<img src={icon} alt="" />
			<h1>{heading}</h1>
			<h4>{subheading}</h4>
			<h5>{subsubheading}</h5>
			<p>{detail}</p>
		</div>
	);
}
