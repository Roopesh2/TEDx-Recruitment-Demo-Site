import forwardSVG from "../assets/forward.svg";
export default function Button({ text, variant }) {
	return (
		<button className={"btn-" + variant}>
			Lorem Ipsum
			<img src={forwardSVG} alt="" />
		</button>
	);
}
